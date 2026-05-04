import React from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Search,
  Database,
  FileCheck2,
  BarChart3,
  ArrowRight,
  Building2,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  MessageCircle,
  XCircle,
} from "lucide-react";

const CORRIDOR =
  "https://images.pexels.com/photos/5511130/pexels-photo-5511130.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const whatsappMessage =
  "Olá, vim pela página Sobre da Rocha & Barbosa. Quero entender se minha operação fiscal/contábil possui riscos, inconsistências ou oportunidades que não estou enxergando.";

const whatsappLink = `https://wa.me/5514991269374?text=${encodeURIComponent(
  whatsappMessage
)}`;

const method = [
  {
    step: "01",
    title: "Entendimento da operação",
    text: "Mapeamos como a informação nasce: cadastro, produto, TES, CFOP, regras fiscais, documentos e integrações.",
  },
  {
    step: "02",
    title: "Cruzamento técnico dos dados",
    text: "Analisamos ERP, XML, SPED, obrigações acessórias e reflexos contábeis para identificar inconsistências reais.",
  },
  {
    step: "03",
    title: "Diagnóstico e direcionamento",
    text: "Apontamos riscos, perdas, oportunidades e próximos passos com base técnica, não em achismo.",
  },
];

const realityItems = [
  "Divergências entre XML, SPED e ERP",
  "Créditos tributários não aproveitados",
  "CFOP, CST, ou NCM inconsistentes",
  "Apuração fiscal dependente de ajustes manuais",
  "Risco oculto em operações recorrentes",
  "Dados fiscais afetando decisões gerenciais",
];

const authorityItems = [
  "TOTVS Protheus",
  "SPED Fiscal",
  "EFD Contribuições",
  "XML / NF-e",
  "CFOP / CST / TES",
  "TAF / TSS",
  "IBS / CBS",
  "Recuperação de créditos",
  "Parametrização fiscal",
  "Compliance tributário",
  "Obrigações acessórias",
  "Indicadores gerenciais",
];

const pillars = [
  {
    icon: Search,
    title: "Diagnóstico antes da execução",
    text: "Na prática, o problema raramente está onde parece. Antes de corrigir, identificamos a origem da inconsistência.",
  },
  {
    icon: Cpu,
    title: "Leitura técnica do ERP",
    text: "Se o ERP está errado, o fiscal apenas replica o erro. Por isso, analisamos sistema, operação e obrigação em conjunto.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance com profundidade",
    text: "SPED não erra sozinho. Nosso foco é garantir coerência entre parametrização, documento fiscal, apuração e entrega.",
  },
];

