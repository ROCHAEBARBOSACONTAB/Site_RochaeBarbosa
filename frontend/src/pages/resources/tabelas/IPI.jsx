import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Download } from "lucide-react";

const TABLE_HEAD_BG = "#0A2A57";

const TIPI_URL =
  "https://www.gov.br/receitafederal/pt-br/acesso-a-informacao/legislacao/documentos-e-arquivos/tipi.pdf";

const cstEntrada = [
  { codigo: "00", descricao: "Entrada com recuperação de crédito." },
  { codigo: "01", descricao: "Entrada tributada com alíquota zero." },
  { codigo: "02", descricao: "Entrada isenta." },
  { codigo: "03", descricao: "Entrada não tributada." },
  { codigo: "04", descricao: "Entrada imune." },
  { codigo: "05", descricao: "Entrada com suspensão." },
  { codigo: "49", descricao: "Outras entradas." },
];

const cstSaida = [
  { codigo: "50", descricao: "Saída tributada." },
  { codigo: "51", descricao: "Saída tributada com alíquota zero." },
  { codigo: "52", descricao: "Saída isenta." },
  { codigo: "53", descricao: "Saída não tributada." },
  { codigo: "54", descricao: "Saída imune." },
  { codigo: "55", descricao: "Saída com suspensão." },
  { codigo: "99", descricao: "Outras saídas." },
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

export default function IPI() {
  return (
    <div data-testid="tabela-ipi-page" className="bg-white">
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Tabelas Fiscais · IPI
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
            CST do IPI e TIPI
          </h1>

          <p className="mt-6 text-white/75 text-lg leading-[1.8]">
            Tabela de Código de Situação Tributária do IPI e acesso à TIPI
            oficial da Receita Federal para consulta de NCM e alíquotas.
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

      {/* DOWNLOAD TIPI */}
      <section className="py-14 bg-[#F7F7F4]">
        <div className="max-w-[900px] mx-auto px-6">
          <a
            href={TIPI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block border border-[#D4AF37]/40 bg-white p-7 hover:shadow-lg transition group"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="eyebrow text-[#D4AF37] mb-3">
                  Download oficial
                </div>

                <h2 className="font-serif text-3xl text-[#0A2A57] mb-3">
                  TIPI — Tabela de Incidência do IPI
                </h2>

                <p className="text-[#555] leading-[1.8] max-w-[680px]">
                  Acesse o PDF oficial da Receita Federal para consulta da TIPI,
                  com NCM, descrições e alíquotas do IPI.
                </p>
              </div>

              <div className="w-14 h-14 border border-[#D4AF37] flex items-center justify-center text-[#D4AF37] group-hover:bg-[#0A2A57] transition shrink-0">
                <Download size={24} />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* LEITURA TÉCNICA */}
      <section className="py-14 bg-white">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="border border-[#D4AF37]/40 bg-[#F7F7F4] p-7">
            <div className="eyebrow text-[#D4AF37] mb-3">Leitura técnica</div>
            <p className="text-[#0A2A57] font-serif text-xl leading-[1.6]">
              O CST do IPI indica o tratamento tributário da operação na entrada
              ou saída. Já a TIPI deve ser consultada para verificar a incidência
              e a alíquota do IPI por classificação fiscal do produto.
            </p>
          </div>
        </div>
      </section>

      {/* CST ENTRADA */}
      <section className="py-20 bg-[#F7F7F4]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            CST de entrada — IPI
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            Códigos utilizados para identificar o tratamento tributário do IPI em
            operações de entrada.
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

      {/* CST SAÍDA */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            CST de saída — IPI
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            Códigos utilizados para identificar o tratamento tributário do IPI em
            operações de saída.
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

      {/* ERROS COMUNS */}
      <section className="py-16 bg-[#F7F7F4]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Erros comuns
          </h2>

          <ul className="space-y-3 text-[#555] leading-[1.8]">
            <li>
              • Confundir CST de entrada com CST de saída na parametrização fiscal.
            </li>
            <li>
              • Definir CST do IPI sem validar NCM, TIPI e incidência do produto.
            </li>
            <li>
              • Tratar alíquota zero, isenção, não tributação, imunidade e
              suspensão como situações equivalentes.
            </li>
            <li>
              • Parametrizar TES ou regra fiscal sem validar CST do IPI, CFOP,
              NCM e natureza da operação em conjunto.
            </li>
            <li>
              • Utilizar tabela desatualizada da TIPI para produtos com alterações
              normativas recentes.
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
              href={TIPI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
            >
              <div className="font-serif text-[#0A2A57] text-lg mb-2">
                TIPI — Receita Federal
              </div>
              <p className="text-[#666] leading-[1.6]">
                Tabela oficial de incidência do IPI por classificação fiscal.
              </p>
            </a>

            <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/decreto/d11158.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
            >
              <div className="font-serif text-[#0A2A57] text-lg mb-2">
                Decreto nº 11.158/2022
              </div>
              <p className="text-[#666] leading-[1.6]">
                Aprova a Tabela de Incidência do IPI.
              </p>
            </a>

            <a
              href="https://www.planalto.gov.br/ccivil_03/decreto/2002/d4544.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
            >
              <div className="font-serif text-[#0A2A57] text-lg mb-2">
                RIPI
              </div>
              <p className="text-[#666] leading-[1.6]">
                Regulamento do IPI para análise da incidência e obrigações.
              </p>
            </a>

            <div className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5">
              <div className="font-serif text-[#0A2A57] text-lg mb-2">
                Atualização
              </div>
              <p className="text-[#666] leading-[1.6]">
                Atualização manual conforme alterações normativas.
              </p>
            </div>
          </div>

          <div className="mt-8 grid md:grid-cols-[1fr_260px] gap-8 items-start">
            <p className="text-[#666] text-sm leading-[1.7]">
              Esta página é referência de consulta e não substitui a validação
              técnica da operação. A aplicação correta do CST do IPI depende da
              classificação fiscal, TIPI, incidência do produto, natureza da
              operação, CFOP, regime tributário e parametrização do ERP.
            </p>
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