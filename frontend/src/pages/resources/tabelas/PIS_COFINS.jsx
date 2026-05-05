import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TABLE_HEAD_BG = "#0A2A57";

const cstSaida = [
  {
    codigo: "01",
    descricao: "Operação tributável com alíquota básica.",
  },
  {
    codigo: "02",
    descricao: "Operação tributável com alíquota diferenciada.",
  },
  {
    codigo: "03",
    descricao:
      "Operação tributável com alíquota por unidade de medida de produto.",
  },
  {
    codigo: "04",
    descricao:
      "Operação tributável monofásica — revenda a alíquota zero.",
  },
  {
    codigo: "05",
    descricao: "Operação tributável por substituição tributária.",
  },
  {
    codigo: "06",
    descricao: "Operação tributável a alíquota zero.",
  },
  {
    codigo: "07",
    descricao: "Operação isenta da contribuição.",
  },
  {
    codigo: "08",
    descricao: "Operação sem incidência da contribuição.",
  },
  {
    codigo: "09",
    descricao: "Operação com suspensão da contribuição.",
  },
  {
    codigo: "49",
    descricao: "Outras operações de saída.",
  },
];

const cstCredito = [
  {
    codigo: "50",
    descricao:
      "Operação com direito a crédito — vinculada exclusivamente a receita tributada no mercado interno.",
  },
  {
    codigo: "51",
    descricao:
      "Operação com direito a crédito — vinculada exclusivamente a receita não tributada no mercado interno.",
  },
  {
    codigo: "52",
    descricao:
      "Operação com direito a crédito — vinculada exclusivamente a receita de exportação.",
  },
  {
    codigo: "53",
    descricao:
      "Operação com direito a crédito — vinculada a receitas tributadas e não tributadas no mercado interno.",
  },
  {
    codigo: "54",
    descricao:
      "Operação com direito a crédito — vinculada a receitas tributadas no mercado interno e de exportação.",
  },
  {
    codigo: "55",
    descricao:
      "Operação com direito a crédito — vinculada a receitas não tributadas no mercado interno e de exportação.",
  },
  {
    codigo: "56",
    descricao:
      "Operação com direito a crédito — vinculada a receitas tributadas e não tributadas no mercado interno e de exportação.",
  },
  {
    codigo: "60",
    descricao:
      "Crédito presumido — operação de aquisição vinculada exclusivamente a receita tributada no mercado interno.",
  },
  {
    codigo: "61",
    descricao:
      "Crédito presumido — operação de aquisição vinculada exclusivamente a receita não tributada no mercado interno.",
  },
  {
    codigo: "62",
    descricao:
      "Crédito presumido — operação de aquisição vinculada exclusivamente a receita de exportação.",
  },
  {
    codigo: "63",
    descricao:
      "Crédito presumido — operação de aquisição vinculada a receitas tributadas e não tributadas no mercado interno.",
  },
  {
    codigo: "64",
    descricao:
      "Crédito presumido — operação de aquisição vinculada a receitas tributadas no mercado interno e de exportação.",
  },
  {
    codigo: "65",
    descricao:
      "Crédito presumido — operação de aquisição vinculada a receitas não tributadas no mercado interno e de exportação.",
  },
  {
    codigo: "66",
    descricao:
      "Crédito presumido — operação de aquisição vinculada a receitas tributadas e não tributadas no mercado interno e de exportação.",
  },
  {
    codigo: "67",
    descricao: "Crédito presumido — outras operações.",
  },
];

const cstEntrada = [
  {
    codigo: "70",
    descricao: "Operação de aquisição sem direito a crédito.",
  },
  {
    codigo: "71",
    descricao: "Operação de aquisição com isenção.",
  },
  {
    codigo: "72",
    descricao: "Operação de aquisição com suspensão.",
  },
  {
    codigo: "73",
    descricao: "Operação de aquisição a alíquota zero.",
  },
  {
    codigo: "74",
    descricao: "Operação de aquisição sem incidência da contribuição.",
  },
  {
    codigo: "75",
    descricao: "Operação de aquisição por substituição tributária.",
  },
  {
    codigo: "98",
    descricao: "Outras operações de entrada.",
  },
  {
    codigo: "99",
    descricao: "Outras operações.",
  },
];