export default function About() {
  return (
    <div data-testid="about-page" className="bg-white">
      {/* HERO */}
      <section className="relative bg-[#0A2A57] text-white pt-36 pb-24 noise overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.18),transparent_35%)]" />

        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div>
            <div className="eyebrow text-[#E6C96A] mb-5">
              Sobre a Rocha & Barbosa
            </div>

            <h1 className="font-serif text-4xl lg:text-6xl leading-[1.05] max-w-[850px]">
              Empresas não perdem dinheiro no fiscal por acaso.
              <span className="text-[#D4AF37] block">
                Perdem por falta de leitura técnica da operação.
              </span>
            </h1>

            <p className="mt-7 text-white/78 text-lg leading-[1.85] max-w-[740px]">
              A Rocha & Barbosa une contabilidade estratégica, compliance fiscal
              e visão técnica de ERP para identificar riscos ocultos, perdas
              tributárias e inconsistências que muitas empresas só descobrem
              quando já viraram custo, retrabalho ou autuação.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold inline-flex items-center justify-center gap-2"
              >
                <MessageCircle size={18} />
                Conversar no WhatsApp
              </a>

              <Link
                to="/diagnostico"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 text-white/90 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition text-sm uppercase tracking-[0.18em]"
              >
                Ver diagnóstico <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 border border-[#D4AF37]/20 translate-x-4 translate-y-4" />
            <div className="relative aspect-[4/3] overflow-hidden border border-[#D4AF37]/35 shadow-2xl">
              <img
                src={CORRIDOR}
                alt="Ambiente corporativo"
                className="w-full h-full object-cover opacity-80 scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A57]/90 via-[#0A2A57]/25 to-transparent" />
              <div className="absolute bottom-8 left-8 right-8">
                <div className="text-[#E6C96A] text-xs uppercase tracking-[0.25em] mb-3">
                  Precisão técnica
                </div>
                <p className="font-serif text-2xl leading-snug">
                  O erro fiscal começa antes da apuração.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.8fr_1.2fr] gap-14">
          <div>
            <div className="eyebrow text-[#D4AF37] mb-4">
              Nosso posicionamento
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl leading-[1.1] text-[#0A2A57]">
              Não somos apenas um escritório contábil.
            </h2>
          </div>

          <div className="space-y-7 text-[#333] text-[17px] leading-[1.9]">
            <p>
              Atuamos na intersecção entre fiscal, contábil, operação e sistema.
              O problema fiscal raramente nasce no fiscal.
            </p>

            <p>
              Em empresas que utilizam{" "}
              <strong className="text-[#0A2A57]">ERP como base operacional</strong>,
              erros de cadastro, parametrização ou regra fiscal geram distorções
              em cadeia: documento incorreto, apuração inconsistente, SPED com
              falhas, créditos perdidos e decisões gerenciais comprometidas.
            </p>

            <p>
              Nosso trabalho é identificar a origem — não apenas corrigir o
              efeito.
            </p>
          </div>
        </div>
      </section>

      {/* REALITY */}
      <section className="py-24 bg-[#F2F2F2]">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-[850px] mx-auto mb-12">
            <AlertTriangle className="mx-auto text-[#D4AF37] mb-6" size={38} />
            <div className="eyebrow text-[#D4AF37] mb-4">
              O que encontramos na prática
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl text-[#0A2A57] leading-[1.1]">
              A empresa geralmente não sabe onde está perdendo dinheiro.
            </h2>
            <p className="mt-6 text-[#555] text-lg leading-[1.8]">
              Ela percebe o retrabalho, a insegurança, a dependência do sistema e
              o risco. Mas nem sempre enxerga a causa técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {realityItems.map((item, i) => (
              <div
                key={i}
                className="bg-white border border-[#0A2A57]/10 p-6 flex gap-4 items-start"
              >
                <CheckCircle2 className="text-[#D4AF37] mt-1 shrink-0" size={20} />
                <p className="text-[#333] leading-[1.7]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="max-w-[780px] mb-14">
            <div className="eyebrow text-[#D4AF37] mb-4">Como pensamos</div>
            <h2 className="font-serif text-3xl lg:text-5xl leading-[1.1] text-[#0A2A57]">
              A contabilidade precisa acompanhar a complexidade da operação.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-7">
            {pillars.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-[#F7F7F4] border border-[#0A2A57]/10 p-8 shadow-sm hover:shadow-xl transition group"
                >
                  <div className="w-12 h-12 border border-[#D4AF37]/40 flex items-center justify-center mb-7 text-[#D4AF37] group-hover:bg-[#0A2A57] transition">
                    <Icon size={24} />
                  </div>

                  <h3 className="font-serif text-2xl text-[#0A2A57] mb-4 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-[#555] leading-[1.75]">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section className="py-24 bg-[#0A2A57] text-white noise">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12 grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <div>
            <div className="eyebrow text-[#E6C96A] mb-4">Método de atuação</div>
            <h2 className="font-serif text-3xl lg:text-5xl leading-[1.1]">
              Analisamos a operação, não apenas o resultado.
            </h2>

            <p className="mt-7 text-white/72 text-lg leading-[1.85]">
              Muitas inconsistências surgem antes da apuração: no cadastro, no
              produto, na TES, no CFOP, no XML, no SPED, no financeiro ou na
              parametrização do ERP.
            </p>
          </div>

          <div className="space-y-6">
            {method.map((item) => (
              <div
                key={item.step}
                className="grid grid-cols-[68px_1fr] gap-6 border border-white/10 bg-white/[0.04] p-6"
              >
                <div className="font-serif text-3xl text-[#D4AF37]">
                  {item.step}
                </div>

                <div>
                  <h3 className="font-serif text-2xl mb-3">{item.title}</h3>
                  <p className="text-white/70 leading-[1.75]">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTHORITY */}
      <section className="py-24 bg-[#F7F7F4]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="text-center max-w-[850px] mx-auto mb-14">
            <div className="eyebrow text-[#D4AF37] mb-4">
              Autoridade técnica
            </div>
            <h2 className="font-serif text-3xl lg:text-5xl leading-[1.1] text-[#0A2A57]">
              Falamos a língua da operação, não apenas da obrigação.
            </h2>
            <p className="mt-6 text-[#555] text-lg leading-[1.8]">
              O diferencial está em conectar a leitura contábil e fiscal com os
              pontos onde a operação realmente acontece.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {authorityItems.map((item, index) => (
              <div
                key={index}
                className="bg-white border border-[#0A2A57]/10 px-5 py-5 text-center"
              >
                <p className="font-serif text-[#0A2A57] text-xl leading-snug">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIT / FILTER */}
      <section className="py-24 bg-white">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Building2 size={38} className="text-[#D4AF37] mb-6" />
            <div className="eyebrow text-[#D4AF37] mb-4">
              Para quem fazemos sentido
            </div>

            <h2 className="font-serif text-3xl lg:text-5xl leading-[1.1] text-[#0A2A57]">
              Atuamos melhor com empresas que tratam contabilidade como estrutura.
            </h2>

            <p className="mt-7 text-[#555] text-lg leading-[1.85]">
              Nosso trabalho é mais efetivo em empresas com operação estruturada,
              volume fiscal relevante, uso de ERP e necessidade real de controle,
              segurança e tomada de decisão.
            </p>
          </div>

          <div className="border border-[#D4AF37]/35 bg-[#0A2A57] text-white p-8">
            <XCircle className="text-[#D4AF37] mb-5" size={34} />
            <h3 className="font-serif text-3xl leading-snug mb-5">
              Não somos o parceiro ideal para quem busca apenas o menor custo
              contábil.
            </h3>
            <p className="text-white/72 leading-[1.85]">
              Fazemos sentido para empresas que precisam de controle, segurança
              fiscal, visão gerencial e apoio técnico em ambientes complexos.
              Se o objetivo é apenas cumprir o mínimo, provavelmente não somos a
              melhor escolha.
            </p>
          </div>
        </div>
      </section>

      {/* AUTHORITY STRIP */}
      <section className="bg-[#F2F2F2] py-20">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: FileCheck2, label: "SPED / EFD / Obrigações" },
              { icon: Database, label: "Dados fiscais e contábeis" },
              { icon: Cpu, label: "TOTVS Protheus" },
              { icon: BarChart3, label: "Gestão e indicadores" },
            ].map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="bg-white border border-[#0A2A57]/10 p-7 text-center"
                >
                  <Icon size={28} className="mx-auto text-[#D4AF37] mb-5" />
                  <p className="font-serif text-xl text-[#0A2A57] leading-snug">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative bg-[#0A2A57] text-white py-24 noise overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.16),transparent_34%)]" />

        <div className="relative max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">Próximo passo</div>

          <h2 className="font-serif text-3xl lg:text-5xl leading-[1.1] mb-7">
            Sua operação está realmente sob controle?
          </h2>

          <p className="text-white/72 text-lg leading-[1.85] max-w-[760px] mx-auto mb-10">
            Se existem dúvidas sobre riscos fiscais, créditos tributários,
            inconsistências no ERP ou impactos da Reforma Tributária, o primeiro
            passo é diagnosticar com método.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center justify-center gap-2"
            >
              <MessageCircle size={18} />
              Quero entender meus riscos e oportunidades
            </a>

            <Link
              to="/servicos"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-white/20 text-white/90 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 transition text-sm uppercase tracking-[0.18em]"
            >
              Conhecer serviços <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}