import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TABLE_HEAD_BG = "#0A2A57";

const aliquotas = [
  {
    faixa: "1ª Faixa",
    receita: "Até R$ 180.000,00",
    aliquota: "4,00 %",
    deducao: "R$ 0,00",
  },
  {
    faixa: "2ª Faixa",
    receita: "De R$ 180.000,01 a R$ 360.000,00",
    aliquota: "7,30 %",
    deducao: "R$ 5.940,00",
  },
  {
    faixa: "3ª Faixa",
    receita: "De R$ 360.000,01 a R$ 720.000,00",
    aliquota: "9,50 %",
    deducao: "R$ 13.860,00",
  },
  {
    faixa: "4ª Faixa",
    receita: "De R$ 720.000,01 a R$ 1.800.000,00",
    aliquota: "10,70 %",
    deducao: "R$ 22.500,00",
  },
  {
    faixa: "5ª Faixa",
    receita: "De R$ 1.800.000,01 a R$ 3.600.000,00",
    aliquota: "14,30 %",
    deducao: "R$ 87.300,00",
  },
  {
    faixa: "6ª Faixa",
    receita: "De R$ 3.600.000,01 a R$ 4.800.000,00",
    aliquota: "19,00 %",
    deducao: "R$ 378.000,00",
  },
];

