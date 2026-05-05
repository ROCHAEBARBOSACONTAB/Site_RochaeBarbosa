import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TABLE_HEAD_BG = "#0A2A57";

const origemMercadoria = [
  {
    codigo: "0",
    descricao:
      "Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8.",
  },
  {
    codigo: "1",
    descricao:
      "Estrangeira — importação direta, exceto a indicada no código 6.",
  },
  {
    codigo: "2",
    descricao:
      "Estrangeira — adquirida no mercado interno, exceto a indicada no código 7.",
  },
  {
    codigo: "3",
    descricao:
      "Nacional, mercadoria ou bem com conteúdo de importação superior a 40,00 % e igual ou inferior a 70,00 %.",
  },
  {
    codigo: "4",
    descricao:
      "Nacional, cuja produção tenha sido feita em conformidade com processos produtivos básicos aplicáveis.",
  },
  {
    codigo: "5",
    descricao:
      "Nacional, mercadoria ou bem com conteúdo de importação inferior ou igual a 40,00 %.",
  },
  {
    codigo: "6",
    descricao:
      "Estrangeira — importação direta, sem similar nacional, constante em lista da Camex, e gás natural.",
  },
  {
    codigo: "7",
    descricao:
      "Estrangeira — adquirida no mercado interno, sem similar nacional, constante em lista da Camex, e gás natural.",
  },
  {
    codigo: "8",
    descricao:
      "Nacional, mercadoria ou bem com conteúdo de importação superior a 70,00 %.",
  },
];

const tributacaoICMS = [
  { codigo: "00", descricao: "Tributada integralmente." },
  {
    codigo: "10",
    descricao:
      "Tributada e com cobrança do ICMS por substituição tributária.",
  },
  { codigo: "20", descricao: "Com redução de base de cálculo." },
  {
    codigo: "30",
    descricao:
      "Isenta ou não tributada e com cobrança do ICMS por substituição tributária.",
  },
  { codigo: "40", descricao: "Isenta." },
  { codigo: "41", descricao: "Não tributada." },
  { codigo: "50", descricao: "Suspensão." },
  { codigo: "51", descricao: "Diferimento." },
  {
    codigo: "60",
    descricao: "ICMS cobrado anteriormente por substituição tributária.",
  },
  {
    codigo: "70",
    descricao:
      "Com redução de base de cálculo e cobrança do ICMS por substituição tributária.",
  },
  { codigo: "90", descricao: "Outras." },
];

const crt = [
  { codigo: "1", descricao: "Simples Nacional." },
  {
    codigo: "2",
    descricao:
      "Simples Nacional — excesso de sublimite da receita bruta.",
  },
  { codigo: "3", descricao: "Regime normal." },
];

const csosn = [
  {
    codigo: "101",
    descricao:
      "Tributada pelo Simples Nacional com permissão de crédito.",
  },
  {
    codigo: "102",
    descricao:
      "Tributada pelo Simples Nacional sem permissão de crédito.",
  },
  {
    codigo: "103",
    descricao:
      "Isenção do ICMS no Simples Nacional para faixa de receita bruta.",
  },
  {
    codigo: "201",
    descricao:
      "Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por substituição tributária.",
  },
  {
    codigo: "202",
    descricao:
      "Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por substituição tributária.",
  },
  {
    codigo: "203",
    descricao:
      "Isenção do ICMS no Simples Nacional para faixa de receita bruta e com cobrança do ICMS por substituição tributária.",
  },
  { codigo: "300", descricao: "Imune." },
  { codigo: "400", descricao: "Não tributada pelo Simples Nacional." },
  {
    codigo: "500",
    descricao:
      "ICMS cobrado anteriormente por substituição tributária, na condição de substituído, ou por antecipação.",
  },
  { codigo: "900", descricao: "Outros." },
];

