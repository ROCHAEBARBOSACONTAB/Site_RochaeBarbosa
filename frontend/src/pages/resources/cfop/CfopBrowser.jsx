import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, ChevronRight, FileText, ListTree, Search } from "lucide-react";
import cfopRecords from "./cfopData.json";

const HIDDEN_ROOT_BRANCHES = new Set();
const SUPPLEMENTAL_RECORDS = [
  {
    code: "3300",
    title: "AQUISIÇÕES DE SERVIÇOS DE COMUNICAÇÃO",
    description: "",
    parent: "3000",
  },
  {
    code: "7350",
    title: "PRESTAÇÕES DE SERVIÇOS DE TRANSPORTE",
    description: "",
    parent: "7000",
  },
];
const ALL_CFOP_RECORDS = [...cfopRecords, ...SUPPLEMENTAL_RECORDS];
const CURATED_CHILDREN = {
  "3000": ["3100", "3200", "3250", "3300", "3350", "3500", "3550", "3650", "3900"],
  "3100": ["3101", "3102", "3126", "3127", "3128"],
  "3200": ["3201", "3202", "3205", "3206", "3207", "3211"],
  "3250": ["3251"],
  "3300": ["3301"],
  "7000": ["7100", "7200", "7250", "7300", "7350", "7500", "7550", "7650", "7900"],
  "7100": ["7101", "7102", "7105", "7106", "7127"],
  "7200": ["7201", "7202", "7205", "7206", "7207", "7210", "7211"],
};
const CFOPS = Object.fromEntries(ALL_CFOP_RECORDS.map((record) => [record.code, record]));
const CFOP_ROOT = ALL_CFOP_RECORDS.filter(
  (record) => record.parent === null && !HIDDEN_ROOT_BRANCHES.has(record.code),
);

function directParentCode(code) {
  const number = Number(code);
  const suffix = number % 100;

  if (number % 1000 === 0) return null;
  if (suffix === 0 || suffix === 50) return `${Math.floor(number / 1000)}000`;

  const hundred = Math.floor(number / 100) * 100;
  return `${suffix >= 50 ? hundred + 50 : hundred}`;
}

function childrenFor(code) {
  if (CURATED_CHILDREN[code]) {
    return CURATED_CHILDREN[code].map((childCode) => CFOPS[childCode]).filter(Boolean);
  }

  return ALL_CFOP_RECORDS.filter((record) => directParentCode(record.code) === code);
}

function CfopLink({ code, title }) {
  return (
    <Link
      to={`/recursos/cfop/${code}`}
      className="group flex items-center justify-between gap-5 border-b border-[#0A2A57]/10 py-5 first:border-t hover:border-[#D4AF37] transition-colors"
    >
      <span className="text-sm leading-6 text-[#0A2A57] group-hover:text-[#A67C00] transition-colors">
        <strong className="font-semibold">{code}</strong>
        <span className="mx-2 text-[#D4AF37]">-</span>
        {title}
      </span>
      <ArrowRight size={17} className="shrink-0 text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity" />
    </Link>
  );
}

