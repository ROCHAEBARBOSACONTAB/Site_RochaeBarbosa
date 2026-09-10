import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, CalendarDays, ExternalLink, MapPinned, Scale, Search } from "lucide-react";
import { mapaStSources, saoPauloStAnnexes, saoPauloStSegments } from "../../../data/mapaStSaoPaulo";

const statusStyles = {
  "Anexo revogado": "border-rose-200 bg-rose-50 text-rose-800",
  "Seção revogada": "border-rose-200 bg-rose-50 text-rose-800",
  "Itens revogados": "border-amber-200 bg-amber-50 text-amber-800",
  "Item revogado": "border-amber-200 bg-amber-50 text-amber-800",
  "Item incluído": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Vigente": "border-emerald-200 bg-emerald-50 text-emerald-800",
  "Alterações por itens": "border-amber-200 bg-amber-50 text-amber-800",
  "Revogação programada": "border-sky-200 bg-sky-50 text-sky-800",
};

export default function MapaSt({ config = { state: "São Paulo", stateSlug: "sao-paulo", catalogName: "Anexo", catalogDescription: "Consulte os 22 anexos da Portaria CAT 68/19. A busca considera o segmento, o status e as movimentações registradas em cada anexo.", annexes: saoPauloStAnnexes, segments: saoPauloStSegments, sources: mapaStSources } }) {
  const { state, stateSlug, catalogName, catalogDescription, annexes: catalog, segments, sources } = config;
  const [selectedAnnex, setSelectedAnnex] = useState(null);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [query, setQuery] = useState("");
  const [search, setSearch] = useState("");
  const annexes = useMemo(() => catalog.map((annex) => ({
    ...annex,
    events: segments.filter((segment) => segment.annex === annex.id),
  })).filter((annex) => {
    if (selectedAnnex && annex.id !== selectedAnnex) return false;
    if (selectedStatus && annex.status !== selectedStatus) return false;
    const searchable = [
      annex.id,
      annex.title,
      annex.status,
      ...annex.events.flatMap((event) => [event.title, event.scope, event.status, ...event.events.flat()]),
    ].join(" ").toLocaleLowerCase("pt-BR");
    return searchable.includes(search.trim().toLocaleLowerCase("pt-BR"));
  }), [catalog, search, segments, selectedAnnex, selectedStatus]);

  return (
    <div data-testid="mapa-st-page" className="bg-white text-[#0A2A57]">
      <section className="bg-[#0A2A57] py-10 text-white lg:py-16 noise">
        <div className="mx-auto max-w-[1120px] px-6">
          <Link to="/recursos/mapa-st" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#E6C96A] transition hover:text-white"><ArrowLeft size={15} /> Mapa por estado</Link>
          <div className="mt-7 max-w-[820px]">
            <p className="eyebrow text-[#E6C96A]">Consulta de incidência interna</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] lg:text-6xl">Mapa da Incidência do ICMS-ST em {state}</h1>
            <p className="mt-5 max-w-[720px] text-base leading-8 text-white/80 lg:text-lg">Uma leitura organizada das incidências, não incidências, vigências e respectivas bases legais dentro do Estado de {state}.</p>
          </div>
        </div>
      </section>

      <section id={`segmentos-${stateSlug}`} className="scroll-mt-28 py-14 lg:py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <div className="grid gap-7 border-b border-[#0A2A57]/10 pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="eyebrow text-[#B28513]">{state}</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight">Consulta por {catalogName}</h2>
              <p className="mt-4 max-w-[760px] text-[16px] leading-7 text-[#5E6470]">{catalogDescription}</p>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filtrar a consulta">
              <select value={selectedAnnex || ""} onChange={(event) => setSelectedAnnex(event.target.value || null)} className="min-h-11 border border-[#0A2A57]/20 bg-white px-3 text-sm font-medium text-[#0A2A57] outline-none transition focus:border-[#D4AF37]">
                <option value="">Todos os anexos</option>
                {catalog.map((annex) => <option key={annex.id} value={annex.id}>{annex.label || `${catalogName} ${annex.id}`}</option>)}
              </select>
              <select value={selectedStatus} onChange={(event) => setSelectedStatus(event.target.value)} className="min-h-11 border border-[#0A2A57]/20 bg-white px-3 text-sm font-medium text-[#0A2A57] outline-none transition focus:border-[#D4AF37]" aria-label="Filtrar por status">
                <option value="">Todos os status</option>
                {["Vigente", "Item incluído", "Alterações por itens", "Anexo revogado", "Seção revogada", "Item revogado", "Revogação programada"].map((status) => <option key={status} value={status}>{status}</option>)}
              </select>
            </div>
          </div>

          <form className="mt-7 flex max-w-[720px] border border-[#0A2A57]/20 bg-white" onSubmit={(event) => { event.preventDefault(); setSearch(query); }}>
            <label className="flex min-w-0 flex-1 items-center gap-3 px-4 py-3">
              <Search size={18} className="shrink-0 text-[#B28513]" />
              <input value={query} onChange={(event) => setQuery(event.target.value)} className="min-w-0 flex-1 bg-transparent text-sm text-[#0A2A57] outline-none placeholder:text-[#78808E]" placeholder="Buscar por segmento, anexo, ato ou código" aria-label="Buscar no Mapa da ST" />
            </label>
            <button type="submit" aria-label="Buscar" title="Buscar" className="border-l border-[#0A2A57]/20 px-4 text-[#0A2A57] transition hover:bg-[#FFF8E3]"><Search size={18} /></button>
          </form>

          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {annexes.map((annex) => (
              <article key={annex.id} className="flex h-full flex-col border border-[#0A2A57]/12 bg-white p-6 shadow-[0_12px_28px_rgba(10,42,87,0.05)]">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="max-w-[440px] font-serif text-2xl leading-tight text-[#0A2A57]">{annex.label || `${catalogName} ${annex.id}`}</h3>
                  <span className={`shrink-0 border px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] ${statusStyles[annex.status]}`}>{annex.status}</span>
                </div>
                <p className="mt-3 text-base leading-7 text-[#5E6470]">{annex.title}</p>
                {annex.events.length > 0 ? annex.events.map((segment) => (
                  <div key={segment.id} className="mt-5 border-l-2 border-[#D4AF37] pl-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B28513]">{segment.status}</p>
                    <p className="mt-1 text-sm font-medium text-[#0A2A57]">{segment.title}</p>
                    <p className="mt-1 text-sm leading-6 text-[#5E6470]"><span className="font-semibold text-[#0A2A57]">Alcance: </span>{segment.scope}</p>
                    {segment.events.map(([label, act, date]) => <div key={`${label}-${act}`} className="mt-3"><p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#B28513]">{label}</p><p className="mt-1 text-sm font-medium text-[#0A2A57]">{act}</p><p className="mt-1 flex items-center gap-1.5 text-xs text-[#6B7280]"><CalendarDays size={13} /> {date}</p></div>)}
                    <a href={sources[segment.source]} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#0A2A57] transition hover:text-[#B28513]">Consultar ato oficial <ExternalLink size={13} /></a>
                  </div>
                )) : <p className="mt-5 border-l-2 border-[#D4AF37] pl-4 text-sm leading-7 text-[#5E6470]">Sem movimentação material catalogada nesta primeira etapa. Consulte a relação oficial vigente para a análise do item específico.</p>}
                {annex.events.length === 0 && <a href={sources.ricms || sources.cat68} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.13em] text-[#0A2A57] transition hover:text-[#B28513]">Consultar ato oficial <ExternalLink size={13} /></a>}
              </article>
            ))}
            {annexes.length === 0 && <div className="border border-[#0A2A57]/12 bg-[#F8F8F6] p-6 text-sm leading-7 text-[#5E6470]">Nenhum anexo ou movimentação corresponde a esta busca. Verifique o termo, NCM, CEST ou ato informado.</div>}
          </div>
        </div>
      </section>

      <section className="border-y border-[#0A2A57]/10 bg-[#F8F8F6] py-12">
        <div className="mx-auto grid max-w-[1120px] gap-6 px-6 lg:grid-cols-2">
          <div className="border border-[#D4AF37]/50 bg-white p-6"><Scale className="text-[#B28513]" size={25} /><h2 className="mt-4 font-serif text-3xl">Abrangência da consulta</h2><p className="mt-3 text-sm leading-7 text-[#5E6470]">Este mapa trata exclusivamente da incidência interna em {state}. A classificação efetiva depende, entre outros fatores, da mercadoria, NCM, CEST, operação, data do fato gerador, estabelecimento e regras aplicáveis ao caso concreto.</p></div>
          <div className="border border-[#0A2A57]/10 bg-white p-6"><MapPinned className="text-[#B28513]" size={25} /><h2 className="mt-4 font-serif text-3xl">Próxima frente técnica</h2><p className="mt-3 text-sm leading-7 text-[#5E6470]">Convênios, protocolos e operações interestaduais terão material próprio. A expansão para outra UF só ocorrerá após conferência de atos de inclusão, alterações, revogações e vigências locais.</p></div>
        </div>
      </section>
    </div>
  );
}
