import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Building2,
  FileText,
  ShieldCheck,
  FileSearch,
  Cpu,
  RefreshCw,
  TrendingUp,
  KeyRound,
  CheckCircle2,
} from "lucide-react";

const phone = "5514991269374";
const whatsappUrl = (message) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

// Quando a landing page da RB Tecnologias estiver publicada, substitua somente esta URL.
const certificatePartnerUrl = whatsappUrl(
  "Olá, vim pelo site da Rocha & Barbosa e quero emitir um certificado digital pela RB Tecnologias."
);

const coreServices = [
  {
    icon: ShieldCheck,
    eyebrow: "Operação regulada",
    title: "Licenças e Regularização Operacional",
    desc: "Conduzimos as exigências regulatórias necessárias para que a empresa opere com regularidade perante órgãos municipais, estaduais e setoriais.",
    points: [
      "Licenças, alvarás e inscrições aplicáveis",
      "Demandas municipais e estaduais",
      "ANVISA, CETESB e órgãos reguladores, quando aplicável",
    ],
    cta: "Preciso regularizar minha operação",
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e preciso entender a regularização operacional e as licenças necessárias para minha empresa.",
  },
  {
    icon: FileText,
    eyebrow: "Gestão recorrente",
    title: "Gestão Contábil e Fiscal com Controle Real",
    desc: "Fechar imposto não significa controle. Garantimos que sua operação contábil e fiscal esteja coerente com a realidade do negócio.",
    points: [
      "Escrituração fiscal e contábil completa",
      "Obrigações acessórias sem inconsistência",
      "Visão crítica sobre os números",
    ],
    cta: "Preciso organizar minha operação",
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero entender como vocês podem me ajudar com Gestão Contábil e Fiscal com Controle Real.",
  },
  {
    icon: FileSearch,
    eyebrow: "Diagnóstico",
    title: "Diagnóstico Fiscal e Operacional",
    desc: "Identificamos onde sua operação está gerando risco, perda financeira ou distorção fiscal — mesmo quando tudo aparenta estar correto.",
    points: [
      "Falhas entre ERP e fiscal",
      "Riscos que não aparecem no fechamento",
      "Oportunidades financeiras ocultas",
    ],
    cta: "Entender meu cenário",
    featured: true,
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero entender como vocês podem me ajudar com Diagnóstico Fiscal e Operacional.",
  },
  {
    icon: Cpu,
    eyebrow: "Sistemas e ERP",
    title: "Inteligência em ERP e TOTVS Protheus",
    desc: "A maioria dos problemas fiscais nasce no sistema. Atuamos diretamente no ERP para corrigir a origem dos erros.",
    points: [
      "Parametrização fiscal no Protheus",
      "Revisão de integrações e cadastros",
      "Ajustes técnicos e customizações",
    ],
    cta: "Quero revisar meu ERP",
    featured: true,
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero entender como vocês podem me ajudar com Inteligência em ERP e TOTVS Protheus.",
  },
  {
    icon: ShieldCheck,
    eyebrow: "Implantação e compliance",
    title: "Compliance de Implantação Protheus",
    desc: "Implantações mal conduzidas geram retrabalho, custo e risco. Atuamos como controle técnico para garantir que o projeto seja feito corretamente.",
    points: [
      "Acompanhamento técnico da implantação",
      "Validação de regras fiscais",
      "Redução de erros e consumo de horas",
    ],
    cta: "Quero garantir uma implantação correta",
    featured: true,
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero entender como vocês podem me ajudar com Compliance de Implantação Protheus.",
  },
  {
    icon: RefreshCw,
    eyebrow: "Monitoramento",
    title: "Monitoramento Contínuo de Compliance",
    desc: "Mesmo uma operação estruturada degrada com o tempo. Monitoramos continuamente para evitar que erros voltem a acontecer.",
    points: [
      "Auditoria recorrente da operação",
      "Prevenção de inconsistências fiscais",
      "Manutenção do ambiente controlado",
    ],
    cta: "Monitorar operação",
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero entender como vocês podem me ajudar com Monitoramento Contínuo de Compliance.",
  },
  {
    icon: TrendingUp,
    eyebrow: "Recuperação",
    title: "Recuperação de Créditos com Correção da Origem",
    desc: "Recuperar valores sem corrigir a causa é inútil. Atuamos na recuperação e na eliminação do erro que gerou a perda.",
    points: [
      "Levantamento de créditos tributários",
      "Revisão retroativa da operação",
      "Correção sistêmica no ERP",
    ],
    cta: "Avaliar oportunidade",
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero entender como vocês podem me ajudar com Recuperação de Créditos com Correção da Origem.",
  },
  {
    icon: KeyRound,
    eyebrow: "Certificado digital",
    title: "Certificado Digital com Validação Inteligente",
    desc: "Resolva agora — e não se preocupe com isso de novo tão cedo.",
    points: [
      "Validação por videoconferência de longa duração",
      "Emissão rápida e sem deslocamento",
      "Continuidade operacional garantida",
    ],
    extra:
      "Durante a emissão, avaliamos possíveis inconsistências fiscais na operação.",
    cta: "Quero emitir meu certificado agora",
    partnerCta: true,
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero entender como vocês podem me ajudar com Certificado Digital.",
  },
];

