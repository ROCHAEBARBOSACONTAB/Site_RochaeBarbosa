from fastapi import FastAPI, APIRouter, HTTPException, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os, logging, uuid, bcrypt, jwt
from pathlib import Path
from pydantic import BaseModel, Field, EmailStr
from typing import List, Optional
from datetime import datetime, timezone, timedelta
# from emergentintegrations.llm.chat import LlmChat, UserMessage

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

JWT_SECRET = os.environ['JWT_SECRET']
JWT_ALG = os.environ.get('JWT_ALGORITHM', 'HS256')
EMERGENT_LLM_KEY = os.environ['EMERGENT_LLM_KEY']

app = FastAPI(title="Rocha & Barbosa Assessoria API")
api = APIRouter(prefix="/api")
security = HTTPBearer(auto_error=False)

# ---------------- Utilities ----------------
def now_utc():
    return datetime.now(timezone.utc).isoformat()

def hash_pw(pw: str) -> str:
    return bcrypt.hashpw(pw.encode(), bcrypt.gensalt()).decode()

def verify_pw(pw: str, hashed: str) -> bool:
    return bcrypt.checkpw(pw.encode(), hashed.encode())

def create_token(user_id: str, role: str) -> str:
    payload = {"sub": user_id, "role": role, "exp": datetime.now(timezone.utc) + timedelta(days=7)}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALG)

async def get_current_user(cred: Optional[HTTPAuthorizationCredentials] = Depends(security)):
    if not cred:
        raise HTTPException(401, "Not authenticated")
    try:
        payload = jwt.decode(cred.credentials, JWT_SECRET, algorithms=[JWT_ALG])
    except jwt.PyJWTError:
        raise HTTPException(401, "Invalid token")
    user = await db.users.find_one({"id": payload["sub"]}, {"_id": 0, "password": 0})
    if not user:
        raise HTTPException(401, "User not found")
    return user

async def get_admin(user=Depends(get_current_user)):
    if user.get("role") != "admin":
        raise HTTPException(403, "Admin only")
    return user

# ---------------- Models ----------------
class RegisterIn(BaseModel):
    name: str
    email: EmailStr
    password: str
    company: Optional[str] = None

class LoginIn(BaseModel):
    email: EmailStr
    password: str

