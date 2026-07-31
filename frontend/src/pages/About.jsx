import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  Cpu,
  Search,
  ShieldCheck,
} from "lucide-react";

const ABOUT_HERO =
  "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=2000";

const pillars = [
  {
    icon: Building2,
    title: "Estrutura empresarial",
    text: "Apoiamos decisões de abertura, alteração, regularização e organização para que a empresa comece ou avance com base consistente.",
  },
  {
    icon: ShieldCheck,
    title: "Controle contábil e fiscal",
    text: "A rotina ganha previsibilidade quando informações, obrigações e decisões acompanham a realidade da operação.",
  },
  {
    icon: Cpu,
    title: "Profundidade técnica",
    text: "Quando o cenário pede mais análise, conectamos contabilidade, fiscal e sistemas para encontrar caminhos viáveis.",
  },
];

const method = [
  {
    step: "01",
    title: "Entender o contexto",
    text: "Começamos pela empresa, sua rotina, suas prioridades e a forma como a operação acontece no dia a dia.",
  },
  {
    step: "02",
    title: "Organizar o que sustenta a operação",
    text: "Traduzimos necessidades empresariais em uma rotina contábil, fiscal e documental coerente.",
  },
  {
    step: "03",
    title: "Acompanhar decisões e evolução",
    text: "Mantemos proximidade para orientar mudanças, antecipar demandas e dar clareza aos próximos passos.",
  },
];

export default function About() {
  return (
    <div data-testid="about-page" className="bg-white">
      <section className="relative overflow-hidden bg-[#0A2A57] pb-10 pt-7 text-white lg:pb-12 lg:pt-14 noise">
        <div className="absolute inset-0 opacity-55">
          <img src={ABOUT_HERO} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,42,87,0.92)_0%,rgba(10,42,87,0.78)_52%,rgba(10,42,87,0.88)_100%)]" />

        <div className="relative mx-auto max-w-[1200px] px-6 text-left lg:px-12">
          <div className="eyebrow mb-3 text-[#E6C96A] lg:mb-4">Sobre a Rocha & Barbosa</div>
          <h1 className="font-serif text-[32px] leading-[1.06] sm:text-4xl lg:text-6xl">
            Contabilidade próxima da operação.
            <span className="block text-[#D4AF37]">Estrutura para decisões melhores.</span>
          </h1>
          <p className="mt-4 max-w-[760px] text-[15px] leading-[1.7] text-white/82 lg:mt-5 lg:text-lg">
            Somos uma assessoria contábil que une rotina, orientação e visão técnica para acompanhar empresas em cada etapa da sua operação.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 lg:px-12">
          <div>
            <div className="eyebrow mb-4">Nossa atuação</div>
            <h2 className="font-serif text-3xl leading-[1.1] text-[#0A2A57] lg:text-5xl">
              Contabilidade é parte da operação, não apenas uma entrega mensal.
            </h2>
          </div>
          <div className="space-y-6 text-[16px] leading-relaxed text-[#556172] lg:text-[17px]">
            <p>
              A Rocha & Barbosa atua ao lado de empresas que precisam de uma rotina contábil e fiscal organizada, com informação clara para tomar decisões e seguir em frente com segurança.
            </p>
            <p>
              Nosso trabalho começa no essencial: manter a empresa regular, compreender a sua realidade e dar suporte nas escolhas que afetam sócios, documentos, processos e resultados.
            </p>
            <div className="grid gap-3 pt-2 sm:grid-cols-3">
              {["Proximidade", "Clareza", "Responsabilidade técnica"].map((item) => (
                <div key={item} className="flex min-h-[90px] items-center justify-center border border-[#E7E2D8] bg-[#F7F5EF] px-4 py-4 text-center font-serif text-lg text-[#0A2A57]">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#E7E2D8] bg-[#F7F5EF] py-14 lg:py-20">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-12">
          <div className="mb-10 max-w-[780px] lg:mb-12">
            <div className="eyebrow mb-4">O que sustenta nosso trabalho</div>
            <h2 className="font-serif text-3xl leading-[1.1] text-[#0A2A57] lg:text-5xl">
              Uma base contábil sólida para a empresa operar, crescer e decidir.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;
              return (
                <div key={pillar.title} className="premium-card bg-white p-7 lg:p-8">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center border border-[#D4AF37]/60 text-[#D4AF37]">
                    <Icon size={23} strokeWidth={1.4} />
                  </div>
                  <h3 className="font-serif text-2xl leading-snug text-[#0A2A57]">{pillar.title}</h3>
                  <p className="mt-4 leading-relaxed text-[#556172]">{pillar.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 lg:px-12">
          <div>
            <div className="eyebrow mb-4">Como trabalhamos</div>
            <h2 className="font-serif text-3xl leading-[1.1] text-[#0A2A57] lg:text-5xl">
              Primeiro entendemos. Depois estruturamos. Então acompanhamos.
            </h2>
            <p className="mt-6 max-w-[460px] leading-relaxed text-[#556172]">
              Uma contabilidade útil precisa acompanhar o momento da empresa, sem fórmulas prontas ou decisões desconectadas da operação.
            </p>
          </div>
          <div className="space-y-3">
            {method.map((item) => (
              <div key={item.step} className="grid grid-cols-[48px_1fr] gap-5 border border-[#E7E2D8] bg-[#FAFAF8] p-5 lg:grid-cols-[62px_1fr] lg:p-6">
                <div className="font-serif text-2xl text-[#D4AF37] lg:text-3xl">{item.step}</div>
                <div>
                  <h3 className="font-serif text-xl text-[#0A2A57] lg:text-2xl">{item.title}</h3>
                  <p className="mt-2 leading-relaxed text-[#556172]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#E7E2D8] bg-[#0A2A57] py-14 text-white lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-16 lg:px-12">
          <div>
            <div className="eyebrow mb-4 text-[#E6C96A]">Quando a operação pede mais profundidade</div>
            <h2 className="font-serif text-3xl leading-[1.1] lg:text-5xl">
              O conhecimento técnico entra para ampliar o controle, não para complicar a conversa.
            </h2>
          </div>
          <div>
            <p className="text-[16px] leading-relaxed text-white/78 lg:text-[17px]">
              Empresas com ERP, operação fiscal mais sensível ou demandas específicas também contam com nossa experiência em Protheus, compliance, parametrizações e diagnósticos. Essa profundidade complementa a contabilidade quando ela realmente é necessária.
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 text-white/85">
              {[
                "ERP e TOTVS Protheus",
                "Compliance fiscal",
                "Diagnóstico técnico da operação",
                "Revisão de processos e dados",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={17} strokeWidth={1.5} className="shrink-0 text-[#D4AF37]" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#F1EFEA] py-14 lg:py-16">
        <div className="mx-auto max-w-[850px] px-6 text-center lg:px-12">
          <div className="eyebrow mb-4">Vamos conversar</div>
          <h2 className="font-serif text-3xl leading-[1.1] text-[#0A2A57] lg:text-5xl">
            Sua empresa precisa de uma contabilidade mais próxima da operação?
          </h2>
          <p className="mx-auto mt-5 max-w-[650px] leading-relaxed text-[#566477]">
            Conte o momento atual da sua empresa. Direcionamos o próximo passo com clareza e responsabilidade técnica.
          </p>
          <Link to="/contato" className="btn-gold mt-7 justify-center">
            Falar com um especialista <ArrowRight size={16} strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    </div>
  );
}
