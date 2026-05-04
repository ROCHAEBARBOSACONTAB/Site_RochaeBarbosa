import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, TableProperties, FileCheck2 } from "lucide-react";

const modules = [
  {
    icon: Layers,
    title: "Simples Nacional",
    to: "/recursos/simples-nacional",
  },
  {
    icon: TableProperties,
    title: "CFOP",
    to: "/recursos/cfop",
  },
  {
    icon: FileCheck2,
    title: "CST, CSOSN, PIS/COFINS e IPI",
    to: "/recursos/codigos-fiscais",
  },
];

export default function Resources() {
  return (
    <div data-testid="resources-page" className="bg-white">
      
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">Base Técnica</div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
            Tabelas e referências fiscais para consulta objetiva.
          </h1>
        </div>
      </section>

      {/* MODULES */}
      <section className="py-20 bg-white">
        <div className="max-w-[900px] mx-auto px-6 grid md:grid-cols-3 gap-6">
          {modules.map((item, index) => {
            const Icon = item.icon;

            return (
              <Link
                key={index}
                to={item.to}
                className="border border-[#0A2A57]/10 p-7 hover:shadow-lg transition group text-center"
              >
                <div className="w-12 h-12 mx-auto border border-[#D4AF37] flex items-center justify-center mb-5 text-[#D4AF37] group-hover:bg-[#0A2A57] transition">
                  <Icon size={22} />
                </div>

                <h3 className="font-serif text-xl text-[#0A2A57] mb-4">
                  {item.title}
                </h3>

                <div className="flex items-center justify-center gap-2 text-xs uppercase tracking-[0.16em] text-[#0A2A57] group-hover:text-[#D4AF37] transition">
                  Acessar <ArrowRight size={13} />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MICRO CTA (opcional e leve) */}
      <section className="pb-16 text-center">
        <div className="max-w-[600px] mx-auto px-6">
          <p className="text-[#666] text-sm leading-[1.7]">
            Para dúvidas de aplicação prática ou inconsistências na operação,
            o ideal é analisar o cenário completo.
          </p>
        </div>
      </section>
    </div>
  );
}