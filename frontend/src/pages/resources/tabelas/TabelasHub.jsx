import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, FileCheck2 } from "lucide-react";

const tabelas = [
  {
    title: "ICMS",
    desc: "CST, CSOSN, origem da mercadoria, CRT e códigos aplicáveis ao ICMS.",
    to: "/recursos/tabelas/icms",
  },
  {
    title: "IPI",
    desc: "CST do IPI e referências de tributação aplicáveis à operação industrial.",
    to: "/recursos/tabelas/ipi",
  },
  {
    title: "PIS/COFINS",
    desc: "CST de PIS e Cofins para entradas, saídas, receitas e operações específicas.",
    to: "/recursos/tabelas/pis-cofins",
  },
];

export default function TabelasHub() {
  return (
    <div data-testid="tabelas-hub-page" className="bg-white">
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Base Técnica · Tabelas Fiscais
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
            Tabelas fiscais para consulta objetiva.
          </h1>

          <p className="mt-6 text-white/75 text-lg leading-[1.8]">
            Consulte códigos fiscais por tema: ICMS, IPI, PIS e Cofins.
          </p>

          <Link
            to="/recursos"
            className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.16em] text-[#E6C96A] hover:text-white transition"
          >
            <ArrowLeft size={15} />
            Voltar para Base Técnica
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6 grid md:grid-cols-3 gap-6">
          {tabelas.map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className="border border-[#0A2A57]/10 p-7 hover:shadow-lg transition group"
            >
              <div className="w-12 h-12 border border-[#D4AF37] flex items-center justify-center mb-6 text-[#D4AF37] group-hover:bg-[#0A2A57] transition">
                <FileCheck2 size={22} />
              </div>

              <h3 className="font-serif text-2xl text-[#0A2A57] mb-3">
                {item.title}
              </h3>

              <p className="text-[#555] leading-[1.7] mb-6">
                {item.desc}
              </p>

              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#0A2A57] group-hover:text-[#D4AF37] transition">
                Acessar tabela <ArrowRight size={13} />
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}