function TableBox({ columns, rows }) {
  return (
    <div className="overflow-x-auto border border-[#0A2A57]/10 bg-white">
      <table className="w-full text-sm text-[#0A2A57]">
        <thead style={{ backgroundColor: TABLE_HEAD_BG }} className="text-white">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className="p-4 text-left font-semibold">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, index) => (
            <tr key={index} className="border-t border-[#0A2A57]/10">
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={`p-4 align-top ${
                    col.key === "codigo" ? "font-medium text-[#0A2A57]" : ""
                  }`}
                >
                  {row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function PIS_COFINS() {
  return (
    <div data-testid="tabela-pis-cofins-page" className="bg-white">
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Tabelas Fiscais · PIS/COFINS
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
            CST de PIS/Pasep e Cofins
          </h1>

          <p className="mt-6 text-white/75 text-lg leading-[1.8]">
            Tabelas de Código de Situação Tributária para operações de saída,
            créditos, aquisições e demais operações envolvendo PIS/Pasep e Cofins.
          </p>

          <Link
            to="/recursos/tabelas"
            className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.16em] text-[#E6C96A] hover:text-white transition"
          >
            <ArrowLeft size={15} />
            Voltar para Tabelas Fiscais
          </Link>
        </div>
      </section>

      {/* LEITURA TÉCNICA */}
      <section className="py-14 bg-[#F7F7F4]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="border border-[#D4AF37]/40 bg-white p-7">
            <div className="eyebrow text-[#D4AF37] mb-3">Leitura técnica</div>
            <p className="text-[#0A2A57] font-serif text-xl leading-[1.6]">
              O CST de PIS/Pasep e Cofins indica o tratamento tributário da
              operação para fins de escrituração e apuração das contribuições. A
              escolha do código deve considerar o regime de apuração, a natureza
              da receita, a operação realizada e eventual direito a crédito.
            </p>
          </div>
        </div>
      </section>

      {/* SAÍDAS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            CST de saídas e receitas
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            Códigos normalmente utilizados em operações de saída, receitas ou
            situações de tributação, isenção, suspensão, alíquota zero e demais
            tratamentos aplicáveis às contribuições.
          </p>

          <TableBox
            columns={[
              { key: "codigo", label: "Código" },
              { key: "descricao", label: "Descrição" },
            ]}
            rows={cstSaida}
          />
        </div>
      </section>

      {/* CRÉDITOS */}
      <section className="py-20 bg-[#F7F7F4]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            CST de operações com direito a crédito
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            Códigos utilizados em aquisições ou operações com direito a crédito,
            incluindo créditos vinculados a receitas tributadas, não tributadas,
            exportações e situações de crédito presumido.
          </p>

          <TableBox
            columns={[
              { key: "codigo", label: "Código" },
              { key: "descricao", label: "Descrição" },
            ]}
            rows={cstCredito}
          />
        </div>
      </section>

      {/* ENTRADAS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            CST de entradas e aquisições sem crédito
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            Códigos utilizados em operações de aquisição sem direito a crédito ou
            com tratamento específico, como isenção, suspensão, alíquota zero, não
            incidência e substituição tributária.
          </p>

          <TableBox
            columns={[
              { key: "codigo", label: "Código" },
              { key: "descricao", label: "Descrição" },
            ]}
            rows={cstEntrada}
          />
        </div>
      </section>

      {/* ERROS COMUNS */}
      <section className="py-16 bg-[#F7F7F4]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Erros comuns
          </h2>

          <ul className="space-y-3 text-[#555] leading-[1.8]">
            <li>
              • Utilizar CST de saída em operações de entrada ou aquisição.
            </li>
            <li>
              • Informar CST com direito a crédito sem validar o regime de
              apuração e a natureza da operação.
            </li>
            <li>
              • Tratar operação monofásica, alíquota zero, isenção e suspensão
              como se fossem situações equivalentes.
            </li>
            <li>
              • Parametrizar produto ou TES sem validar CST, natureza da receita,
              CFOP e regra de crédito em conjunto.
            </li>
            <li>
              • Escriturar crédito de PIS/Cofins sem lastro operacional ou
              documentação compatível.
            </li>
          </ul>
        </div>
      </section>

      {/* BASE LEGAL */}
      <section className="py-14 bg-white border-t border-[#0A2A57]/10">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="eyebrow text-[#D4AF37] mb-4">Base legal</div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">
            <a
              href="https://sped.rfb.gov.br/item/show/1629"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
            >
              <div className="font-serif text-[#0A2A57] text-lg mb-2">
                Tabela 4.3.3 — CST-PIS
              </div>
              <p className="text-[#666] leading-[1.6]">
                Código da Situação Tributária referente ao PIS/Pasep.
              </p>
            </a>

            <a
              href="https://sped.rfb.gov.br/item/show/1630"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
            >
              <div className="font-serif text-[#0A2A57] text-lg mb-2">
                Tabela 4.3.4 — CST-Cofins
              </div>
              <p className="text-[#666] leading-[1.6]">
                Código da Situação Tributária referente à Cofins.
              </p>
            </a>

            <a
              href="https://sped.rfb.gov.br/item/show/1616"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
            >
              <div className="font-serif text-[#0A2A57] text-lg mb-2">
                Tabelas EFD-Contribuições
              </div>
              <p className="text-[#666] leading-[1.6]">
                Tabelas utilizadas na apuração de PIS/Pasep e Cofins.
              </p>
            </a>

            <a
              href="https://www.in.gov.br/en/web/dou/-/instrucao-normativa-rfb-n-2.121-de-15-de-dezembro-de-2022-452045866"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
            >
              <div className="font-serif text-[#0A2A57] text-lg mb-2">
                IN RFB nº 2.121/2022
              </div>
              <p className="text-[#666] leading-[1.6]">
                Consolida normas de apuração, cobrança e administração de PIS e
                Cofins.
              </p>
            </a>
          </div>

          <div className="mt-8 grid md:grid-cols-[1fr_260px] gap-8 items-start">
            <p className="text-[#666] text-sm leading-[1.7]">
              Esta página é referência de consulta e não substitui a validação
              técnica da operação. A aplicação correta do CST de PIS/Pasep e
              Cofins depende do regime de apuração, natureza da receita, operação
              realizada, direito a crédito, incidência monofásica, alíquota zero,
              suspensão, isenção e parametrização do ERP.
            </p>

            <div className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5">
              <div className="eyebrow text-[#D4AF37] mb-2">
                Atualização da página
              </div>
              <p className="text-[#666] text-sm leading-[1.6]">
                Atualização manual conforme alterações normativas.
              </p>
            </div>
          </div>

          <Link
            to="/recursos/tabelas"
            className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.16em] text-[#0A2A57] hover:text-[#D4AF37] transition"
          >
            <ArrowLeft size={15} />
            Voltar para Tabelas Fiscais
          </Link>
        </div>
      </section>
    </div>
  );
}