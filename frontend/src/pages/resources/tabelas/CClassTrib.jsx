import React, { useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ExternalLink, FileDown, Search, TableProperties } from "lucide-react";
import { Link } from "react-router-dom";
import cclassTribData from "./cclassTribData.json";

const { source, records } = cclassTribData;

function formatDate(value) {
  if (!value) return "Sem término informado";
  return new Intl.DateTimeFormat("pt-BR", { timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
}

function normalize(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function Flag({ label, value }) {
  return (
    <div className="border border-[#0A2A57]/10 bg-white px-4 py-3">
      <div className="text-[10px] uppercase tracking-[0.12em] text-[#777]">{label}</div>
      <div className="mt-1 text-sm font-semibold text-[#0A2A57]">{value === "1" ? "Aplicável" : value === "0" ? "Não aplicável" : value || "Não informado"}</div>
    </div>
  );
}

export default function CClassTrib() {
  const [query, setQuery] = useState("");
  const [selectedCode, setSelectedCode] = useState(null);
  const detailRef = useRef(null);
  const normalizedQuery = normalize(query.trim());
  const selected = records.find((record) => record.code === selectedCode);
  const results = useMemo(() => {
    if (!normalizedQuery) return records.slice(0, 12);
    return records.filter((record) => normalize([
      record.code,
      record.cst,
      record.name,
      record.description,
      record.legalReference,
      record.rateType,
    ].join(" ")).includes(normalizedQuery));
  }, [normalizedQuery]);

  useEffect(() => {
    if (!selectedCode || !window.matchMedia("(max-width: 1023px)").matches) return;
    detailRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [selectedCode]);

  return (
    <div data-testid="cclass-trib-page" className="bg-white">
      <section className="bg-[#0A2A57] text-white pt-7 pb-10 lg:pt-14 lg:pb-12 noise">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="eyebrow text-[#E6C96A] mb-4">Base técnica · IBS e CBS</div>
          <h1 className="font-serif text-3xl lg:text-5xl leading-[1.12] max-w-[850px]">Consulta de cClassTrib para documentos fiscais.</h1>
          <p className="mt-5 max-w-[810px] text-white/75 text-base lg:text-lg leading-8">
            Localize a classificação tributária por código, CST ou descrição. A consulta reproduz os dados da planilha publicada no Portal Nacional da NF-e.
          </p>
          <Link to="/recursos/tabelas" className="inline-flex items-center gap-2 mt-6 text-sm uppercase tracking-[0.16em] text-[#E6C96A] hover:text-white transition">
            <ArrowLeft size={15} /> Voltar para Tabelas fiscais
          </Link>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="max-w-[1080px] mx-auto px-6">
          <div className="border border-[#D4AF37]/45 bg-[#F7F7F4] p-6 lg:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex items-center gap-3 text-[#A67C00]"><TableProperties size={20} /><span className="eyebrow text-[#A67C00]">Consulta de referência</span></div>
                <h2 className="mt-3 font-serif text-2xl lg:text-3xl text-[#0A2A57]">Tabela cClassTrib</h2>
                <p className="mt-3 max-w-[690px] text-[#555] leading-7">
                  Versão publicada em {source.publishedVersion.split("-").reverse().join("/")}, com {source.recordCount} classificações. Confirme sempre a versão oficial antes de parametrizar ou transmitir documentos.
                </p>
              </div>
              <a href={source.url} target="_blank" rel="noreferrer" className="inline-flex shrink-0 items-center justify-center gap-2 border border-[#0A2A57] px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-[#0A2A57] hover:bg-[#0A2A57] hover:text-white transition">
                <FileDown size={16} /> Baixar fonte oficial <ExternalLink size={14} />
              </a>
            </div>

            <label htmlFor="cclass-trib-search" className="sr-only">Pesquisar cClassTrib</label>
            <div className="relative mt-7">
              <Search size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A67C00]" />
              <input id="cclass-trib-search" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ex.: 000001, CST 000, exploração de via ou art. 11" className="w-full border border-[#0A2A57]/20 bg-white py-4 pl-12 pr-4 text-[#0A2A57] outline-none placeholder:text-[#777] focus:border-[#D4AF37]" />
            </div>
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start">
            <div>
              <div className="mb-4 flex items-baseline justify-between gap-4">
                <h2 className="font-serif text-2xl text-[#0A2A57]">{normalizedQuery ? "Resultados" : "Classificações em destaque"}</h2>
                <span className="text-sm text-[#666]">{results.length} {results.length === 1 ? "resultado" : "resultados"}</span>
              </div>
              <div className="border-t border-[#0A2A57]/10">
                {results.map((record) => (
                  <button key={record.code} type="button" aria-pressed={selectedCode === record.code} onClick={() => setSelectedCode(record.code)} className={`w-full border-b border-[#0A2A57]/10 px-4 py-5 text-left transition hover:bg-[#F7F7F4] ${selectedCode === record.code ? "bg-[#F7F7F4] border-l-2 border-l-[#D4AF37]" : ""}`}>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                      <span className="font-semibold text-[#0A2A57]">{record.code}</span>
                      <span className="border border-[#D4AF37]/50 px-2 py-0.5 text-[11px] font-semibold text-[#A67C00]">CST {record.cst}</span>
                      <span className="text-xs text-[#666]">{record.rateType}</span>
                    </div>
                    <div className="mt-2 text-sm leading-6 text-[#0A2A57]">{record.name}</div>
                  </button>
                ))}
                {results.length === 0 && <p className="py-8 text-[#555]">Nenhuma classificação encontrada. Tente o código, CST, uma palavra da descrição ou referência legal.</p>}
              </div>
            </div>

            <aside ref={detailRef} tabIndex="-1" className="scroll-mt-24 border border-[#0A2A57]/15 bg-white p-6 outline-none lg:sticky lg:top-28">
              {selected ? (
                <>
                  <div className="eyebrow text-[#A67C00]">Classificação selecionada</div>
                  <div className="mt-3 flex flex-wrap items-center gap-3"><h2 className="font-serif text-3xl text-[#0A2A57]">{selected.code}</h2><span className="border border-[#D4AF37]/50 px-2 py-1 text-xs font-semibold text-[#A67C00]">CST {selected.cst}</span></div>
                  <p className="mt-4 text-[#0A2A57] font-semibold leading-6">{selected.name}</p>
                  {selected.description && selected.description !== selected.name && <p className="mt-4 text-sm leading-6 text-[#555]">{selected.description}</p>}
                  <dl className="mt-6 space-y-3 border-t border-[#0A2A57]/10 pt-5 text-sm">
                    <div><dt className="text-[#777]">Tipo de alíquota</dt><dd className="mt-1 font-semibold text-[#0A2A57]">{selected.rateType || "Não informado"}</dd></div>
                    <div><dt className="text-[#777]">Redução IBS / CBS</dt><dd className="mt-1 font-semibold text-[#0A2A57]">{selected.reductionIbs || "0"}% / {selected.reductionCbs || "0"}%</dd></div>
                    <div><dt className="text-[#777]">Vigência</dt><dd className="mt-1 font-semibold text-[#0A2A57]">{formatDate(selected.validFrom)} a {formatDate(selected.validTo)}</dd></div>
                    {selected.legalReference && <div><dt className="text-[#777]">Referência legal</dt><dd className="mt-1 font-semibold text-[#0A2A57]">{selected.legalReference}</dd></div>}
                    {selected.creditFor && <div><dt className="text-[#777]">Crédito para</dt><dd className="mt-1 font-semibold text-[#0A2A57]">{selected.creditFor}</dd></div>}
                  </dl>
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    <Flag label="NF-e" value={selected.nfe} /><Flag label="NFC-e" value={selected.nfce} /><Flag label="CT-e" value={selected.cte} /><Flag label="NFS-e" value={selected.nfse} />
                  </div>
                  {selected.legalUrl && <a href={selected.legalUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0A2A57] hover:text-[#A67C00] underline underline-offset-4"><ExternalLink size={15} /> Consultar dispositivo legal</a>}
                </>
              ) : (
                <div className="py-8 text-center"><TableProperties size={30} className="mx-auto text-[#D4AF37]" /><h2 className="mt-4 font-serif text-2xl text-[#0A2A57]">Selecione uma classificação</h2><p className="mt-3 text-sm leading-6 text-[#555]">Os detalhes técnicos, vigência e referência legal serão exibidos aqui.</p></div>
              )}
            </aside>
          </div>

          <div className="mt-12 border-l-2 border-[#D4AF37] bg-[#F7F7F4] px-6 py-5 text-sm leading-7 text-[#555]">
            Esta é uma referência de consulta baseada na planilha oficial do Portal Nacional da NF-e. A classificação aplicável depende do documento, operação, regime e regras vigentes; não substitui validação técnica, fiscal ou a fonte oficial atualizada.
          </div>
        </div>
      </section>
    </div>
  );
}
