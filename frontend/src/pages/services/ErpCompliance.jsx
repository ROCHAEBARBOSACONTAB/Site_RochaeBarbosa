import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  FileSearch,
  Network,
  Settings2,
} from "lucide-react";

const WHATSAPP_NUMBER = "5514991269374";

const whatsappUrl = (message) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

const pillars = [
  {
    icon: Settings2,
    title: "Parametrização fiscal",
    text: "Leitura das regras, TES, tributos e cadastros que sustentam a apuração e os documentos fiscais.",
  },
  {
    icon: Network,
    title: "Integrações consistentes",
    text: "Análise dos pontos de passagem entre ERP, fiscal, contabilidade e obrigações acessórias.",
  },
  {
    icon: FileSearch,
    title: "Compliance operacional",
    text: "Validação técnica para reduzir divergências que normalmente aparecem apenas no fechamento ou em fiscalização.",
  },
];

export default function ErpCompliance() {
  return (
    <div data-testid="erp-compliance-page" className="bg-white">
      <section className="bg-[#0A2A57] text-white border-b border-[#D4AF37]/20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 pt-7 pb-9 lg:pt-14 lg:pb-12">
          <Link to="/servicos" className="inline-flex items-center gap-2 text-[12px] uppercase tracking-[0.16em] text-[#E6C96A] hover:text-white transition">
            <ArrowLeft size={13} strokeWidth={1.5} /> Serviços
          </Link>
          <div className="mt-5 max-w-[900px]">
            <div className="eyebrow text-[#E6C96A] mb-4">Consultoria TOTVS Protheus</div>
            <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[58px] leading-[1.06]">
              Consultoria TOTVS Protheus para uma
              <span className="text-[#D4AF37]"> operação fiscal confiável.</span>
            </h1>
            <p className="mt-5 max-w-[760px] text-white/78 text-[16px] leading-relaxed">
              Atuamos na leitura técnica de processos, parametrizações e integrações para identificar a origem das divergências e orientar uma correção sustentável.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappUrl("Olá, vim pelo site da Rocha & Barbosa e quero revisar o ERP e os processos fiscais da minha empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold justify-center"
              >
                Quero revisar meu ERP <ArrowRight size={16} strokeWidth={1.5} />
              </a>
              <Link to="/diagnostico" className="btn-outline-gold justify-center">
                Conhecer o diagnóstico técnico <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F5EF] border-b border-[#E7E2D8] py-10 lg:py-14">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Tecnologia conectada à operação</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">
              O sistema precisa refletir a regra fiscal e a realidade da empresa.
            </h2>
          </div>
          <div className="lg:col-span-7">
            <p className="text-[#596678] leading-relaxed text-[16px]">
              O problema raramente está em um único ponto. Ele pode nascer em cadastro, parâmetro, integração, documento ou rotina que deixou de acompanhar a operação. Por isso, a análise considera o caminho completo da informação.
            </p>
            <div className="mt-7 grid sm:grid-cols-3 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;

                return (
                  <div key={pillar.title} className="bg-white border border-[#E1DDD3] p-5">
                    <Icon size={22} strokeWidth={1.5} className="text-[#B48600] mb-4" />
                    <h3 className="font-serif text-xl text-[#0A2A57]">{pillar.title}</h3>
                    <p className="mt-2 text-sm text-[#5D6A7C] leading-relaxed">{pillar.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 lg:py-16">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Onde atuamos</div>
            <h2 className="font-serif text-3xl lg:text-[42px] text-[#0A2A57] leading-[1.1]">
              Visão fiscal para processos e sistemas que exigem precisão.
            </h2>
          </div>
          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-5 text-[#33445C]">
            {[
              "Parametrização fiscal no TOTVS Protheus",
              "Revisão de integrações e cadastros",
              "Análise de divergências entre ERP e fiscal",
              "Acompanhamento técnico de implantações",
              "Validação de rotinas e documentos fiscais",
              "Orientação para correções que reduzam recorrência",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-[15px] leading-relaxed border-b border-[#E7E2D8] pb-4">
                <CheckCircle2 size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#B48600]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F1EFEA] border-t border-[#E7E2D8] py-14 lg:py-16">
        <div className="max-w-[860px] mx-auto px-6 lg:px-12 text-center">
          <div className="eyebrow mb-4">Próximo passo</div>
          <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
            Seu ERP precisa de uma leitura
            <span className="text-[#D4AF37]"> fiscal e operacional mais profunda?</span>
          </h2>
          <p className="mt-5 text-[#596678] leading-relaxed">
            Conte o que está acontecendo na operação. Avaliamos se o melhor caminho é um diagnóstico técnico, revisão pontual ou acompanhamento de implantação.
          </p>
          <a
            href={whatsappUrl("Olá, vim pela página de Consultoria TOTVS Protheus e quero avaliar o cenário da minha empresa.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-7"
          >
            Falar com um especialista <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </div>
  );
}
