import React from "react";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const plans = [
  { name: "Essencial", price: "Sob consulta", desc: "Para empresas que querem estruturar compliance fiscal básico.", features: ["Diagnóstico Fiscal inicial", "Revisão de obrigações acessórias", "Relatório mensal de conformidade", "Suporte técnico por e-mail"], featured: false },
  { name: "Corporativo", price: "Sob consulta", desc: "Para operações complexas com TOTVS Protheus.", features: ["Tudo do Essencial", "Parametrização SIGAFIS", "Revisão trimestral de TIOs", "Conciliação ECD × EFD", "Suporte prioritário"], featured: true },
  { name: "Estratégico", price: "Sob consulta", desc: "Execução técnica integral com consultor dedicado.", features: ["Tudo do Corporativo", "Recuperação de créditos full", "Preparação Reforma Tributária", "Consultor fiscal dedicado", "SLA corporativo"], featured: false },
];

export default function Plans() {
  return (
    <div data-testid="plans-page">
      <section className="bg-[#0A2A57] text-white py-20 noise">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow text-[#E6C96A] mb-4">Planos</div>
          <h1 className="font-serif text-4xl lg:text-6xl max-w-3xl leading-[1.08]">Estruturas contratuais por porte e complexidade.</h1>
          <p className="mt-6 text-white/75 max-w-2xl">Modelos baseados em operação real. Todos os planos começam com um Diagnóstico Fiscal técnico.</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid lg:grid-cols-3 gap-7">
          {plans.map((p, i) => (
            <div key={i} data-testid={`plan-${i}`} className={`p-8 border flex flex-col ${p.featured ? "border-[#D4AF37] bg-[#0A2A57] text-white shadow-[0_14px_40px_-18px_rgba(10,42,87,0.35)]" : "border-[#EAEAEA] bg-white text-[#0A2A57]"}`}>
              {p.featured && <div className="eyebrow text-[#E6C96A] mb-3">Mais Contratado</div>}
              <h3 className="font-serif text-3xl mb-2">{p.name}</h3>
              <div className={`text-sm mb-5 ${p.featured ? "text-white/70" : "text-[#666]"}`}>{p.desc}</div>
              <div className={`font-serif text-2xl mb-7 ${p.featured ? "text-[#D4AF37]" : "text-[#0A2A57]"}`}>{p.price}</div>
              <ul className="space-y-3 flex-1 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-[14px] leading-relaxed">
                    <Check size={16} strokeWidth={1.6} className={p.featured ? "text-[#D4AF37] mt-0.5" : "text-[#1B6FC4] mt-0.5"}/>
                    <span className={p.featured ? "text-white/90" : "text-[#333]"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Link to="/diagnostico" className={p.featured ? "btn-gold justify-center" : "btn-outline-blue justify-center"}>Começar</Link>
            </div>
          ))}
        </div>
        <div className="text-center mt-12 text-sm text-[#B0B0B0]">Integração de pagamento disponível em breve.</div>
      </section>
    </div>
  );
}
