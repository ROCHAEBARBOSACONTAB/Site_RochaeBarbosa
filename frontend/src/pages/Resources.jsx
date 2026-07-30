import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Layers, TableProperties, FileCheck2 } from "lucide-react";

const RESOURCES_HERO =
  "https://images.pexels.com/photos/669615/pexels-photo-669615.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=1200&w=2000";

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
    title: "Tabelas Fiscais",
    to: "/recursos/tabelas"
  },
];

export default function Resources() {
  return (
    <div data-testid="resources-page" className="bg-white">
      
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#0A2A57] text-white noise">
        <div className="absolute inset-0 opacity-50">
          <img src={RESOURCES_HERO} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,42,87,0.9)_0%,rgba(10,42,87,0.78)_52%,rgba(10,42,87,0.86)_100%)]" />
        <div className="relative max-w-[900px] mx-auto px-6 lg:px-12 pt-7 pb-10 lg:pt-16 lg:pb-12 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">Base Técnica</div>

          <h1 className="font-serif text-[36px] sm:text-[46px] lg:text-[60px] leading-[1.06]">
            Tabelas e referências fiscais
            <span className="text-[#D4AF37]"> para decisões objetivas.</span>
          </h1>

          <p className="mt-5 max-w-[620px] mx-auto text-white/80 text-[16px] leading-relaxed">
            Consulte classificações, anexos e dados fiscais essenciais para apoiar a sua operação.
          </p>
        </div>
        <div className="relative gold-line" />
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
