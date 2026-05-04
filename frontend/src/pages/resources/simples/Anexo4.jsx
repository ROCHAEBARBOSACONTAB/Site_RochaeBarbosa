import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TABLE_HEAD_BG = "#0A2A57";

const aliquotas = [
  {
    faixa: "1ª Faixa",
    receita: "Até R$ 180.000,00",
    aliquota: "4,50 %",
    deducao: "R$ 0,00",
  },
  {
    faixa: "2ª Faixa",
    receita: "De R$ 180.000,01 a R$ 360.000,00",
    aliquota: "9,00 %",
    deducao: "R$ 8.100,00",
  },
  {
    faixa: "3ª Faixa",
    receita: "De R$ 360.000,01 a R$ 720.000,00",
    aliquota: "10,20 %",
    deducao: "R$ 12.420,00",
  },
  {
    faixa: "4ª Faixa",
    receita: "De R$ 720.000,01 a R$ 1.800.000,00",
    aliquota: "14,00 %",
    deducao: "R$ 39.780,00",
  },
  {
    faixa: "5ª Faixa",
    receita: "De R$ 1.800.000,01 a R$ 3.600.000,00",
    aliquota: "22,00 %",
    deducao: "R$ 183.780,00",
  },
  {
    faixa: "6ª Faixa",
    receita: "De R$ 3.600.000,01 a R$ 4.800.000,00",
    aliquota: "33,00 %",
    deducao: "R$ 828.000,00",
  },
];

