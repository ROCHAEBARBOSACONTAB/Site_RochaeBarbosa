import React from "react";
import { ExternalLink } from "lucide-react";

const references = [
  {
    title: "Lei Complementar nº 123/2006",
    description:
      "Institui o Simples Nacional e estabelece as regras gerais, os anexos e a sistemática de apuração aplicável até 2026.",
    href: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm",
  },
  {
    title: "Resolução CGSN nº 140/2018",
    description:
      "Regulamenta a apuração, a segregação de receitas e os procedimentos operacionais do Simples Nacional, em sua redação consolidada.",
    href: "https://normas.receita.fazenda.gov.br/sijut2consulta/link.action?idAto=92278",
  },
  {
    title: "Lei Complementar nº 214/2025",
    description:
      "Institui a regulamentação da Reforma Tributária do consumo. Deve ser lida em conjunto com a legislação específica do Simples Nacional e os atos regulamentares aplicáveis.",
    href: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp214compilado.htm",
  },
  {
    title: "Lei Complementar nº 227/2026",
    description:
      "Institui o Comitê Gestor do IBS (CGIBS) e promove alterações na legislação da Reforma Tributária e do Simples Nacional.",
    href: "https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp227.htm",
  },
  {
    title: "Resolução CGIBS nº 6/2026",
    description:
      "Regulamenta o IBS. É referência operacional da transição, sem substituir as tabelas de alíquotas previstas nos anexos legais.",
    href: "https://www.cgibs.gov.br/upload/arquivos/202604/30084927-res-cgibs-n-6-30-abr-2026-regulamenta-o-ibs.pdf",
  },
];

export default function SimplesLegalBasis({
  annexTitle,
  legalAnnex,
  surfaceClass = "bg-[#F7F7F4]",
}) {
  return (
    <>
      <p className="mb-6 max-w-[800px] text-sm leading-[1.7] text-[#666]">
        Referências normativas e operacionais utilizadas para a consulta do{" "}
        {annexTitle}. A tabela deve sempre ser lida conforme a vigência
        selecionada e a redação legal consolidada aplicável ao período.
      </p>

      <div className="mb-5 flex flex-wrap items-center justify-between gap-3 border-l-2 border-[#D4AF37] bg-[#FCFBF7] px-4 py-3 text-sm">
        <span className="font-medium text-[#0A2A57]">
          Consulta por vigência: {legalAnnex} do Simples Nacional
        </span>
        <span className="text-[#666]">Última revisão normativa: 24 de agosto de 2026</span>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 text-sm">
        {references.map((reference) => (
          <a
            key={reference.title}
            href={reference.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group border border-[#0A2A57]/10 ${surfaceClass} p-5 transition hover:shadow-md`}
          >
            <div className="flex items-start justify-between gap-3">
              <div className="font-serif text-lg text-[#0A2A57]">{reference.title}</div>
              <ExternalLink
                size={16}
                aria-hidden="true"
                className="mt-1 shrink-0 text-[#B8912E] transition group-hover:translate-x-0.5"
              />
            </div>
            <p className="mt-2 leading-[1.6] text-[#666]">{reference.description}</p>
          </a>
        ))}
      </div>

      <div className="mt-6 border border-[#0A2A57]/10 bg-white px-5 py-4 sm:px-6">
        <p className="eyebrow mb-2 text-[#B8912E]">Nota metodológica</p>
        <p className="text-sm leading-[1.7] text-[#666]">
          Conteúdo de referência. Não substitui a análise técnica do caso
          concreto, que considera RBT12, segregação de receitas, atividade
          exercida e regras aplicáveis.
        </p>
      </div>
    </>
  );
}