const serviceGroups = [
  {
    id: "organizar",
    title: "Contabilidade e fiscal para a rotina funcionar",
    desc: "Acompanhamento recorrente para decisões mais seguras e uma operação sob controle.",
    gridClass: "lg:grid-cols-3",
    compactCards: true,
    services: [coreServices[1], coreServices[5], coreServices[7]],
    cta: "Quero organizar minha rotina contábil e fiscal",
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero organizar a rotina contábil e fiscal da minha empresa.",
  },
  {
    id: "regularizar",
    title: "Regularize a operação além do CNPJ",
    desc: "Para empresas que precisam cumprir exigências e manter a atividade regular perante os órgãos aplicáveis.",
    gridClass: "grid-cols-1",
    services: [coreServices[0]],
    cta: "Quero regularizar minha operação",
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e preciso entender a regularização operacional e as licenças necessárias para minha empresa.",
  },
  {
    id: "evoluir",
    title: "Projetos técnicos para situações específicas",
    desc: "Para operações que exigem diagnóstico, ERP, compliance de implantação ou recuperação de créditos.",
    gridClass: "lg:grid-cols-2",
    services: [coreServices[2], coreServices[3], coreServices[4], coreServices[6]],
    cta: "Quero avaliar uma necessidade técnica",
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero avaliar uma necessidade técnica da minha operação.",
  },
];

