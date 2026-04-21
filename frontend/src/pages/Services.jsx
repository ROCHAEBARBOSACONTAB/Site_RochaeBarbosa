import React from "react";
import { Link } from "react-router-dom";
import { AlertTriangle, Target, CheckCircle2, ArrowRight, FileSearch, TrendingUp, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: FileSearch, title: "Diagnóstico Fiscal",
    problem: "A maioria das empresas opera há anos com inconsistências silenciosas na escrituração e no ERP — que só aparecem em malha fina.",
    impact: "Risco de autuação, passivo tributário e perda de créditos legítimos acumulada ano após ano.",
    solution: "Raio-X técnico cruzando SPED, ERP e obrigações acessórias. Entregamos relatório com riscos, perdas e oportunidades quantificadas.",
    cta: "Solicitar Diagnóstico",
  },
  {
    icon: TrendingUp, title: "Recuperação de Créditos",
    problem: "Mudanças jurisprudenciais (conceito ampliado de insumo, exclusões, teses consolidadas) criam créditos de PIS/COFINS e ICMS subaproveitados.",
    impact: "Cinco anos de valores recuperáveis que simplesmente escapam — porque a operação fiscal não foi revisada sob a nova ótica.",
    solution: "Revisão retroativa com lastro documental, mapeamento por centro de custo e execução técnica de retificações. Sem achismo.",
    cta: "Avaliar Oportunidade",
  },
  {
    icon: ShieldCheck, title: "Estruturação & Compliance",
    problem: "Parametrizações frágeis, exceções fiscais sem governança e integrações satélites geram risco estrutural contínuo no ERP.",
    impact: "Cada novo ciclo fiscal amplifica inconsistências — principalmente em empresas TOTVS Protheus com alta customização.",
    solution: "Revisão de TIOs, governança de regras fiscais, conciliação periódica ECD × EFD e plano de melhoria contínua com indicadores.",
    cta: "Estruturar Agora",
  },
];

export default function Services() {
  return (
    <div data-testid="services-page">
      <section className="bg-[#0A2A57] text-white py-24 relative noise">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow text-[#E6C96A] mb-5">Serviços</div>
          <h1 className="font-serif text-4xl lg:text-6xl max-w-4xl leading-[1.08]">
            Três frentes técnicas para proteger e otimizar sua operação fiscal.
          </h1>
          <div className="gold-line mt-10 w-40" />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 space-y-16">
          {services.map((s, i) => (
            <div key={i} data-testid={`service-${i}`} className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <div className="w-14 h-14 border border-[#D4AF37] flex items-center justify-center mb-5">
                  <s.icon size={26} strokeWidth={1.3} className="text-[#D4AF37]" />
                </div>
                <div className="eyebrow mb-3">0{i+1} · Serviço</div>
                <h2 className="font-serif text-3xl lg:text-4xl text-[#0A2A57]">{s.title}</h2>
                <Link to="/diagnostico" className="inline-flex items-center gap-2 mt-6 btn-outline-blue" data-testid={`service-cta-${i}`}>
                  {s.cta} <ArrowRight size={14} strokeWidth={1.5}/>
                </Link>
              </div>
              <div className="lg:col-span-8 grid md:grid-cols-3 gap-5">
                {[
                  { icon: AlertTriangle, label: "Problema", text: s.problem, color: "#A67C00" },
                  { icon: Target, label: "Impacto", text: s.impact, color: "#0E4A8A" },
                  { icon: CheckCircle2, label: "Solução", text: s.solution, color: "#0A2A57" },
                ].map((b, j) => (
                  <div key={j} className="premium-card p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <b.icon size={16} strokeWidth={1.5} style={{ color: b.color }} />
                      <div className="eyebrow" style={{ color: b.color }}>{b.label}</div>
                    </div>
                    <p className="text-[#333] text-[14.5px] leading-relaxed">{b.text}</p>
                  </div>
                ))}
              </div>
              {i < services.length - 1 && <div className="lg:col-span-12 gold-line opacity-50 mt-4" />}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#F2F2F2] py-20">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow mb-4">Próximo Passo</div>
          <h2 className="font-serif text-3xl lg:text-4xl text-[#0A2A57] mb-6">Comece pelo diagnóstico.</h2>
          <p className="text-[#555] mb-8 leading-relaxed">Qualquer um dos serviços acima começa com uma análise técnica da sua operação. Solicite a sua.</p>
          <Link to="/diagnostico" className="btn-gold">Solicitar Diagnóstico</Link>
        </div>
      </section>
    </div>
  );
}
