import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const homeHero = "/home-hero-202608.jpg";

const entryPoints = [
  {
    title: "Abrir ou regularizar empresa",
    description: "Abertura, alterações, regularização e organização societária com leitura contábil e fiscal desde o início.",
    to: "/servicos/abertura-de-empresa",
    cta: "Conhecer essa solução",
  },
  {
    title: "Organizar contabilidade e fiscal",
    description: "Rotinas contábeis e fiscais alinhadas à realidade da empresa, para operar com informação e segurança.",
    to: "/servicos/contabilidade-e-gestao-fiscal",
    cta: "Organizar minha operação",
  },
  {
    title: "Revisar ERP, riscos ou créditos",
    description: "Análise técnica para divergências fiscais, Protheus, parametrizações, perdas e oportunidades de recuperação.",
    to: "/diagnostico",
    cta: "Avaliar meu cenário",
  },
];

const differentiators = [
  "Contabilidade e fiscal conectados à operação real",
  "Orientação para decisões empresariais e regularidade",
  "Profundidade técnica em ERP, com foco em TOTVS Protheus",
];

export default function Home() {
  return (
    <div data-testid="home-page">
      <section className="relative overflow-hidden bg-[#0A2A57] text-white">
        <div className="absolute inset-0 opacity-45">
          <picture className="block h-full w-full">
            <source media="(max-width: 767px)" srcSet="/home-hero-202608-mobile.jpg" />
            <img src={homeHero} alt="" width="1800" height="1200" fetchPriority="high" className="w-full h-full object-cover" />
          </picture>
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,30,64,0.96)_0%,rgba(10,42,87,0.91)_43%,rgba(10,42,87,0.67)_74%,rgba(10,42,87,0.68)_100%)]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 pt-8 pb-10 lg:pt-16 lg:pb-14">
          <div className="max-w-[820px]">
            <div className="eyebrow text-[#E6C96A] mb-5">Contabilidade · Fiscal · Estrutura empresarial</div>
            <h1 className="font-serif text-[38px] sm:text-[50px] lg:text-[62px] leading-[1.05] max-w-[800px]">
              Contabilidade além da rotina.
              <span className="text-[#D4AF37]"> Estrutura para sua empresa avançar.</span>
            </h1>
            <p className="mt-6 max-w-[700px] text-[16px] lg:text-[17px] leading-relaxed text-white/80">
              Da abertura e regularização à rotina contábil, fiscal e sistemas, acompanhamos sua empresa com visão técnica e próxima da operação.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/servicos" className="btn-gold justify-center">
                Conhecer nossas soluções <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <Link to="/diagnostico" className="btn-outline-gold justify-center">
                Entender o diagnóstico <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5EF] border-b border-[#E7E2D8] py-12 lg:py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-[760px] mb-9 lg:mb-11">
            <div className="eyebrow mb-4">Comece pela necessidade atual</div>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
              Por onde sua empresa precisa <span className="text-[#D4AF37]">começar?</span>
            </h2>
            <p className="mt-5 text-[#566477] leading-relaxed max-w-[660px]">
              Escolha o ponto de partida. A solução certa depende do estágio e da complexidade da sua operação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {entryPoints.map((item, index) => {
              return (
                <Link
                  key={item.title}
                  to={item.to}
                  className="group premium-card min-h-[310px] bg-[#FCFBF8] border border-[#E7E2D8] p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_18px_40px_rgba(10,42,87,0.10)]"
                >
                  <div className="text-[12px] uppercase tracking-[0.24em] text-[#B48600] transition group-hover:tracking-[0.28em]">
                    0{index + 1}
                  </div>
                  <h3 className="mt-5 font-serif text-2xl lg:text-[27px] leading-tight text-[#0A2A57]">{item.title}</h3>
                  <p className="mt-4 max-w-[360px] text-[15px] leading-relaxed text-[#566477]">{item.description}</p>
                  <span className="mt-auto pt-7 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#B48600] transition group-hover:text-[#0A2A57]">
                    {item.cta} <ArrowRight size={15} strokeWidth={1.5} />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Diferencial Rocha & Barbosa</div>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
              Contabilidade não termina na <span className="text-[#D4AF37]">entrega da obrigação.</span>
            </h2>
          </div>
          <div className="lg:col-span-7 lg:pt-1">
            <p className="max-w-[690px] text-[16px] leading-relaxed text-[#536174]">
              A informação contábil só é útil quando representa a operação real. Por isso, unimos leitura contábil, fiscal e sistêmica para orientar decisões com mais consistência.
            </p>
            <div className="mt-7 border-y border-[#E7E2D8] divide-y divide-[#E7E2D8]">
              {differentiators.map((item) => (
                <div key={item} className="flex items-start gap-3 py-4 text-[15px] text-[#33445C] leading-relaxed">
                  <CheckCircle2 size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#B48600]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/sobre" className="mt-7 inline-flex items-center gap-2 link-gold text-sm uppercase tracking-[0.15em]">
              Conhecer a Rocha & Barbosa <ArrowRight size={14} strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#F1EFEA] border-y border-[#E7E2D8] py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Diagnóstico técnico</div>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
              Quando os números não fecham, <span className="text-[#D4AF37]">investigamos a origem.</span>
            </h2>
            <p className="mt-6 text-[#566477] leading-relaxed max-w-[530px]">
              Para cenários de divergência, risco fiscal, perdas recorrentes ou ERP sem confiabilidade, avaliamos a origem do problema antes de propor qualquer correção.
            </p>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-3 gap-4">
            {[
              ["01", "Mapeamos", "Leitura da operação, dados, ERP e obrigações."],
              ["02", "Identificamos", "Distorções, riscos, perdas e oportunidades reais."],
              ["03", "Direcionamos", "Plano técnico para corrigir e sustentar a operação."],
            ].map(([number, title, description]) => (
              <div key={number} className="border border-[#D9D4C9] bg-[#F9F8F4] p-6">
                <div className="text-[11px] font-semibold tracking-[0.2em] text-[#B48600]">{number}</div>
                <h3 className="mt-5 font-serif text-2xl text-[#0A2A57]">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#586577]">{description}</p>
              </div>
            ))}
          </div>
          <Link to="/diagnostico" className="btn-outline-blue w-full justify-center sm:w-auto lg:col-span-12 lg:justify-self-start">
            Solicitar diagnóstico técnico <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

    </div>
  );
}
