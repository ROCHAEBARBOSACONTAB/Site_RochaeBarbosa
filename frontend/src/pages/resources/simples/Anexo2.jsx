import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TABLE_HEAD_BG = "#0A2A57";

const aliquotas = [
  { faixa: "1ª Faixa", receita: "Até R$ 180.000,00", aliquota: "4,50 %", deducao: "R$ 0,00" },
  { faixa: "2ª Faixa", receita: "De R$ 180.000,01 a R$ 360.000,00", aliquota: "7,80 %", deducao: "R$ 5.940,00" },
  { faixa: "3ª Faixa", receita: "De R$ 360.000,01 a R$ 720.000,00", aliquota: "10,00 %", deducao: "R$ 13.860,00" },
  { faixa: "4ª Faixa", receita: "De R$ 720.000,01 a R$ 1.800.000,00", aliquota: "11,20 %", deducao: "R$ 22.500,00" },
  { faixa: "5ª Faixa", receita: "De R$ 1.800.000,01 a R$ 3.600.000,00", aliquota: "14,70 %", deducao: "R$ 85.500,00" },
  { faixa: "6ª Faixa", receita: "De R$ 3.600.000,01 a R$ 4.800.000,00", aliquota: "30,00 %", deducao: "R$ 720.000,00" },
];

const reparticao = [
  { faixa: "1ª Faixa", irpj: "5,50 %", csll: "3,50 %", cofins: "11,51 %", pis: "2,49 %", cpp: "37,50 %", icms: "32,00 %", ipi: "7,50 %" },
  { faixa: "2ª Faixa", irpj: "5,50 %", csll: "3,50 %", cofins: "11,51 %", pis: "2,49 %", cpp: "37,50 %", icms: "32,00 %", ipi: "7,50 %" },
  { faixa: "3ª Faixa", irpj: "5,50 %", csll: "3,50 %", cofins: "11,51 %", pis: "2,49 %", cpp: "37,50 %", icms: "32,00 %", ipi: "7,50 %" },
  { faixa: "4ª Faixa", irpj: "5,50 %", csll: "3,50 %", cofins: "11,51 %", pis: "2,49 %", cpp: "37,50 %", icms: "32,00 %", ipi: "7,50 %" },
  { faixa: "5ª Faixa", irpj: "5,50 %", csll: "3,50 %", cofins: "11,51 %", pis: "2,49 %", cpp: "37,50 %", icms: "32,00 %", ipi: "7,50 %" },
  { faixa: "6ª Faixa", irpj: "8,50 %", csll: "7,50 %", cofins: "20,96 %", pis: "4,54 %", cpp: "23,50 %", icms: "–", ipi: "35,00 %" },
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

export default function Anexo2() {
  return (
    <div data-testid="anexo2-page" className="bg-white">
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Simples Nacional · Anexo II
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
            Anexo II — Indústria
          </h1>

          <p className="mt-6 text-white/75 text-lg leading-[1.8]">
            Tabela de alíquotas, repartição dos tributos e aplicação prática para
            empresas industriais optantes pelo Simples Nacional.
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

      <section className="py-14 bg-[#F7F7F4]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="border border-[#D4AF37]/40 bg-white p-7">
            <div className="eyebrow text-[#D4AF37] mb-3">Leitura técnica</div>
            <p className="text-[#0A2A57] font-serif text-xl leading-[1.6]">
              O Anexo II do Simples Nacional é aplicado às receitas decorrentes
              de industrialização. A análise deve considerar a atividade exercida,
              a segregação das receitas industriais e a presença de tributos como
              IPI e ICMS na composição da repartição.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            Tabela de alíquotas
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            Faixas de receita bruta acumulada dos últimos 12 meses, com alíquota
            nominal e parcela a deduzir aplicáveis ao Anexo II.
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

      <section className="py-20 bg-[#F7F7F4]">
        <div className="max-w-[1000px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-4">
            Percentual de repartição dos tributos
          </h2>

          <p className="text-[#555] leading-[1.8] mb-8 max-w-[760px]">
            A repartição indica como a arrecadação do DAS é distribuída entre os
            tributos que compõem o Simples Nacional no Anexo II.
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
              { key: "ipi", label: "IPI" },
            ]}
            rows={reparticao}
          />

          <p className="mt-5 text-[#666] text-sm leading-[1.7]">
            Atenção: na 6ª faixa do Anexo II não há repartição para ICMS na tabela
            acima. A análise prática deve considerar o enquadramento, a
            segregação de receitas e a operação realizada.
          </p>
        </div>
      </section>

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

      <section className="py-16 bg-[#F7F7F4]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Interpretação prática
          </h2>

          <p className="text-[#555] leading-[1.8]">
            O Anexo II é utilizado para receitas decorrentes de atividades
            industriais no Simples Nacional. A alíquota nominal da tabela não deve
            ser aplicada de forma isolada: a carga efetiva depende da receita
            bruta acumulada dos últimos 12 meses e da parcela a deduzir
            correspondente à faixa.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Quando utilizar o Anexo II
          </h2>

          <ul className="space-y-3 text-[#555] leading-[1.8]">
            <li>• Empresas com atividade industrial enquadrada no Simples Nacional.</li>
            <li>• Receitas decorrentes da industrialização de produtos.</li>
            <li>
              • Operações em que há transformação, beneficiamento, montagem,
              acondicionamento ou processo industrial aplicável.
            </li>
          </ul>
        </div>
      </section>

      <section className="py-16 bg-[#F7F7F4]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Erros comuns
          </h2>

          <ul className="space-y-3 text-[#555] leading-[1.8]">
            <li>• Aplicar a alíquota nominal da tabela diretamente, sem calcular a alíquota efetiva.</li>
            <li>• Confundir receita de comércio com receita de industrialização.</li>
            <li>• Não segregar corretamente receitas industriais, comerciais e de serviços.</li>
            <li>• Ignorar a presença do IPI na repartição do Anexo II.</li>
            <li>• Não avaliar particularidades de produtos com tributação específica, substituição tributária ou regimes monofásicos.</li>
          </ul>
        </div>
      </section>

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