const cstConsolidado = [
  {
    tributacao: "Tributada integralmente",
    codigos: "000, 100, 200, 300, 400, 500, 600, 700, 800",
  },
  {
    tributacao: "Tributada e com cobrança do ICMS por substituição tributária",
    codigos: "010, 110, 210, 310, 410, 510, 610, 710, 810",
  },
  {
    tributacao: "Com redução de base de cálculo",
    codigos: "020, 120, 220, 320, 420, 520, 620, 720, 820",
  },
  {
    tributacao:
      "Isenta ou não tributada e com cobrança do ICMS por substituição tributária",
    codigos: "030, 130, 230, 330, 430, 530, 630, 730, 830",
  },
  {
    tributacao: "Isenta",
    codigos: "040, 140, 240, 340, 440, 540, 640, 740, 840",
  },
  {
    tributacao: "Não tributada",
    codigos: "041, 141, 241, 341, 441, 541, 641, 741, 841",
  },
  {
    tributacao: "Suspensão",
    codigos: "050, 150, 250, 350, 450, 550, 650, 750, 850",
  },
  {
    tributacao: "Diferimento",
    codigos: "051, 151, 251, 351, 451, 551, 651, 751, 851",
  },
  {
    tributacao: "ICMS cobrado anteriormente por substituição tributária",
    codigos: "060, 260, 360, 460, 560, 760, 860",
  },
  {
    tributacao:
      "Com redução de base de cálculo e cobrança do ICMS por substituição tributária",
    codigos: "070, 270, 370, 470, 570, 770, 870",
  },
  {
    tributacao: "Outras",
    codigos: "090, 190, 290, 390, 490, 590, 690, 790, 890",
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

export default function ICMS() {
  return (
    <div data-testid="tabela-icms-page" className="bg-white">
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Tabelas Fiscais · ICMS
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
            CST e CSOSN do ICMS
          </h1>

          <p className="mt-6 text-white/75 text-lg leading-[1.8]">
            Tabelas de origem, tributação, CST consolidado, CRT e CSOSN para
            consulta fiscal e parametrização operacional.
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

      {/* DIFERENÇA CST E CSOSN */}
      <section className="py-14 bg-[#F7F7F4]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="border border-[#D4AF37]/40 bg-white p-7">
            <div className="eyebrow text-[#D4AF37] mb-3">Leitura técnica</div>
            <p className="text-[#0A2A57] font-serif text-xl leading-[1.6]">
              CST é utilizado para indicar a origem e a tributação do ICMS em
              operações de contribuintes fora do Simples Nacional. Já o CSOSN é
              utilizado nas operações do Simples Nacional quando o CRT for igual a
              1, substituindo a tributação do ICMS por CST na NF-e.
            </p>
          </div>
        </div>
      </section>

      {/* TABELA A */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            Tabela A — Origem da mercadoria ou serviço
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            A primeira posição do CST indica a origem da mercadoria ou serviço.
            Essa informação compõe o código completo do CST do ICMS.
          </p>

          <TableBox
            columns={[
              { key: "codigo", label: "Código" },
              { key: "descricao", label: "Descrição" },
            ]}
            rows={origemMercadoria}
          />
        </div>
      </section>

      {/* TABELA B */}
      <section className="py-20 bg-[#F7F7F4]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            Tabela B — Tributação pelo ICMS
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            As duas últimas posições do CST indicam a forma de tributação do ICMS
            na operação.
          </p>

          <TableBox
            columns={[
              { key: "codigo", label: "Código" },
              { key: "descricao", label: "Descrição" },
            ]}
            rows={tributacaoICMS}
          />
        </div>
      </section>

      {/* CST CONSOLIDADO */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            Tabela consolidada de CST ICMS
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            O CST completo combina a origem da mercadoria com a tributação do
            ICMS. Exemplo: origem 0 + tributação 40 = CST 040.
          </p>

          <TableBox
            columns={[
              { key: "tributacao", label: "Tributação pelo ICMS" },
              { key: "codigos", label: "Códigos CST possíveis" },
            ]}
            rows={cstConsolidado}
          />
        </div>
      </section>

      {/* CRT */}
      <section className="py-20 bg-[#F7F7F4]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            CRT — Código de Regime Tributário
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            O CRT identifica o regime tributário do emitente e influencia a
            utilização de CST ou CSOSN na emissão da NF-e.
          </p>

          <TableBox
            columns={[
              { key: "codigo", label: "Código" },
              { key: "descricao", label: "Descrição" },
            ]}
            rows={crt}
          />
        </div>
      </section>

      {/* CSOSN */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            CSOSN — Código de Situação da Operação no Simples Nacional
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            O CSOSN é utilizado na NF-e para contribuintes optantes pelo Simples
            Nacional quando o CRT for igual a 1.
          </p>

          <TableBox
            columns={[
              { key: "codigo", label: "Código" },
              { key: "descricao", label: "Descrição" },
            ]}
            rows={csosn}
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
              • Confundir CST com CSOSN em empresas optantes pelo Simples Nacional.
            </li>
            <li>
              • Utilizar CSOSN quando o CRT não corresponde ao Simples Nacional.
            </li>
            <li>
              • Informar origem incorreta da mercadoria na primeira posição do CST.
            </li>
            <li>
              • Usar CST 060 para operação que não possui ICMS-ST cobrado
              anteriormente.
            </li>
            <li>
              • Parametrizar TES, natureza de operação ou cadastro de produto sem
              validar CST/CSOSN, CFOP e regime tributário em conjunto.
            </li>
          </ul>
        </div>
      </section>

    {/* BASE LEGAL */}
        <section className="py-14 bg-white border-t border-[#0A2A57]/10">
        <div className="max-w-[1000px] mx-auto px-6">
            <div className="eyebrow text-[#D4AF37] mb-4">
            Base legal
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 text-sm">

        {/* CONVÊNIO SINIEF */}
        <a
            href="https://www.confaz.fazenda.gov.br/legislacao/ajustes/sinief/cvsn_70"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
        >
            <div className="font-serif text-[#0A2A57] text-lg mb-2">
            Convênio SINIEF s/nº/1970
            </div>
            <p className="text-[#666] leading-[1.6]">
            Define a estrutura do CST e sua aplicação nas operações com ICMS.
            </p>
        </a>

        {/* AJUSTE SINIEF 07/2005 */}
        <a
            href="https://www.confaz.fazenda.gov.br/legislacao/ajustes/2005/AJ007_05"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
        >
            <div className="font-serif text-[#0A2A57] text-lg mb-2">
            Ajuste SINIEF 07/2005
            </div>
            <p className="text-[#666] leading-[1.6]">
            Regula a emissão da NF-e e o uso de CST, CRT e CSOSN no documento fiscal.
            </p>
        </a>

        {/* AJUSTE SINIEF 39/2023 */}
        <a
            href="https://www.confaz.fazenda.gov.br/legislacao/ajustes/2023/ajuste-sinief-39-23"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
        >
            <div className="font-serif text-[#0A2A57] text-lg mb-2">
            Ajuste SINIEF 39/2023
            </div>
            <p className="text-[#666] leading-[1.6]">
            Atualiza descrições e regras aplicáveis aos códigos CSOSN.
            </p>
        </a>

        {/* RICMS SP */}
        <a
            href="https://legislacao.fazenda.sp.gov.br/Paginas/art598.aspx"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
        >
            <div className="font-serif text-[#0A2A57] text-lg mb-2">
            Art. 598 do RICMS/SP
            </div>
            <p className="text-[#666] leading-[1.6]">
            Consolida a aplicação do CST no âmbito estadual de São Paulo.
            </p>
        </a>

        </div>

            <div className="mt-8 grid md:grid-cols-[1fr_260px] gap-8 items-start">
            <p className="text-[#666] text-sm leading-[1.7]">
                Esta página é referência de consulta e não substitui a validação técnica
                da operação. A aplicação correta do CST ou CSOSN depende do regime
                tributário, CFOP, natureza da operação, produto, benefício fiscal,
                substituição tributária, regras da NF-e e parametrização do ERP.
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