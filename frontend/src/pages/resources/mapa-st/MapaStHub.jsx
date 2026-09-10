import React, { useState } from "react";
import brazil from "@svg-maps/brazil";
import { ArrowLeft, MapPinned } from "lucide-react";
import { Link } from "react-router-dom";

const availableStates = {
  sp: {
    name: "São Paulo",
    href: "/recursos/mapa-st/sao-paulo",
    summary: "22 anexos catalogados",
    details: ["4 vigentes", "9 revogados", "5 com revogação programada", "4 com alterações por itens"],
  },
  rs: {
    name: "Rio Grande do Sul",
    href: "/recursos/mapa-st/rio-grande-do-sul",
    summary: "31 itens catalogados",
    details: ["11 vigentes", "11 revogados", "3 com revogação programada", "6 com alterações por itens"],
  },
  mg: {
    name: "Minas Gerais",
    href: "/recursos/mapa-st/minas-gerais",
    summary: "28 capítulos catalogados",
    details: ["14 vigentes", "0 revogados", "0 com revogação programada", "14 com alterações por itens"],
  },
  sc: {
    name: "Santa Catarina",
    href: "/recursos/mapa-st/santa-catarina",
    summary: "26 seções catalogadas",
    details: ["5 vigentes", "16 revogados", "0 com revogação programada", "5 com alterações por itens"],
  },
  pr: {
    name: "Paraná",
    href: "/recursos/mapa-st/parana",
    summary: "29 entradas catalogadas",
    details: ["18 vigentes", "6 revogados", "0 com revogação programada", "5 com alterações por itens"],
  },
  ms: {
    name: "Mato Grosso do Sul",
    href: "/recursos/mapa-st/mato-grosso-do-sul",
    summary: "28 segmentos catalogados",
    details: ["20 vigentes", "4 revogados", "0 com revogação programada", "4 com alterações por itens"],
  },
};

export default function MapaStHub() {
  const [selectedState, setSelectedState] = useState(null);
  const selected = selectedState ? availableStates[selectedState.id] || { name: selectedState.name } : null;

  return (
    <div data-testid="mapa-st-hub" className="min-h-[calc(100vh-96px)] bg-white text-[#0A2A57]">
      <section className="bg-[#0A2A57] py-10 text-white lg:py-16 noise">
        <div className="mx-auto max-w-[1120px] px-6">
          <Link to="/recursos" className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#E6C96A] transition hover:text-white"><ArrowLeft size={15} /> Materiais técnicos</Link>
          <div className="mt-7 max-w-[760px]">
            <p className="eyebrow text-[#E6C96A]">Consulta por unidade federada</p>
            <h1 className="mt-4 font-serif text-4xl leading-[1.1] lg:text-6xl">Mapa da Incidência do ICMS-ST por Estado</h1>
            <p className="mt-5 text-base leading-8 text-white/80 lg:text-lg">Selecione uma unidade federada para consultar a incidência interna, vigências e atos normativos mapeados.</p>
          </div>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="mx-auto max-w-[1120px] px-6">
          <p className="eyebrow text-center text-[#B28513]">Estados disponíveis</p>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,.8fr)] lg:items-center">
            <div>
              <svg viewBox={brazil.viewBox} role="img" aria-label="Mapa do Brasil. Passe o cursor sobre um estado para consultar seu status." className="mx-auto w-full max-w-[500px] drop-shadow-[0_20px_28px_rgba(10,42,87,0.12)]">
                {brazil.locations.map((location) => {
                  const state = availableStates[location.id];
                  const path = <path d={location.path} className={state ? "fill-[#D4AF37] stroke-[#0A2A57] stroke-[1.5] transition hover:fill-[#E6C96A]" : "fill-[#DCE4ED] stroke-white stroke-[1] transition hover:fill-[#C6D1DD]"} />;
                  const onEnter = () => setSelectedState(location);
                  return state ? <a key={location.id} href={state.href} aria-label={`Consultar ${state.name}`} className="cursor-pointer focus:outline-none" onMouseEnter={onEnter} onFocus={onEnter}>{path}</a> : <g key={location.id} role="img" aria-label={`${location.name}: em mapeamento`} className="cursor-default" onMouseEnter={onEnter}>{path}</g>;
                })}
              </svg>
            </div>
            <aside aria-live="polite" className="min-h-[250px] border border-[#0A2A57]/12 bg-[#F8F8F6] p-7 shadow-[0_12px_28px_rgba(10,42,87,0.05)]">
              {selected ? <>
                <p className="eyebrow text-[#B28513]">{selected.href ? "Estado disponível" : "Em levantamento"}</p>
                <h2 className="mt-3 font-serif text-4xl leading-tight text-[#0A2A57]">{selected.name}</h2>
                {selected.href ? <>
                  <p className="mt-4 text-lg font-medium text-[#0A2A57]">{selected.summary}</p>
                  <ul className="mt-5 space-y-2 text-sm leading-6 text-[#5E6470]">{selected.details.map((detail) => <li key={detail} className="flex gap-2"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#D4AF37]" />{detail}</li>)}</ul>
                  <a href={selected.href} className="mt-7 inline-flex items-center gap-2 border border-[#0A2A57] px-4 py-3 text-xs font-semibold uppercase tracking-[0.13em] text-[#0A2A57] transition hover:border-[#D4AF37] hover:bg-white">Abrir consulta <span aria-hidden="true">→</span></a>
                </> : <p className="mt-4 max-w-sm text-sm leading-7 text-[#5E6470]">A legislação local deste estado ainda está em levantamento e conferência. A consulta será liberada somente após validação dos atos, vigências e alterações relevantes.</p>}
              </> : <>
                <MapPinned size={25} className="text-[#B28513]" />
                <h2 className="mt-4 font-serif text-3xl leading-tight">Explore o mapa</h2>
                <p className="mt-3 max-w-sm text-sm leading-7 text-[#5E6470]">Passe o cursor sobre um estado para ver a situação do levantamento. São Paulo e Rio Grande do Sul já possuem consulta disponível.</p>
              </>}
            </aside>
          </div>
          <p className="mx-auto mt-8 max-w-[620px] text-center text-sm leading-7 text-[#5E6470]">As demais unidades federadas serão disponibilizadas após levantamento e conferência da legislação local.</p>
        </div>
      </section>
    </div>
  );
}