function Breadcrumbs({ node }) {
  const trail = [];
  let current = node;

  while (current) {
    trail.unshift(current);
    current = current.parent ? { ...CFOPS[current.parent], code: current.parent } : null;
  }

  return (
    <nav aria-label="Caminho de navegação" className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.12em] text-white/65">
      <Link to="/recursos/cfop" className="font-semibold hover:text-[#E6C96A] hover:underline underline-offset-4 transition-colors">CFOP</Link>
      {trail.map((item, index) => (
        <React.Fragment key={item.code}>
          <ChevronRight size={13} className="text-[#D4AF37]" />
          <Link
            to={`/recursos/cfop/${item.code}`}
            aria-current={index === trail.length - 1 ? "page" : undefined}
            className={`transition-colors hover:text-[#E6C96A] hover:underline underline-offset-4 ${
              index === trail.length - 1 ? "font-semibold text-[#E6C96A]" : "font-medium text-white/85"
            }`}
          >
            {item.code}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
}

function CfopIndex() {
  const [query, setQuery] = useState("");
  const normalizedQuery = query.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim();
  const results = useMemo(() => {
    if (!normalizedQuery) return [];

    const isCodeSearch = /^\d+$/.test(normalizedQuery);
    return ALL_CFOP_RECORDS.filter((record) => {
      const searchableTitle = record.title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
      return isCodeSearch
        ? record.code.startsWith(normalizedQuery)
        : searchableTitle.includes(normalizedQuery);
    }).slice(0, 20);
  }, [normalizedQuery]);

  return (
    <div data-testid="cfop-index-page" className="bg-white">
      <section className="bg-[#0A2A57] text-white pt-7 pb-7 lg:pt-14 lg:pb-10 noise">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="eyebrow text-[#E6C96A] mb-4">Base técnica · CFOP</div>
          <h1 className="font-serif text-3xl lg:text-4xl leading-[1.15]">CFOPs para consulta por natureza da operação.</h1>
          <p className="mt-4 max-w-[720px] text-white/75 leading-7">
            Navegue pelos grupos de entradas, aquisições, saídas e prestações de serviços.
          </p>
          <Link to="/recursos" className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-[0.16em] text-[#E6C96A] hover:text-white transition">
            <ArrowLeft size={15} /> Voltar para Base Técnica
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="mb-12 border border-[#D4AF37]/45 bg-[#F7F7F4] p-6 lg:p-7">
            <div className="mb-5">
              <div className="eyebrow text-[#A67C00] mb-2">Pesquisa de CFOP</div>
              <h2 className="font-serif text-2xl text-[#0A2A57]">Localize um código ou descrição</h2>
            </div>
            <label htmlFor="cfop-search" className="sr-only">Pesquisar CFOP</label>
            <div className="relative">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A67C00]" />
              <input
                id="cfop-search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ex.: 3101 ou compra para comercialização"
                className="w-full border border-[#0A2A57]/20 bg-white py-3 pl-11 pr-4 text-[#0A2A57] outline-none placeholder:text-[#777] focus:border-[#D4AF37]"
              />
            </div>

            {normalizedQuery && (
              <div className="mt-5 border-t border-[#0A2A57]/10">
                {results.length > 0 ? results.map((item) => (
                  <Link
                    key={item.code}
                    to={`/recursos/cfop/${item.code}`}
                    className="group flex items-center justify-between gap-5 border-b border-[#0A2A57]/10 py-4 hover:border-[#D4AF37] transition-colors"
                  >
                    <span className="text-sm leading-6 text-[#0A2A57] group-hover:text-[#A67C00] transition-colors">
                      <strong className="font-semibold">{item.code}</strong><span className="mx-2 text-[#D4AF37]">-</span>{item.title}
                    </span>
                    <ArrowRight size={17} className="shrink-0 text-[#D4AF37]" />
                  </Link>
                )) : (
                  <p className="py-5 text-sm text-[#555]">Nenhum CFOP encontrado para esta busca.</p>
                )}
              </div>
            )}
          </div>
          <div className="flex items-center gap-4 mb-8">
            <div className="w-11 h-11 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37]"><ListTree size={21} /></div>
            <div>
              <div className="eyebrow text-[#A67C00] mb-1">Estrutura de consulta</div>
              <h2 className="font-serif text-3xl text-[#0A2A57]">Grupos de CFOP</h2>
            </div>
          </div>
          <div>
            {CFOP_ROOT.map((item) => <CfopLink key={item.code} {...item} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

export default function CfopBrowser() {
  const { code } = useParams();
  if (!code) return <CfopIndex />;

  if (HIDDEN_ROOT_BRANCHES.has(`${code.slice(0, 1)}000`)) {
    return (
      <div data-testid="cfop-under-review-page" className="bg-white py-32 text-center px-6">
        <div className="max-w-[620px] mx-auto">
          <div className="eyebrow text-[#A67C00] mb-4">CFOP em revisão</div>
          <h1 className="font-serif text-4xl text-[#0A2A57]">Esta ramificação está em estruturação técnica.</h1>
          <p className="mt-5 text-[#555] leading-7">
            A navegação será disponibilizada após a validação individual dos níveis e códigos relacionados.
          </p>
          <Link to="/recursos/cfop" className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.16em] text-[#0A2A57] hover:text-[#D4AF37] transition">
            <ArrowLeft size={15} /> Voltar para CFOP
          </Link>
        </div>
      </div>
    );
  }

  const node = CFOPS[code];

  if (!node) {
    return (
      <div className="bg-white py-40 text-center px-6">
        <h1 className="font-serif text-4xl text-[#0A2A57]">CFOP não encontrado</h1>
        <Link to="/recursos/cfop" className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.16em] text-[#0A2A57] hover:text-[#D4AF37] transition"><ArrowLeft size={15} /> Voltar para CFOP</Link>
      </div>
    );
  }

  const children = childrenFor(code);

  return (
    <div data-testid={`cfop-${code}-page`} className="bg-white">
      <section className="bg-[#0A2A57] text-white pt-7 pb-7 lg:pt-14 lg:pb-10 noise">
        <div className="max-w-[960px] mx-auto px-6">
          <Breadcrumbs node={node} />
          <div className="mt-5 mb-4 border-l-2 border-[#D4AF37] pl-4">
            <div className="eyebrow text-[#E6C96A] mb-1">Código atual</div>
            <div className="font-serif text-xl lg:text-2xl text-white">CFOP {code}</div>
          </div>
          <h1 className="font-serif text-3xl lg:text-4xl leading-[1.15] max-w-[900px]">{node.title}</h1>
          <Link to={node.parent ? `/recursos/cfop/${node.parent}` : "/recursos/cfop"} className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-[0.16em] text-[#E6C96A] hover:text-white transition">
            <ArrowLeft size={15} /> Voltar para o nível anterior
          </Link>
        </div>
      </section>

      <section className="py-9 lg:py-10 bg-[#F7F7F4]">
        <div className="max-w-[960px] mx-auto px-6">
          <div className="border border-[#D4AF37]/35 bg-white p-6 lg:p-7">
            <div className="flex items-center gap-3 mb-4 text-[#A67C00]"><FileText size={19} /><span className="eyebrow text-[#A67C00]">Descrição</span></div>
            <p className="text-[#0A2A57] text-base lg:text-lg leading-8">{node.description || "A árvore deste grupo será detalhada nas próximas etapas."}</p>
          </div>
        </div>
      </section>

      {children.length > 0 && (
        <section className="py-12 lg:py-14 bg-white">
          <div className="max-w-[960px] mx-auto px-6">
            <div className="eyebrow text-[#A67C00] mb-3">Próximo nível</div>
            <h2 className="font-serif text-3xl text-[#0A2A57] mb-8">Classificações relacionadas</h2>
            {children.map((child) => <CfopLink key={child.code} {...child} />)}
          </div>
        </section>
      )}
    </div>
  );
}
