import React from "react";
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
import heroServ from "../assets/heroserv.png";

const phone = "5514991269374";

const coreServices = [
  {
    icon: Building2,
    eyebrow: "01 · Base operacional",
    title: "Estruturação Empresarial",
    desc: "Empresas começam erradas não por falta de esforço, mas por falta de estrutura. Organizamos a base legal e operacional para evitar problemas futuros.",
    points: [
      "Abertura, alteração e regularização",
      "Licenças e alvarás obrigatórios",
      "Estrutura correta desde o início",
    ],
    cta: "Quero estruturar minha empresa corretamente",
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero entender como vocês podem me ajudar com Estruturação Empresarial.",
  },
  {
    icon: FileText,
    eyebrow: "02 · Operação recorrente",
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
    eyebrow: "03 · Diagnóstico",
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
    eyebrow: "04 · ERP e sistemas",
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
    eyebrow: "05 · Compliance premium",
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
    eyebrow: "06 · Recorrência",
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
    eyebrow: "07 · Recuperação",
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
    eyebrow: "08 · Entrada estratégica",
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
    whatsappMessage:
      "Olá, vim pelo site da Rocha & Barbosa e quero entender como vocês podem me ajudar com Certificado Digital.",
  },
];

const whatsappUrl = (message) =>
  `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

export default function Services() {
  return (
    <div data-testid="services-page">
      {/* HERO */}
      <section className="relative bg-[#0A2A57] text-white py-24 lg:py-28 overflow-hidden noise">
        <div className="absolute inset-0 opacity-100">
          <img src={heroServ} alt="" className="w-full h-full object-cover" />
        </div>

        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,42,87,0.96)_0%,rgba(10,42,87,0.90)_34%,rgba(10,42,87,0.70)_68%,rgba(10,42,87,0.82)_100%)]" />

        <div className="absolute -right-28 top-12 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/10 blur-[90px]" />
        <div className="absolute left-[-120px] bottom-[-120px] h-[320px] w-[320px] rounded-full bg-white/5 blur-[80px]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="eyebrow text-[#E6C96A] mb-5">
            Serviços Estratégicos
          </div>

          <h1 className="font-serif text-[40px] sm:text-[52px] lg:text-[64px] max-w-5xl leading-[1.05] tracking-[-0.015em]">
            Para empresas que não podem mais
            <span className="text-[#D4AF37]">
              {" "}operar com risco fiscal invisível.
            </span>
          </h1>

          <p className="mt-6 text-white/75 text-[17px] max-w-[760px] leading-[1.6]">
            Atuamos da estruturação inicial ao compliance avançado, conectando
            contabilidade, fiscal e sistemas para reduzir riscos, recuperar
            oportunidades e melhorar a tomada de decisão.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href={whatsappUrl(
                "Olá, vim pelo site da Rocha & Barbosa e gostaria de falar com um especialista sobre os serviços estratégicos."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Falar com especialista
              <ArrowRight size={16} strokeWidth={1.5} />
            </a>

            <a href="#servicos" className="btn-outline-gold">
              Ver soluções
            </a>
          </div>
        </div>

        <div className="gold-line mt-12" />
      </section>

      {/* INTRO */}
      <section className="bg-[#F7F5EF] py-20 border-b border-[#E7E2D8]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="eyebrow mb-4">Nossa lógica de atuação</div>

              <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
                Não entregamos apenas serviços.
                <span className="text-[#D4AF37]">
                  {" "}estruturamos uma jornada de controle.
                </span>
              </h2>
            </div>

            <div className="lg:col-span-7 lg:pt-1">
              <p className="text-[#555] text-[16px] leading-relaxed max-w-[720px]">
                Cada solução existe para corrigir uma etapa da operação: base
                legal, controle contábil, consistência fiscal, ERP, compliance e
                recuperação de oportunidades. O objetivo não é apenas cumprir
                obrigações, mas transformar dados, processos e sistemas em
                segurança e resultado.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-[720px]">
                {["Estrutura", "Controle", "Escala"].map((item) => (
                  <div
                    key={item}
                    className="border border-[#E7E2D8] bg-white px-5 py-4 text-center text-[#0A2A57] font-serif"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="servicos" className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-[780px] mb-14">
            <div className="eyebrow mb-4">Portfólio</div>

            <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
              O que fazemos para proteger e otimizar sua operação
            </h2>

            <p className="mt-5 text-[#555] text-[16px] leading-relaxed">
              A maioria das empresas não sabe exatamente onde está errando —
              apenas sente o impacto no resultado. Nossas soluções direcionam o
              problema certo para a correção certa.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-7">
            {coreServices.map((s, i) => (
              <div
                key={i}
                data-testid={`service-${i}`}
                className={`group premium-card bg-[#FAFAF8] p-8 lg:p-9 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37] hover:shadow-[0_18px_44px_rgba(10,42,87,0.10)] ${
                  s.featured
                    ? "border-2 border-[#D4AF37]/70 shadow-[0_14px_36px_rgba(10,42,87,0.08)]"
                    : "border border-[#E7E2D8]"
                }`}
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 border border-[#D4AF37]/60 flex items-center justify-center shrink-0 group-hover:bg-[#D4AF37]/5 transition-all duration-300">
                    <s.icon
                      size={25}
                      strokeWidth={1.4}
                      className="text-[#D4AF37]"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="eyebrow mb-3">{s.eyebrow}</div>

                    <h3 className="font-serif text-2xl lg:text-3xl text-[#0A2A57] leading-tight">
                      {s.title}
                    </h3>

                    <p className="mt-4 text-[#555] text-[15px] leading-relaxed">
                      {s.desc}
                    </p>

                    <div className="mt-6 grid sm:grid-cols-3 gap-3">
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

                    <a
                      href={whatsappUrl(s.whatsappMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-7 link-gold text-sm uppercase tracking-[0.16em]"
                    >
                      {s.cta}
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </a>

                    <p className="mt-2 text-xs text-[#6B7280]">
                      Atendimento direto via WhatsApp.
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PREMIUM HIGHLIGHT */}
      <section className="bg-[#F1EFEA] py-24 border-t border-[#E7E2D8]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5">
            <div className="eyebrow mb-4">Diferencial Rocha & Barbosa</div>

            <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.08]">
              Onde a contabilidade comum para,
              <span className="text-[#D4AF37]">
                {" "}nós entramos com ERP e compliance.
              </span>
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-[#555] text-[16px] leading-relaxed">
              Muitos problemas fiscais não nascem no fechamento contábil. Eles
              nascem no cadastro, na parametrização, no processo, na integração
              e na forma como o ERP conduz a operação. Por isso, nossa atuação
              une visão contábil, fiscal e sistêmica.
            </p>

            <div className="mt-8 grid md:grid-cols-3 gap-5">
              {[
                "Domínio fiscal",
                "Leitura contábil",
                "Profundidade em ERP",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white border border-[#E7E2D8] p-5 text-center font-serif text-[#0A2A57]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0A2A57] text-white py-24 relative noise">
        <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">Próximo Passo</div>

          <h2 className="font-serif text-3xl lg:text-5xl leading-[1.08] mb-6">
            Antes de contratar uma solução,
            <span className="text-[#D4AF37]">
              {" "}entenda onde está o problema real da sua operação.
            </span>
          </h2>

          <p className="text-white/75 max-w-2xl mx-auto mb-6 leading-relaxed">
            Fale com nossa equipe e informe o cenário atual da sua empresa.
            Vamos direcionar o melhor caminho: estruturação, gestão contábil,
            compliance, ERP, recuperação de créditos ou monitoramento contínuo.
          </p>

          <p className="text-white/55 text-sm max-w-[640px] mx-auto mb-8 leading-relaxed">
            Se sua operação depende de sistema, apuração fiscal e controle
            contábil, o risco não está em “se existe erro” — mas em onde ele
            está.
          </p>

          <a
            href={whatsappUrl(
              "Olá, vim pelo site da Rocha & Barbosa e gostaria de entender qual solução é mais adequada para minha empresa."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Quero entender meu cenário agora
            <ArrowRight size={16} strokeWidth={1.5} />
          </a>
        </div>
      </section>
    </div>
  );
}