class LeadIn(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    revenue_range: Optional[str] = None
    erp: Optional[str] = None
    message: Optional[str] = None
    source: str = "diagnostic"  # diagnostic | contact | resource_gate

class ContactIn(BaseModel):
    name: str
    email: EmailStr
    phone: Optional[str] = None
    subject: Optional[str] = None
    message: str

class ChatIn(BaseModel):
    session_id: str
    message: str

# ---------------- Auth ----------------
@api.post("/auth/register")
async def register(data: RegisterIn):
    if await db.users.find_one({"email": data.email.lower()}):
        raise HTTPException(400, "E-mail já cadastrado")
    uid = str(uuid.uuid4())
    doc = {
        "id": uid, "name": data.name, "email": data.email.lower(),
        "password": hash_pw(data.password), "company": data.company,
        "role": "client", "created_at": now_utc()
    }
    await db.users.insert_one(doc)
    token = create_token(uid, "client")
    return {"token": token, "user": {"id": uid, "name": data.name, "email": data.email.lower(), "role": "client"}}

@api.post("/auth/login")
async def login(data: LoginIn):
    u = await db.users.find_one({"email": data.email.lower()})
    if not u or not verify_pw(data.password, u["password"]):
        raise HTTPException(401, "Credenciais inválidas")
    token = create_token(u["id"], u["role"])
    return {"token": token, "user": {"id": u["id"], "name": u["name"], "email": u["email"], "role": u["role"]}}

@api.get("/auth/me")
async def me(user=Depends(get_current_user)):
    return user

# ---------------- Leads (diagnóstico/contato) ----------------
@api.post("/leads")
async def create_lead(data: LeadIn):
    doc = data.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = now_utc()
    doc["status"] = "new"
    await db.leads.insert_one(doc)
    return {"ok": True, "id": doc["id"]}

@api.post("/contact")
async def create_contact(data: ContactIn):
    doc = data.model_dump()
    doc["id"] = str(uuid.uuid4())
    doc["created_at"] = now_utc()
    await db.contacts.insert_one(doc)
    return {"ok": True, "id": doc["id"]}

# ---------------- Blog ----------------
@api.get("/blog")
async def list_posts(category: Optional[str] = None, limit: int = 50):
    q = {}
    if category and category.lower() != "all":
        q["category"] = category
    posts = await db.blog_posts.find(q, {"_id": 0, "content": 0}).sort("created_at", -1).to_list(limit)
    return posts

@api.get("/blog/{slug}")
async def get_post(slug: str):
    p = await db.blog_posts.find_one({"slug": slug}, {"_id": 0})
    if not p:
        raise HTTPException(404, "Post não encontrado")
    return p

# ---------------- Resources ----------------
@api.get("/resources")
async def list_resources():
    return await db.resources.find({}, {"_id": 0, "file_url": 0}).sort("created_at", -1).to_list(200)

@api.post("/resources/{rid}/access")
async def access_resource(rid: str, data: LeadIn):
    r = await db.resources.find_one({"id": rid}, {"_id": 0})
    if not r:
        raise HTTPException(404, "Recurso não encontrado")
    if r.get("gated"):
        lead_doc = data.model_dump()
        lead_doc["id"] = str(uuid.uuid4())
        lead_doc["created_at"] = now_utc()
        lead_doc["source"] = f"resource:{r['title']}"
        lead_doc["status"] = "new"
        await db.leads.insert_one(lead_doc)
    return {"file_url": r["file_url"], "title": r["title"]}

# ---------------- Chat IA ----------------
@api.post("/chat")
async def chat(data: ChatIn):
    system_msg = (
        "Você é o Consultor Virtual da Rocha & Barbosa Assessoria Contábil, especialista brasileira em "
        "consultoria fiscal e tributária. Responda com autoridade técnica, em português, em tom corporativo "
        "e premium. Especialidades: Diagnóstico Fiscal, Recuperação de Créditos Tributários, SPED (EFD ICMS/IPI, "
        "EFD Contribuições), Reforma Tributária (CBS/IBS), Estruturação/Compliance, e parametrização fiscal em "
        "TOTVS Protheus. Seja objetivo (2-4 parágrafos curtos). Sempre termine sugerindo que o visitante "
        "solicite um Diagnóstico Fiscal gratuito em /diagnostico. Nunca prometa percentuais de economia "
        "específicos; fale de 'oportunidades identificadas após análise'."
    )
    try:
        chat_client = LlmChat(
            api_key=EMERGENT_LLM_KEY,
            session_id=data.session_id,
            system_message=system_msg,
        ).with_model("anthropic", "claude-sonnet-4-5-20250929")
        # persist user msg
        await db.chat_messages.insert_one({
            "id": str(uuid.uuid4()), "session_id": data.session_id,
            "role": "user", "text": data.message, "created_at": now_utc()
        })
        # Load history into new chat instance (simple approach: emergentintegrations keeps internal history per instance)
        history = await db.chat_messages.find(
            {"session_id": data.session_id}, {"_id": 0}
        ).sort("created_at", 1).to_list(50)
        # Replay previous turns except the last (which is current)
        for m in history[:-1]:
            if m["role"] == "user":
                await chat_client.send_message(UserMessage(text=m["text"]))
        reply = await chat_client.send_message(UserMessage(text=data.message))
        await db.chat_messages.insert_one({
            "id": str(uuid.uuid4()), "session_id": data.session_id,
            "role": "assistant", "text": reply, "created_at": now_utc()
        })
        return {"reply": reply}
    except Exception as e:
        logging.exception("chat error")
        raise HTTPException(500, f"Erro no chat: {str(e)}")

# ---------------- Admin ----------------
@api.get("/admin/leads")
async def admin_leads(_: dict = Depends(get_admin)):
    return await db.leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)