const reparticao = [
  {
    faixa: "1ª Faixa",
    irpj: "18,80 %",
    csll: "15,20 %",
    cofins: "17,67 %",
    pis: "3,83 %",
    cpp: "–",
    iss: "44,50 %",
  },
  {
    faixa: "2ª Faixa",
    irpj: "19,80 %",
    csll: "15,20 %",
    cofins: "20,55 %",
    pis: "4,45 %",
    cpp: "–",
    iss: "40,00 %",
  },
  {
    faixa: "3ª Faixa",
    irpj: "20,80 %",
    csll: "15,20 %",
    cofins: "19,73 %",
    pis: "4,27 %",
    cpp: "–",
    iss: "40,00 %",
  },
  {
    faixa: "4ª Faixa",
    irpj: "17,80 %",
    csll: "19,20 %",
    cofins: "18,90 %",
    pis: "4,10 %",
    cpp: "–",
    iss: "40,00 %",
  },
  {
    faixa: "5ª Faixa",
    irpj: "18,80 %",
    csll: "19,20 %",
    cofins: "18,08 %",
    pis: "3,92 %",
    cpp: "–",
    iss: "40,00 % (*)",
  },
  {
    faixa: "6ª Faixa",
    irpj: "53,50 %",
    csll: "21,50 %",
    cofins: "20,55 %",
    pis: "4,45 %",
    cpp: "–",
    iss: "–",
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
                  className={`p-4 ${
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

export default function Anexo4() {
  return (
    <div data-testid="anexo4-page" className="bg-white">
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Simples Nacional · Anexo IV
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
            Anexo IV — Serviços
          </h1>

          <p className="mt-6 text-white/75 text-lg leading-[1.8]">
            Tabela de alíquotas, repartição dos tributos e aplicação prática para
            atividades de serviços sujeitas ao Anexo IV do Simples Nacional.
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

      {/* ALERTA TÉCNICO */}
      <section className="py-12 bg-[#F7F7F4]">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="border border-[#D4AF37]/40 bg-white p-7">
            <div className="eyebrow text-[#D4AF37] mb-3">Ponto de atenção</div>
            <p className="text-[#0A2A57] font-serif text-xl leading-[1.6]">
              No Anexo IV, a CPP não compõe o DAS. A contribuição previdenciária
              patronal deve ser tratada fora do recolhimento unificado, conforme
              enquadramento e folha de pagamento da empresa.
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
            nominal e parcela a deduzir aplicáveis ao Anexo IV.
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
            tributos que compõem o Simples Nacional no Anexo IV.
          </p>

          <TableBox
            columns={[
              { key: "faixa", label: "Faixa" },
              { key: "irpj", label: "IRPJ" },
              { key: "csll", label: "CSLL" },
              { key: "cofins", label: "Cofins" },
              { key: "pis", label: "PIS/Pasep" },
              { key: "cpp", label: "CPP" },
              { key: "iss", label: "ISS" },
            ]}
            rows={reparticao}
          />

          <div className="mt-5 text-[#666] text-sm leading-[1.7] space-y-3">
            <p>
                Atenção: na 5ª faixa, o percentual de ISS possui observação específica conforme
                a tabela do Anexo IV. Na 6ª faixa não há repartição para ISS.
            </p>

            <p>
                Além disso, a CPP não compõe o DAS neste anexo, devendo ser tratada fora do
                recolhimento unificado.
            </p>

            <p>
                (*) O percentual efetivo máximo destinado ao ISS deve observar os limites
                definidos na legislação do Simples Nacional e regulamentações municipais aplicáveis.
            </p>
          </div>
          {/* TABELA DE APOIO - REGRA 5ª FAIXA */}
            <div className="mt-10">
            <h3 className="font-serif text-xl text-[#0A2A57] mb-4">
                Regra específica — 5ª faixa (alíquota efetiva superior a 12,5%)
            </h3>

            <div className="overflow-x-auto border border-[#0A2A57]/10 bg-white">
                <table className="w-full text-sm text-[#0A2A57]">
                
                <thead className="bg-[#0A2A57] text-white">
                    <tr>
                    <th className="p-4 text-left">Faixa</th>
                    <th className="p-4 text-left">ISS</th>
                    <th className="p-4 text-left">CSLL</th>
                    <th className="p-4 text-left">IRPJ</th>
                    <th className="p-4 text-left">Cofins</th>
                    <th className="p-4 text-left">PIS/Pasep</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-t border-[#0A2A57]/10">
                    <td className="p-4 font-medium">
                        5ª Faixa, com alíquota efetiva superior a 12,5%
                    </td>

                    <td className="p-4">
                        Percentual de ISS fixo em 5%
                    </td>

                    <td className="p-4">
                        (Alíquota efetiva -5% × 32,00 %)
                    </td>

                    <td className="p-4">
                        (Alíquota efetiva -5%  × 31,33 %)
                    </td>

                    <td className="p-4">
                        (Alíquota efetiva -5%  × 30,13 %)
                    </td>

                    <td className="p-4">
                        (Alíquota efetiva -5%  × 6,54 %)
                    </td>
                    </tr>
                </tbody>

                </table>
            </div>

            <p className="mt-4 text-[#666] text-sm leading-[1.7]">
            Quando a alíquota efetiva da 5ª faixa for superior a 12,5 %, o ISS fica
            limitado a 5 %. Os demais tributos são repartidos sobre o saldo da alíquota
            efetiva após a dedução desse percentual.
            </p>
            </div>
          
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
            A fórmula acima demonstra apenas a estrutura geral do cálculo da
            alíquota efetiva. A apuração correta depende da segregação das
            receitas, enquadramento da atividade, retenções, incidência do ISS e
            tratamento da CPP fora do DAS.
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
            O Anexo IV costuma exigir atenção superior aos demais anexos, pois a
            carga apresentada no DAS não representa toda a obrigação previdenciária
            da empresa. A análise deve considerar, além da receita e da atividade,
            a folha de pagamento, a CPP recolhida fora do DAS e eventuais retenções.
          </p>
        </div>
      </section>

      {/* QUANDO USAR */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Quando utilizar o Anexo IV
          </h2>

          <ul className="space-y-3 text-[#555] leading-[1.8]">
            <li>• Serviços de construção civil, conforme enquadramento aplicável.</li>
            <li>• Serviços de limpeza, conservação e vigilância.</li>
            <li>• Serviços advocatícios.</li>
            <li>
              • Outras atividades legalmente sujeitas ao Anexo IV do Simples
              Nacional.
            </li>
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
              • Tratar o DAS como se concentrasse toda a carga tributária e
              previdenciária da empresa.
            </li>
            <li>
              • Ignorar que a CPP deve ser calculada e recolhida fora do DAS.
            </li>
            <li>
              • Aplicar a alíquota nominal da tabela diretamente, sem calcular a
              alíquota efetiva.
            </li>
            <li>
              • Não avaliar retenções, folha de pagamento e segregação correta
              das receitas.
            </li>
            <li>
              • Confundir atividades de serviços dos Anexos III, IV e V.
            </li>
          </ul>
        </div>
      </section>

      {/* BASE LEGAL */}
      <section className="py-14 bg-white border-t border-[#0A2A57]/10">
        <div className="max-w-[900px] mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 text-sm text-[#666] leading-[1.7]">
            <div>
              <div className="eyebrow text-[#D4AF37] mb-2">Base legal</div>
              <a
                href="https://www.planalto.gov.br/ccivil_03/leis/lcp/lcp123.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0A2A57] hover:text-[#D4AF37] transition underline underline-offset-4"
              >
                Lei Complementar nº 123/2006
              </a>
            </div>

            <div>
              <div className="eyebrow text-[#D4AF37] mb-2">
                Atualização da página
              </div>
              <p>Atualizado em maio de 2026.</p>
            </div>
          </div>

          <p className="mt-8 text-[#666] text-sm leading-[1.7]">
            A correta aplicação do Simples Nacional depende da atividade,
            enquadramento, segregação de receitas, retenções, folha de pagamento e
            análise da operação. A tabela é referência de consulta e não substitui
            a validação técnica do caso concreto.
          </p>

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