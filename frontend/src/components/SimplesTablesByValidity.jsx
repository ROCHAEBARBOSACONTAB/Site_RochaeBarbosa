import React, { useMemo } from "react";
import { CalendarDays } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const periods = ["2026", "2027", "2028", "2029", "2030", "2031", "2032", "2033"];

const labels = {
  faixa: "Faixa",
  receita: "Receita Bruta em 12 meses",
  aliquota: "Alíquota",
  deducao: "Parcela a deduzir",
  irpj: "IRPJ",
  csll: "CSLL",
  cofins: "Cofins",
  pis: "PIS/Pasep",
  cbs: "CBS",
  cpp: "CPP",
  icms: "ICMS",
  iss: "ISS",
  ipi: "IPI",
  ibs: "IBS",
};

function Table({ columns, rows, label }) {
  return (
    <div>
      <p className="mb-2 text-xs leading-5 text-[#666] md:hidden">
        Deslize a tabela para ver todas as colunas.
      </p>
      <div className="overflow-x-auto border border-[#0A2A57]/10 bg-white">
      <table aria-label={label} className="w-full min-w-[640px] text-sm text-[#0A2A57]">
        <thead className="bg-[#0A2A57] text-white">
          <tr>
            {columns.map((column) => (
              <th key={column} className="p-4 text-left font-semibold">
                {labels[column]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.faixa} className="border-t border-[#0A2A57]/10">
              {columns.map((column) => (
                <td
                  key={column}
                  className={`p-4 align-top ${column === "faixa" ? "font-medium" : ""}`}
                >
                  {row[column]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default function SimplesTablesByValidity({ annexPath, current, periods: futurePeriods }) {
  const { vigencia } = useParams();
  const selectedPeriod = periods.includes(vigencia) ? vigencia : "2026";

  const content = useMemo(() => {
    if (selectedPeriod === "2026") {
      return {
        validity: "Até 31/12/2026",
        aliquotas: current.aliquotas,
        reparticao: current.reparticao,
        aliquotaColumns: ["faixa", "receita", "aliquota", "deducao"],
        reparticaoColumns: current.reparticaoColumns,
      };
    }

    const period = futurePeriods[selectedPeriod];
    return {
      ...period,
      aliquotaColumns: ["faixa", "receita", "aliquota", "deducao"],
      reparticaoColumns: ["faixa", ...period.columns],
    };
  }, [current, futurePeriods, selectedPeriod]);

  return (
    <section aria-label="Tabelas do Simples Nacional por vigência" className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="border-l-2 border-[#D4AF37] pl-4">
          <p className="eyebrow text-[#B8912E]">Tabelas por vigência</p>
          <h2 className="mt-2 font-serif text-3xl text-[#0A2A57]">
            Anexos do Simples Nacional
          </h2>
        </div>

        <div className="mt-8 border border-[#0A2A57]/10 bg-[#FCFBF7] p-5 lg:p-6">
          <div className="flex gap-3">
            <CalendarDays className="mt-0.5 shrink-0 text-[#B8912E]" size={20} aria-hidden="true" />
            <div>
              <p className="font-serif text-xl text-[#0A2A57]">
                Vigência: {content.validity}
              </p>
              <p className="mt-2 text-sm leading-[1.7] text-[#555]">
                Cada vigência possui uma página própria, com link compartilhável
                e referência técnica para consulta.
              </p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Selecionar vigência">
            {periods.map((period) => {
              const active = selectedPeriod === period;
              return (
                <Link
                  key={period}
                  to={`${annexPath}/${period}`}
                  aria-current={active ? "page" : undefined}
                  className={`border px-3 py-2 text-sm font-semibold transition ${
                    active
                      ? "border-[#D4AF37] bg-[#0A2A57] text-white"
                      : "border-[#0A2A57]/15 bg-white text-[#0A2A57] hover:border-[#D4AF37]"
                  }`}
                >
                  {period === "2026" ? "Até 2026" : period === "2033" ? "2033+" : period}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="font-serif text-2xl text-[#0A2A57] mb-4">Tabela de alíquotas</h3>
          <p className="mb-7 text-[#555] leading-[1.8]">
            Faixas de receita bruta acumulada dos últimos 12 meses, alíquota
            nominal e parcela a deduzir aplicáveis ao período selecionado.
          </p>
          <Table
            columns={content.aliquotaColumns}
            rows={content.aliquotas}
            label="Tabela de alíquotas do Simples Nacional"
          />
        </div>

        <div className="mt-16">
          <h3 className="font-serif text-2xl text-[#0A2A57] mb-4">
            Percentual de repartição dos tributos
          </h3>
          <p className="mb-7 text-[#555] leading-[1.8]">
            A repartição indica a composição do recolhimento no DAS conforme o
            período de vigência selecionado.
          </p>
          <Table
            columns={content.reparticaoColumns}
            rows={content.reparticao}
            label="Tabela de percentual de repartição dos tributos"
          />
          {content.note && (
            <p className="mt-5 text-sm leading-[1.7] text-[#666]">{content.note}</p>
          )}
        </div>
      </div>
    </section>
  );
}
