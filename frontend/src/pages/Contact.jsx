import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Database, Cpu, FileCheck2 } from "lucide-react";

const categories = [
  {
    icon: Database,
    title: "Fiscal & Tributário",
    desc: "Riscos fiscais, créditos tributários, IBS/CBS e análise de impacto na operação.",
    items: [
      {
        title: "Por que sua empresa pode estar perdendo crédito sem perceber",
        desc: "Falhas comuns na parametrização e impacto direto no resultado.",
      },
      {
        title: "Riscos fiscais silenciosos que não aparecem na apuração",
        desc: "Como inconsistências passam despercebidas até gerar autuação.",
      },
    ],
  },
  {
    icon: Cpu,
    title: "ERP & Protheus",
    desc: "Parametrização, inconsistências operacionais e impacto do sistema na apuração fiscal.",
    items: [
      {
        title: "Quando o erro não está no fiscal, mas no ERP",
        desc: "Como falhas de cadastro e regra afetam toda a operação.",
      },
      {
        title: "Dependência operacional do sistema: risco oculto",
        desc: "Quando a empresa depende do ERP, mas não domina o funcionamento.",
      },
    ],
  },
  {
    icon: FileCheck2,
    title: "SPED & Obrigações",
    desc: "EFD, validações, inconsistências e riscos na entrega das obrigações acessórias.",
    items: [
      {
        title: "SPED consistente não significa operação correta",
        desc: "Por que o SPED pode validar e ainda estar errado.",
      },
      {
        title: "Divergência entre XML, ERP e SPED: o problema real",
        desc: "Como inconsistências se propagam entre sistemas.",
      },
    ],
  },
];

export default function Materials() {
  return (
    <div data-testid="materials-page" className="bg-white">
      
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-36 pb-24 noise">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Base Técnica
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1] max-w-[800px] mx-auto">
            Conteúdo técnico para quem precisa entender a operação, não apenas cumprir obrigação.
          </h1>

          <p className="mt-6 text-white/75 text-lg leading-[1.8] max-w-[700px] mx-auto">
            Materiais voltados para empresas, analistas fiscais e escritórios que
            lidam com operação real, ERP e complexidade tributária.
          </p>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 space-y-16">
          {categories.map((cat, index) => {
            const Icon = cat.icon;

            return (
              <div key={index}>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h2 className="font-serif text-3xl text-[#0A2A57]">
                      {cat.title}
                    </h2>
                    <p className="text-[#555]">{cat.desc}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="border border-[#0A2A57]/10 p-7 hover:shadow-lg transition group"
                    >
                      <h3 className="font-serif text-xl text-[#0A2A57] mb-3">
                        {item.title}
                      </h3>

                      <p className="text-[#555] leading-[1.7] mb-5">
                        {item.desc}
                      </p>

                      <div className="flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-[#0A2A57] group-hover:text-[#D4AF37] transition">
                        Ver análise <ArrowRight size={14} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[#0A2A57] text-white py-20 text-center noise">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl lg:text-4xl leading-[1.2] mb-6">
            Se esse tipo de cenário existe na sua operação, o próximo passo é entender a origem.
          </h2>

          <Link to="/diagnostico" className="btn-gold">
            Solicitar diagnóstico
          </Link>
        </div>
      </section>
    </div>
  );
}