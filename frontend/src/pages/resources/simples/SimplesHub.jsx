import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layers,
} from "lucide-react";

const annexes = [
  {
    title: "Anexo I",
    desc: "Comércio",
    to: "/recursos/simples-nacional/anexo-1/2026",
  },
  {
    title: "Anexo II",
    desc: "Indústria",
    to: "/recursos/simples-nacional/anexo-2/2026",
  },
  {
    title: "Anexo III",
    desc: "Serviços",
    to: "/recursos/simples-nacional/anexo-3/2026",
  },
  {
    title: "Anexo IV",
    desc: "Serviços com CPP fora do DAS",
    to: "/recursos/simples-nacional/anexo-4/2026",
  },
  {
    title: "Anexo V",
    desc: "Serviços sujeitos ao Fator R",
    to: "/recursos/simples-nacional/anexo-5/2026",
  },
];

const transitionTimeline = [
  { period: "Até 2026", label: "Tabelas atuais" },
  { period: "2027–2028", label: "Início da transição" },
  { period: "2029", label: "Nova proporção" },
  { period: "2030", label: "Transição gradual" },
  { period: "2031", label: "Transição gradual" },
  { period: "2032", label: "Último ano parcial" },
  { period: "2033+", label: "Nova composição" },
];

export default function SimplesHub() {
  return (
    <div data-testid="simples-hub-page" className="bg-white">
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-7 pb-10 lg:pt-20 lg:pb-14 noise">
        <div className="max-w-[950px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Base Técnica · Simples Nacional
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.1]">
            Simples Nacional: estrutura completa para consulta e aplicação prática.
          </h1>

        <p className="mt-8 text-white/75 text-lg leading-[1.8] max-w-[720px] mx-auto">
            Consulte tabelas, regras e pontos de atenção para aplicação prática
            do regime.
        </p>
        <p className="mt-4 text-white/60 text-sm max-w-[600px] mx-auto">
            Estrutura orientada à aplicação: anexos, cálculo, enquadramento e validação operacional.
        </p>
        </div>
      </section>

      {/* ANNEXES */}
      <section className="bg-white py-14 sm:py-20">
        <div className="mx-auto max-w-[1050px] px-4 sm:px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-11 h-11 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Layers size={21} />
            </div>

            <div>
              <div className="eyebrow text-[#D4AF37] mb-1">Tabelas por vigência</div>
              <h2 className="font-serif text-3xl text-[#0A2A57]">
                Anexos do Simples Nacional
              </h2>
            </div>
          </div>

          <div className="mb-8 border-l-2 border-[#D4AF37] bg-[#F7F7F4] px-5 py-4 text-sm leading-[1.7] text-[#555]">
            Cada anexo reúne a tabela aplicável até 31 de dezembro de 2026 e as
            tabelas de transição previstas pela LC nº 214/2025, organizadas por
            ano de vigência até 2033 em diante.
          </div>

          <p className="mb-2 text-xs leading-5 text-[#666] md:hidden">
            Deslize a linha do tempo para ver todos os períodos.
          </p>
          <div className="mb-10 overflow-x-auto border border-[#0A2A57]/10 bg-white">
            <div className="flex min-w-[780px] divide-x divide-[#0A2A57]/10">
              {transitionTimeline.map((item, index) => (
                <div
                  key={item.period}
                  className={`min-w-[110px] flex-1 px-4 py-4 ${
                    index === 0 ? "bg-[#0A2A57] text-white" : ""
                  }`}
                >
                  <p
                    className={`text-sm font-semibold ${
                      index === 0 ? "text-[#E6C96A]" : "text-[#0A2A57]"
                    }`}
                  >
                    {item.period}
                  </p>
                  <p className={`mt-1 text-xs leading-[1.5] ${index === 0 ? "text-white/75" : "text-[#666]"}`}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {annexes.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="group border border-[#0A2A57]/10 p-5 transition hover:shadow-lg sm:p-6"
              >
                <h3 className="font-serif text-2xl text-[#0A2A57] mb-2">
                  {item.title}
                </h3>

                <p className="text-[#555] text-sm leading-[1.6] min-h-[44px]">
                  {item.desc}
                </p>

                <p className="mt-4 text-xs font-medium text-[#8A6A19]">
                  Consultar vigências de 2026 a 2033+
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#0A2A57] group-hover:text-[#D4AF37] transition">
                  Acessar <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="py-14 bg-white text-center">
        <div className="max-w-[700px] mx-auto px-6">
          <p className="text-[#666] text-sm leading-[1.7]">
            As tabelas são referência de consulta. A aplicação prática depende da
            atividade, receita acumulada, segregação de receitas e enquadramento
            correto.
          </p>
        </div>
      </section>
    </div>
  );
}