export default function Services() {
  return (
    <div data-testid="services-page">
      {/* SERVICE HEADER */}
      <section className="bg-[#0A2A57] text-white border-b border-[#D4AF37]/20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-7 pb-8 lg:pt-10 lg:pb-9">
          <div className="eyebrow text-[#E6C96A] mb-3">Serviços</div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h1 className="font-serif text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.08] max-w-[760px]">
              Contabilidade para sua empresa
              <span className="text-[#D4AF37]"> operar com clareza.</span>
            </h1>
            <p className="max-w-[380px] text-white/72 text-[15px] leading-relaxed lg:pb-1">
              Da rotina contábil às decisões de estrutura, acompanhamos o que mantém sua operação em movimento.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE GUIDE */}
      <section className="bg-white border-b border-[#E7E2D8] py-5 lg:py-6">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-8">
          <p className="shrink-0 text-[#0A2A57] font-serif text-xl">Escolha seu ponto de partida</p>
          <div className="grid sm:grid-cols-3 gap-3 flex-1">
            {[
              { label: "Organizar fiscal e contábil", href: "#organizar" },
              { label: "Abrir ou regularizar empresa", href: "#formalizar" },
              { label: "Corrigir ERP ou recuperar créditos", href: "#evoluir" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group flex items-center justify-between gap-3 border border-[#E2DED4] px-4 py-3 text-sm text-[#0A2A57] transition hover:border-[#D4AF37] hover:bg-[#F7F5EF]"
              >
                <span>{item.label}</span>
                <ArrowRight size={15} strokeWidth={1.5} className="shrink-0 text-[#B48600] transition group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* EMPRESARIAL ENTRY POINT */}
      <section id="formalizar" className="bg-[#F7F5EF] border-b border-[#E7E2D8] py-8 lg:py-10 scroll-mt-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-6">
            <div className="eyebrow mb-4">Para começar ou reorganizar sua empresa</div>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08] max-w-[720px]">
              Abertura, alteração e regularização
              <span className="text-[#D4AF37]"> com a estrutura certa desde o início.</span>
            </h2>
            <p className="mt-6 max-w-[680px] text-[#556172] text-[16px] leading-relaxed">
              A parte societária e paralegal é onde decisões apressadas costumam virar pendência, retrabalho ou enquadramento inadequado. Organizamos cada etapa com leitura contábil, fiscal e operacional.
            </p>
          </div>

          <div className="lg:col-span-6 lg:border-l lg:border-[#D9D4C9] lg:pl-12">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-4 text-[#33445C]">
              {[
                "Abertura de empresa e CNPJ",
                "Alteração de contrato social",
                "Mudança de endereço ou atividade",
                "Inclusão ou saída de sócios",
                "Encerramento e baixa de empresa",
                "Regularização de pendências cadastrais",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-[15px] leading-snug">
                  <CheckCircle2 size={17} strokeWidth={1.5} className="mt-0.5 shrink-0 text-[#B48600]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                to="/servicos/abertura-de-empresa"
                className="btn-gold justify-center"
              >
                Conhecer abertura de empresa <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
              <a
                href={whatsappUrl("Olá, vim pelo site da Rocha & Barbosa e preciso alterar ou regularizar minha empresa.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-blue justify-center"
              >
                Alterar ou regularizar <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-12 lg:py-16 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-[780px] mb-14">
            <div className="eyebrow mb-4">Portfólio</div>

            <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
              Acompanhamento contábil para o presente. Estrutura para os próximos passos.
            </h2>

            <p className="mt-5 text-[#555] text-[16px] leading-relaxed">
              Nossa base é a rotina contábil e fiscal bem conduzida. A partir dela,
              apoiamos abertura, regularização, decisões empresariais e desafios
              técnicos que pedem uma análise mais profunda.
            </p>
          </div>

          <div className="space-y-14">
            {serviceGroups.map((group) => (
              <div id={group.id} key={group.title} className="scroll-mt-24">
                <div className="mb-6 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-2 border-b border-[#E7E2D8] pb-4">
                  <h3 className="font-serif text-2xl lg:text-3xl text-[#0A2A57]">{group.title}</h3>
                  <p className="text-sm text-[#667386] leading-relaxed lg:text-right">{group.desc}</p>
                </div>
                <div className={`grid gap-7 ${group.gridClass}`}>
                  {group.services.map((s) => (
              <div
                key={s.title}
                data-testid={`service-${s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                className={`group h-full premium-card bg-[#FAFAF8] ${group.compactCards ? "p-7" : "p-8 lg:p-9"} transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_18px_44px_rgba(10,42,87,0.10)] ${
                  s.featured
                    ? "border-2 border-[#D4AF37]/70 shadow-[0_14px_36px_rgba(10,42,87,0.08)]"
                    : "border border-[#E7E2D8]"
                }`}
              >
                <div className={group.compactCards ? "flex flex-col gap-5" : "flex flex-col gap-5 sm:flex-row sm:items-start"}>
                  <div className="w-14 h-14 border border-[#D4AF37]/60 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/5 transition-all duration-300">
                    <s.icon
                      size={25}
                      strokeWidth={1.4}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="eyebrow mb-3">{s.eyebrow}</div>

                    <h4 className={`font-serif ${group.compactCards ? "text-2xl" : "text-2xl lg:text-3xl"} text-[#0A2A57] leading-tight`}>
                      {s.title}
                    </h4>

                    <p className="mt-4 text-[#555] text-[15px] leading-relaxed">
                      {s.desc}
                    </p>

                    <div className={`mt-6 grid gap-3 ${group.compactCards ? "grid-cols-1" : "sm:grid-cols-3"}`}>
                      {s.points.map((p) => (
                        <div
                          key={p}
                          className="flex items-start gap-2 text-[13px] text-[#4B5563] leading-snug"
                        >
                          <CheckCircle2
                            size={15}
                            strokeWidth={1.5}
                            className="text-[#D4AF37] mt-[1px] shrink-0"
                          />
                          <span>{p}</span>
                        </div>
                      ))}
                    </div>

                    {s.extra && (
                      <p className="mt-4 text-xs text-[#6B7280] leading-relaxed">
                        {s.extra}
                      </p>
                    )}

                    {s.partnerCta && (
                      <div className="mt-6 pt-5 border-t border-[#E7E2D8]">
                        <p className="eyebrow mb-3">Atendimento em parceria com RB Tecnologias</p>
                        <a
                          href={certificatePartnerUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-outline-blue justify-center"
                        >
                          Solicitar certificado digital <ArrowRight size={16} strokeWidth={1.5} />
                        </a>
                      </div>
                    )}

                  </div>
                </div>
              </div>
                  ))}
                </div>
                <a
                  href={whatsappUrl(group.whatsappMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold mt-6 justify-center"
                >
                  {group.cta}
                  <ArrowRight size={14} strokeWidth={1.5} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#F1EFEA] border-t border-[#E7E2D8] py-14 lg:py-16">
        <div className="max-w-[900px] mx-auto px-6 lg:px-12 text-center">
          <div className="eyebrow mb-4">Próximo passo</div>

          <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
            Não sabe qual solução
            <span className="text-[#D4AF37]"> sua empresa precisa?</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-[#566477] leading-relaxed">
            Conte o cenário atual da sua operação. Direcionamos o próximo passo com clareza técnica.
          </p>

          <div className="mt-7 grid sm:grid-cols-3 gap-3 max-w-[900px] mx-auto">
            {[
              {
                label: "Abrir ou regularizar empresa",
                message: "Olá, vim pelo site da Rocha & Barbosa e preciso abrir, alterar ou regularizar minha empresa.",
                className: "btn-gold justify-center",
              },
              {
                label: "Organizar fiscal e contábil",
                message: "Olá, vim pelo site da Rocha & Barbosa e preciso organizar a gestão fiscal e contábil da minha empresa.",
                className: "btn-outline-blue justify-center",
              },
              {
                label: "Revisar ERP ou recuperar créditos",
                message: "Olá, vim pelo site da Rocha & Barbosa e preciso revisar meu ERP ou avaliar oportunidades de recuperação de créditos.",
                className: "btn-outline-blue justify-center",
              },
            ].map((cta) => (
              <a
                key={cta.label}
                href={whatsappUrl(cta.message)}
                target="_blank"
                rel="noopener noreferrer"
                className={cta.className}
              >
                {cta.label} <ArrowRight size={16} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
