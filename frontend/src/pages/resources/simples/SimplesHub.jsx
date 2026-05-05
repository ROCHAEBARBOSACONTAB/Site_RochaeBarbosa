import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Layers,
  Calculator,
  AlertTriangle,
  Percent,
} from "lucide-react";

const annexes = [
  {
    title: "Anexo I",
    desc: "Comércio",
    to: "/recursos/simples-nacional/anexo-1",
  },
  {
    title: "Anexo II",
    desc: "Indústria",
    to: "/recursos/simples-nacional/anexo-2",
  },
  {
    title: "Anexo III",
    desc: "Serviços",
    to: "/recursos/simples-nacional/anexo-3",
  },
  {
    title: "Anexo IV",
    desc: "Serviços com CPP fora do DAS",
    to: "/recursos/simples-nacional/anexo-4",
  },
  {
    title: "Anexo V",
    desc: "Serviços sujeitos ao Fator R",
    to: "/recursos/simples-nacional/anexo-5",
  },
];

const topics = [
  {
    icon: Calculator,
    title: "Cálculo do Simples",
    desc: "Receita bruta acumulada, alíquota nominal, parcela a deduzir e alíquota efetiva.",
    to: "/recursos/simples-nacional/calculo",
  },
  {
    icon: Percent,
    title: "Fator R",
    desc: "Regra de enquadramento entre Anexo III e Anexo V para determinadas atividades.",
    to: "/recursos/simples-nacional/fator-r",
  },
  {
    icon: AlertTriangle,
    title: "Erros comuns",
    desc: "Falhas frequentes na aplicação de anexos, cálculo e interpretação das tabelas.",
    to: "/recursos/simples-nacional/erros-comuns",
  },
];

export default function SimplesHub() {
  return (
    <div data-testid="simples-hub-page" className="bg-white">
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[950px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Base Técnica · Simples Nacional
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
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
      <section className="py-20 bg-white">
        <div className="max-w-[1050px] mx-auto px-6">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-11 h-11 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]">
              <Layers size={21} />
            </div>

            <div>
              <div className="eyebrow text-[#D4AF37] mb-1">Tabelas</div>
              <h2 className="font-serif text-3xl text-[#0A2A57]">
                Anexos do Simples Nacional
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-5 gap-4">
            {annexes.map((item, index) => (
              <Link
                key={index}
                to={item.to}
                className="border border-[#0A2A57]/10 p-6 hover:shadow-lg transition group"
              >
                <h3 className="font-serif text-2xl text-[#0A2A57] mb-2">
                  {item.title}
                </h3>

                <p className="text-[#555] text-sm leading-[1.6] min-h-[44px]">
                  {item.desc}
                </p>

                <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#0A2A57] group-hover:text-[#D4AF37] transition">
                  Acessar <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TOPICS */}
      {/*<section className="py-20 bg-[#F2F2F2]">
        <div className="max-w-[1050px] mx-auto px-6">
          <div className="eyebrow text-[#D4AF37] mb-4">Referências</div>

          <h2 className="font-serif text-3xl text-[#0A2A57] mb-8">
            Cálculo e pontos críticos
          </h2>

          <div className="grid md:grid-cols-3 gap-5">
            {topics.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={index}
                  to={item.to}
                  className="bg-white border border-[#0A2A57]/10 p-7 hover:shadow-lg transition group"
                >
                  <Icon size={24} className="text-[#D4AF37] mb-5" />

                  <h3 className="font-serif text-2xl text-[#0A2A57] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-[#555] text-sm leading-[1.7] mb-5">
                    {item.desc}
                  </p>

                  <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#0A2A57] group-hover:text-[#D4AF37] transition">
                    Acessar <ArrowRight size={13} />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>*/}

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