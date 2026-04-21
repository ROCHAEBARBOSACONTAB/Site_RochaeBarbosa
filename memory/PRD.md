# PRD — Rocha & Barbosa Assessoria Contábil

## Problema Original (verbatim)
Site multi-page corporativo para assessoria fiscal/tributária (Rocha & Barbosa), com foco em Diagnóstico Fiscal, Recuperação de Créditos, Estruturação/Compliance, especialidade em TOTVS Protheus, SPED e Reforma Tributária. Blog técnico, base de recursos (parte aberta + parte gated), chat IA + WhatsApp, login de cliente, dashboard admin, planos (visual), paleta rígida: azul escuro #0A2A57 + dourado #D4AF37 + branco.

## Stack
- Frontend: React 19 + Tailwind + shadcn/ui + sonner + lucide-react
- Backend: FastAPI + MongoDB (motor)
- LLM: Claude Sonnet 4.5 via emergentintegrations (EMERGENT_LLM_KEY)
- Auth: JWT (bcrypt) + seed admin

## User Personas
- **Gestor fiscal / CFO** de média/grande empresa → procura diagnóstico/recuperação
- **Controller em empresa Protheus** → consome blog técnico e recursos
- **Admin interno** → acompanha leads no dashboard

## Core Requirements (estáticos)
- Paleta/tipografia rígidas (azul #0A2A57, dourado #D4AF37, Playfair Display + Montserrat)
- Multi-page: Home, Serviços, Diagnóstico, Blog, Recursos, Sobre, Contato, Planos, Login/Registro, Admin
- Conversão via diagnóstico (formulário → banco → admin)
- Chat IA + WhatsApp em todas as páginas
- Blog e recursos seedados (dados técnicos reais)

## Implementado (fev/2026)
- [x] Backend: auth (JWT), leads, contact, blog, resources (gated), chat (Claude 4.5), admin stats/leads/contacts, seed completo
- [x] Frontend: 12 rotas com design premium azul+dourado, header glass, footer, chat widget flutuante
- [x] Seed: admin user, 6 blog posts técnicos, 6 recursos (3 abertos + 3 gated)
- [x] Testes: backend 12/12 endpoints; frontend fluxos principais validados (diagnóstico, contato, blog, gated resource, admin dashboard)
- [x] Correções: chat-toggle z-index acima do badge preview; espaçamento header autenticado

## Credenciais
- Admin: `admin@rochabarbosa.com.br` / `Admin@2026`

## Backlog (P1/P2)
- P1: Integração Stripe real nos planos (Essencial/Corporativo/Estratégico)
- P1: Envio de e-mail de notificação de lead (Resend/SendGrid)
- P1: Página individual de cliente logado (histórico de downloads/solicitações)
- P2: Google Calendar para agendamento real de reuniões (OAuth)
- P2: Upload de arquivos reais para recursos (object storage)
- P2: Editor admin de blog posts (CRUD via dashboard)
- P2: Analytics de conversão (tráfego → diagnóstico)
- P2: SEO avançado (sitemap, schema.org, meta tags dinâmicas por post)

## Nota técnica
- `/api/chat` hoje replaya histórico via N chamadas; refatorar para manter contexto em sessão única (otimização de custo/latência).