const reparticao = [
  {
    faixa: "1ª Faixa",
    irpj: "5,50 %",
    csll: "3,50 %",
    cofins: "12,74 %",
    pis: "2,76 %",
    cpp: "41,50 %",
    icms: "34,00 %",
  },
  {
    faixa: "2ª Faixa",
    irpj: "5,50 %",
    csll: "3,50 %",
    cofins: "12,74 %",
    pis: "2,76 %",
    cpp: "41,50 %",
    icms: "34,00 %",
  },
  {
    faixa: "3ª Faixa",
    irpj: "5,50 %",
    csll: "3,50 %",
    cofins: "12,74 %",
    pis: "2,76 %",
    cpp: "42,00 %",
    icms: "33,50 %",
  },
  {
    faixa: "4ª Faixa",
    irpj: "5,50 %",
    csll: "3,50 %",
    cofins: "12,74 %",
    pis: "2,76 %",
    cpp: "42,00 %",
    icms: "33,50 %",
  },
  {
    faixa: "5ª Faixa",
    irpj: "5,50 %",
    csll: "3,50 %",
    cofins: "12,74 %",
    pis: "2,76 %",
    cpp: "42,00 %",
    icms: "33,50 %",
  },
  {
    faixa: "6ª Faixa",
    irpj: "13,50 %",
    csll: "10,00 %",
    cofins: "28,27 %",
    pis: "6,13 %",
    cpp: "42,10 %",
    icms: "–",
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
                    col.key === "faixa" ? "font-medium text-[#0A2A57]" : ""
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

export default function Anexo1() {
  return (
    <div data-testid="anexo1-page" className="bg-white">
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Simples Nacional · Anexo I
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
            Anexo I — Comércio
          </h1>

          <p className="mt-6 text-white/75 text-lg leading-[1.8]">
            Tabela de alíquotas, repartição dos tributos e aplicação prática para
            empresas comerciais optantes pelo Simples Nacional.
          </p>

          <Link
            to="/recursos/simples-nacional"
            className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.16em] text-[#E6C96A] hover:text-white transition"
          >
            <ArrowLeft size={15} />
            Voltar para Simples Nacional
          </Link>
        </div>
      </section>

      {/* LEITURA TÉCNICA */}
      <section className="py-14 bg-[#F7F7F4]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="border border-[#D4AF37]/40 bg-white p-7">
            <div className="eyebrow text-[#D4AF37] mb-3">Leitura técnica</div>

            <p className="text-[#0A2A57] font-serif text-xl leading-[1.6]">
              O Anexo I do Simples Nacional é aplicado às receitas de comércio.
              A tabela apresenta a alíquota nominal e a parcela a deduzir, mas a
              tributação efetiva depende da receita bruta acumulada nos últimos
              12 meses e da correta segregação das receitas.
            </p>
          </div>
        </div>
      </section>

      {/* TABELA DE ALÍQUOTAS */}
      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            Tabela de alíquotas
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            Faixas de receita bruta acumulada dos últimos 12 meses, com alíquota
            nominal e parcela a deduzir aplicáveis ao Anexo I.
          </p>

          <TableBox
            columns={[
              { key: "faixa", label: "Faixa" },
              { key: "receita", label: "Receita Bruta em 12 meses" },
              { key: "aliquota", label: "Alíquota" },
              { key: "deducao", label: "Parcela a deduzir" },
            ]}
            rows={aliquotas}
          />
        </div>
      </section>

      {/* REPARTIÇÃO DOS TRIBUTOS */}
      <section className="py-20 bg-[#F7F7F4]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            Percentual de repartição dos tributos
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            A repartição indica como a arrecadação do DAS é distribuída entre os
            tributos que compõem o Simples Nacional no Anexo I.
          </p>

          <TableBox
            columns={[
              { key: "faixa", label: "Faixa" },
              { key: "irpj", label: "IRPJ" },
              { key: "csll", label: "CSLL" },
              { key: "cofins", label: "Cofins" },
              { key: "pis", label: "PIS/Pasep" },
              { key: "cpp", label: "CPP" },
              { key: "icms", label: "ICMS" },
            ]}
            rows={reparticao}
          />

          <p className="mt-5 text-[#666] text-sm leading-[1.7]">
            Atenção: na 6ª faixa do Anexo I não há repartição para ICMS na tabela
            acima. A análise prática deve considerar o enquadramento, a
            segregação de receitas e a operação realizada.
          </p>
        </div>
      </section>

      {/* FÓRMULA */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Estrutura da alíquota efetiva
          </h2>

          <div className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-7">
            <p className="text-[#0A2A57] font-serif text-xl leading-[1.7]">
              Alíquota efetiva = [(RBT12 × alíquota nominal) - parcela a deduzir]
              ÷ RBT12
            </p>
          </div>

          <p className="text-[#555] leading-[1.8] mt-6">
            A fórmula demonstra a estrutura legal da alíquota efetiva. A apuração
            correta depende da segregação das receitas, natureza da operação,
            tributação específica dos produtos e demais regras aplicáveis ao caso
            concreto.
          </p>
        </div>
      </section>

      {/* INTERPRETAÇÃO */}
      <section className="py-16 bg-[#F7F7F4]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Interpretação prática
          </h2>

          <p className="text-[#555] leading-[1.8]">
            A alíquota apresentada na tabela não representa, isoladamente, o
            percentual efetivo pago pela empresa. O cálculo do Simples Nacional
            considera a receita bruta acumulada dos últimos 12 meses e aplica a
            fórmula da alíquota efetiva, reduzida pela parcela a deduzir.
          </p>
        </div>
      </section>

      {/* QUANDO USAR */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Quando utilizar o Anexo I
          </h2>

          <ul className="space-y-3 text-[#555] leading-[1.8]">
            <li>• Empresas com atividade principal de comércio.</li>
            <li>• Revenda de mercadorias sem transformação industrial.</li>
            <li>• Operações com circulação de mercadorias sujeitas ao ICMS.</li>
          </ul>
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
              • Aplicar a alíquota nominal da tabela diretamente, sem calcular a
              alíquota efetiva.
            </li>
            <li>
              • Utilizar o Anexo I para receitas que deveriam ser segregadas em
              outros anexos.
            </li>
            <li>
              • Não considerar corretamente a receita bruta acumulada dos últimos
              12 meses.
            </li>
            <li>
              • Ignorar a repartição dos tributos na análise gerencial da carga
              tributária.
            </li>
          </ul>
        </div>
      </section>

      {/* BASE LEGAL */}
      <section className="py-14 bg-white border-t border-[#0A2A57]/10">
        <div className="max-w-[1000px] mx-auto px-6">
          <div className="eyebrow text-[#D4AF37] mb-4">Base legal</div>

          <div className="grid md:grid-cols-2 gap-5 text-sm">
            <a
              href="https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[#0A2A57]/10 bg-[#F7F7F4] p-5 hover:shadow-md transition"
            >
              <div className="font-serif text-[#0A2A57] text-lg mb-2">
                Lei Complementar nº 123/2006
              </div>
              <p className="text-[#666] leading-[1.6]">
                Institui o Simples Nacional e define as regras dos anexos.
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
              técnica da operação. A correta aplicação do Simples Nacional depende
              da atividade, segregação de receitas, enquadramento tributário,
              receita acumulada e análise do cenário real.
            </p>
          </div>

          <Link
            to="/recursos/simples-nacional"
            className="inline-flex items-center gap-2 mt-8 text-sm uppercase tracking-[0.16em] text-[#0A2A57] hover:text-[#D4AF37] transition"
          >
            <ArrowLeft size={15} />
            Voltar para Simples Nacional
          </Link>
        </div>
      </section>
    </div>
  );
}