@api.get("/admin/contacts")
async def admin_contacts(_: dict = Depends(get_admin)):
    return await db.contacts.find({}, {"_id": 0}).sort("created_at", -1).to_list(500)

@api.get("/admin/stats")
async def admin_stats(_: dict = Depends(get_admin)):
    return {
        "leads": await db.leads.count_documents({}),
        "contacts": await db.contacts.count_documents({}),
        "users": await db.users.count_documents({}),
        "posts": await db.blog_posts.count_documents({}),
    }

@api.get("/")
async def root():
    return {"status": "ok", "service": "Rocha & Barbosa API"}

app.include_router(api)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"], allow_headers=["*"],
)

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

# ---------------- Seed ----------------
async def seed():
    # Admin user
    if not await db.users.find_one({"email": "admin@rochabarbosa.com.br"}):
        await db.users.insert_one({
            "id": str(uuid.uuid4()), "name": "Administrador",
            "email": "admin@rochabarbosa.com.br",
            "password": hash_pw("Admin@2026"),
            "company": "Rocha & Barbosa", "role": "admin",
            "created_at": now_utc(),
        })
    # Blog posts
    if await db.blog_posts.count_documents({}) == 0:
        posts = [
            {
                "slug": "sped-efd-contribuicoes-erros-mais-comuns",
                "title": "EFD-Contribuições: os 5 erros mais comuns que geram autuação",
                "excerpt": "Um guia técnico sobre as inconsistências silenciosas na escrituração de PIS/COFINS que costumam ser identificadas apenas em malha fina.",
                "category": "SPED",
                "author": "Equipe Rocha & Barbosa",
                "read_time": "8 min",
                "content": "<p>A EFD-Contribuições é uma das obrigações acessórias que mais gera passivo tributário nas empresas brasileiras. A razão é simples: a complexidade de reconhecer corretamente os créditos de PIS/COFINS no regime não-cumulativo, combinada a parametrizações frágeis no ERP, produz inconsistências que só aparecem em malha fina.</p><h3>1. Classificação fiscal equivocada</h3><p>Insumos classificados como despesa operacional — e vice-versa — geram créditos indevidos ou glosa de crédito legítimo.</p><h3>2. CST incorreto em notas de entrada</h3><p>O Código de Situação Tributária define a tomada de crédito. Parametrizações antigas no TOTVS Protheus frequentemente desatualizam CSTs após reforma de cadastros.</p><h3>3. Falta de conciliação ECD x EFD</h3><p>Divergências entre escrituração contábil e fiscal são o principal gatilho de fiscalização eletrônica.</p><h3>4. Ajustes manuais sem suporte documental</h3><p>Ajustes inseridos diretamente nos registros M100/M500 sem rastreabilidade geram autuação com presunção de dolo.</p><h3>5. Ausência de revisão retroativa</h3><p>A empresa tem até 5 anos para revisar e recuperar créditos. A maioria não faz.</p><p><strong>Na prática:</strong> em 82% das operações que auditamos no último ano identificamos ao menos 3 dos erros acima. A correção preventiva evita autuação e, em muitos casos, gera recuperação de créditos no mesmo processo.</p>",
            },
            {
                "slug": "reforma-tributaria-cbs-ibs-impacto-erp",
                "title": "Reforma Tributária: o que muda no ERP (CBS/IBS) a partir de 2026",
                "excerpt": "Análise prática do impacto da CBS e do IBS na parametrização fiscal de sistemas como TOTVS Protheus — e por que a maioria das empresas vai chegar atrasada.",
                "category": "Reforma Tributária",
                "author": "Equipe Rocha & Barbosa",
                "read_time": "12 min",
                "content": "<p>A Reforma Tributária aprovada cria dois novos tributos sobre consumo — CBS (federal) e IBS (estadual/municipal) — que substituem PIS, COFINS, ICMS e ISS em um modelo de IVA dual.</p><h3>Período de transição</h3><p>A convivência entre o modelo atual e o novo começa em 2026 com alíquotas simbólicas de teste, expandindo gradualmente até 2033. Isso significa: seu ERP precisará calcular dois regimes simultaneamente por 7 anos.</p><h3>Impacto no Protheus</h3><p>Os módulos SIGACOM, SIGAFIS e SIGAFAT exigem revisão completa da matriz de impostos, TIOs, e regras de tributação por estado/município. Empresas com operações multi-estado terão complexidade multiplicada.</p><h3>O que fazer agora</h3><p>Três frentes devem começar em 2026: mapeamento fiscal atual, diagnóstico de parametrização e plano de transição documentado. Empresas que esperarem a proximidade da virada encontrarão o mercado de consultoria saturado e custo 3-4x maior.</p>",
            },
            {
                "slug": "protheus-sigafis-parametrizacao-correta",
                "title": "TOTVS Protheus SIGAFIS: parametrização correta para evitar glosa",
                "excerpt": "Checklist técnico dos principais pontos de atenção na configuração do módulo fiscal do Protheus que evitam glosa de crédito.",
                "category": "Protheus",
                "author": "Equipe Rocha & Barbosa",
                "read_time": "10 min",
                "content": "<p>O módulo SIGAFIS concentra a inteligência fiscal do TOTVS Protheus. Uma parametrização inadequada gera efeitos em cascata: escrituração incorreta, crédito glosado, e autuação.</p><h3>Matriz de tributação</h3><p>A tabela F4_ — Tipos de Entrada e Saída (TES/TIO) — é o coração da operação. Cada TES deve refletir corretamente o tratamento de ICMS, IPI, PIS e COFINS para a combinação produto × cliente/fornecedor × estado.</p><h3>Regras de exceção</h3><p>Exceções fiscais cadastradas em SF7/SFB precisam de governança. Sem controle, a empresa acumula milhares de regras conflitantes ao longo dos anos.</p><h3>Integração com EFD</h3><p>O gerador do Bloco C e Bloco M depende diretamente da qualidade dos dados. Garbage in, garbage out.</p>",
            },
            {
                "slug": "recuperacao-creditos-pis-cofins-insumos",
                "title": "Recuperação de créditos de PIS/COFINS: o conceito ampliado de insumo",
                "excerpt": "Após o STJ consolidar o conceito de essencialidade/relevância, a maioria das empresas opera com créditos subaproveitados. Entenda o que revisar.",
                "category": "Créditos Tributários",
                "author": "Equipe Rocha & Barbosa",
                "read_time": "9 min",
                "content": "<p>O STJ, no REsp 1.221.170, consolidou o conceito ampliado de insumo para fins de crédito de PIS/COFINS: tudo aquilo que for essencial ou relevante à atividade da empresa.</p><h3>O que mudou na prática</h3><p>Itens antes tratados como despesa — uniformes, EPIs, combustíveis, serviços de manutenção, frete entre estabelecimentos — passaram a gerar crédito em diversas situações.</p><h3>Prazo de recuperação</h3><p>Cinco anos. Empresas que não revisaram sua matriz de créditos desde 2018 têm alta probabilidade de identificar valores relevantes a recuperar.</p><h3>Como nós trabalhamos</h3><p>Partimos de um diagnóstico técnico, mapeamos oportunidades por centro de custo, validamos documentalmente e apenas então executamos a retificação. Nada é feito sem lastro.</p>",
            },
            {
                "slug": "diagnostico-fiscal-o-que-e-como-funciona",
                "title": "Diagnóstico Fiscal: o que é, como funciona, e por que sua empresa precisa",
                "excerpt": "Um raio-X técnico da operação fiscal que identifica riscos, inconsistências e oportunidades. Entenda o processo em detalhe.",
                "category": "SPED",
                "author": "Equipe Rocha & Barbosa",
                "read_time": "7 min",
                "content": "<p>O Diagnóstico Fiscal é um raio-X estruturado da operação fiscal da empresa. Cruzamos escrituração, ERP, notas fiscais e obrigações acessórias para identificar três categorias de achados.</p><h3>Riscos</h3><p>Inconsistências que podem gerar autuação ou malha fina — classificação incorreta, CST divergente, ausência de documentação.</p><h3>Perdas</h3><p>Créditos legítimos não aproveitados por parametrização inadequada ou desconhecimento de teses fiscais aplicáveis.</p><h3>Oportunidades</h3><p>Regimes especiais, benefícios fiscais estaduais, teses tributárias consolidadas que se aplicam à operação.</p><p>O diagnóstico é o ponto de partida. A execução vem depois — e sempre com plano documentado.</p>",
            },
            {
                "slug": "compliance-fiscal-empresas-protheus",
                "title": "Compliance Fiscal em empresas que utilizam TOTVS Protheus",
                "excerpt": "Por que empresas com Protheus têm riscos fiscais específicos — e como estruturar um compliance técnico e contínuo.",
                "category": "Protheus",
                "author": "Equipe Rocha & Barbosa",
                "read_time": "11 min",
                "content": "<p>Empresas que operam com TOTVS Protheus têm um perfil de risco fiscal específico. A complexidade do ERP, aliada à dependência de parametrizações customizadas, produz um ambiente onde pequenos desvios geram grandes impactos.</p><h3>Fontes típicas de risco</h3><p>Customizações não documentadas, falta de governança sobre exceções fiscais, integrações com sistemas satélites sem conciliação, e gestores fiscais sem acesso técnico ao sistema.</p><h3>O que um compliance técnico entrega</h3><p>Revisão estruturada de TIOs, governança de exceções, conciliação periódica ECD × EFD × escrituração, e plano de melhoria contínua com indicadores.</p>",
            },
        ]
        for p in posts:
            p["id"] = str(uuid.uuid4())
            p["created_at"] = now_utc()
            p["cover_url"] = "https://images.pexels.com/photos/6120169/pexels-photo-6120169.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        await db.blog_posts.insert_many(posts)
    # Resources
    if await db.resources.count_documents({}) == 0:
        resources = [
            {"title": "Tabela de CFOP completa (2026)", "description": "Planilha com todos os CFOPs vigentes e uso prático.", "category": "Tabelas", "gated": False, "file_url": "https://www.receita.fazenda.gov.br"},
            {"title": "Checklist de CST de ICMS", "description": "Guia rápido de CSTs por operação.", "category": "Tabelas", "gated": False, "file_url": "https://www.receita.fazenda.gov.br"},
            {"title": "Glossário SPED", "description": "Termos técnicos do SPED explicados.", "category": "Apoio Técnico", "gated": False, "file_url": "https://www.receita.fazenda.gov.br"},
            {"title": "Matriz de parametrização Protheus SIGAFIS", "description": "Modelo técnico completo de parametrização fiscal.", "category": "Protheus", "gated": True, "file_url": "https://www.receita.fazenda.gov.br"},
            {"title": "Playbook de Recuperação de Créditos PIS/COFINS", "description": "Metodologia passo-a-passo para revisão de créditos.", "category": "Créditos Tributários", "gated": True, "file_url": "https://www.receita.fazenda.gov.br"},
            {"title": "Guia Reforma Tributária para ERPs", "description": "Impactos da CBS/IBS nos principais sistemas do mercado.", "category": "Reforma Tributária", "gated": True, "file_url": "https://www.receita.fazenda.gov.br"},
        ]
        for r in resources:
            r["id"] = str(uuid.uuid4())
            r["created_at"] = now_utc()
        await db.resources.insert_many(resources)

@app.on_event("startup")
async def on_startup():
    await seed()

@app.on_event("shutdown")
async def on_shutdown():
    client.close()
