import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TABLE_HEAD_BG = "#0A2A57";

const aliquotas = [
  { faixa: "1ª Faixa", receita: "Até R$ 180.000,00", aliquota: "6,00 %", deducao: "R$ 0,00" },
  { faixa: "2ª Faixa", receita: "De R$ 180.000,01 a R$ 360.000,00", aliquota: "11,20 %", deducao: "R$ 9.360,00" },
  { faixa: "3ª Faixa", receita: "De R$ 360.000,01 a R$ 720.000,00", aliquota: "13,50 %", deducao: "R$ 17.640,00" },
  { faixa: "4ª Faixa", receita: "De R$ 720.000,01 a R$ 1.800.000,00", aliquota: "16,00 %", deducao: "R$ 35.640,00" },
  { faixa: "5ª Faixa", receita: "De R$ 1.800.000,01 a R$ 3.600.000,00", aliquota: "21,00 %", deducao: "R$ 125.640,00" },
  { faixa: "6ª Faixa", receita: "De R$ 3.600.000,01 a R$ 4.800.000,00", aliquota: "33,00 %", deducao: "R$ 648.000,00" },
];

const reparticao = [
  { faixa: "1ª Faixa", irpj: "4,00 %", csll: "3,50 %", cofins: "12,82 %", pis: "2,78 %", cpp: "43,40 %", iss: "33,50 %" },
  { faixa: "2ª Faixa", irpj: "4,00 %", csll: "3,50 %", cofins: "14,05 %", pis: "3,05 %", cpp: "43,40 %", iss: "32,00 %" },
  { faixa: "3ª Faixa", irpj: "4,00 %", csll: "3,50 %", cofins: "13,64 %", pis: "2,96 %", cpp: "43,40 %", iss: "32,50 %" },
  { faixa: "4ª Faixa", irpj: "4,00 %", csll: "3,50 %", cofins: "13,64 %", pis: "2,96 %", cpp: "43,40 %", iss: "32,50 %" },
  { faixa: "5ª Faixa", irpj: "4,00 %", csll: "3,50 %", cofins: "12,82 %", pis: "2,78 %", cpp: "43,40 %", iss: "33,50 % (*)" },
  { faixa: "6ª Faixa", irpj: "35,00 %", csll: "15,00 %", cofins: "16,03 %", pis: "3,47 %", cpp: "30,50 %", iss: "–" },
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

export default function Anexo3() {
  return (
    <div data-testid="anexo3-page" className="bg-white">
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Simples Nacional · Anexo III
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
            Anexo III — Serviços
          </h1>

          <p className="mt-6 text-white/75 text-lg leading-[1.8]">
            Tabela de alíquotas, repartição dos tributos e aplicação prática para
            determinadas atividades de prestação de serviços no Simples Nacional.
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
              O Anexo III é aplicado a diversas atividades de prestação de
              serviços no Simples Nacional. A correta aplicação depende da
              atividade exercida, do enquadramento legal, da segregação das
              receitas e, em alguns casos, da análise do Fator R.
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
            nominal e parcela a deduzir aplicáveis ao Anexo III.
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
            tributos que compõem o Simples Nacional no Anexo III.
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
              Atenção: na 5ª faixa, o percentual de ISS possui observação
              específica. Na 6ª faixa não há repartição para ISS na tabela acima.
            </p>

            <p>
              (*) O percentual efetivo máximo devido ao ISS será de 5,00 %,
              transferindo-se a diferença, de forma proporcional, aos tributos
              federais da mesma faixa de receita bruta anual.
            </p>
          </div>

          <div className="mt-10">
            <h3 className="font-serif text-xl text-[#0A2A57] mb-4">
              Regra específica — 5ª faixa (alíquota efetiva superior a 14,92537 %)
            </h3>

            <div className="overflow-x-auto border border-[#0A2A57]/10 bg-white">
              <table className="w-full text-sm text-[#0A2A57]">
                <thead style={{ backgroundColor: TABLE_HEAD_BG }} className="text-white">
                  <tr>
                    <th className="p-4 text-left font-semibold">Faixa</th>
                    <th className="p-4 text-left font-semibold">CPP</th>
                    <th className="p-4 text-left font-semibold">ISS</th>
                    <th className="p-4 text-left font-semibold">CSLL</th>
                    <th className="p-4 text-left font-semibold">IRPJ</th>
                    <th className="p-4 text-left font-semibold">Cofins</th>
                    <th className="p-4 text-left font-semibold">PIS/Pasep</th>
                  </tr>
                </thead>

                <tbody>
                  <tr className="border-t border-[#0A2A57]/10">
                    <td className="p-4 font-medium text-[#0A2A57]">
                      5ª Faixa, com alíquota efetiva superior a 14,92537 %
                    </td>
                    <td className="p-4">(Alíquota efetiva - 5 %) × 65,26 %</td>
                    <td className="p-4">Percentual de ISS fixo em 5,00 %</td>
                    <td className="p-4">(Alíquota efetiva - 5 %) × 5,26 %</td>
                    <td className="p-4">(Alíquota efetiva - 5 %) × 6,02 %</td>
                    <td className="p-4">(Alíquota efetiva - 5 %) × 19,28 %</td>
                    <td className="p-4">(Alíquota efetiva - 5 %) × 4,18 %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="mt-4 text-[#666] text-sm leading-[1.7]">
              Quando a alíquota efetiva da 5ª faixa for superior a 14,92537 %,
              o ISS fica limitado a 5,00 %. Os demais tributos são repartidos
              sobre o saldo da alíquota efetiva após a dedução desse percentual.
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
            A fórmula demonstra a estrutura legal da alíquota efetiva. A apuração
            correta depende da segregação das receitas, natureza da operação,
            enquadramento da atividade e demais regras aplicáveis ao caso
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
            O Anexo III é aplicado a diversas atividades de serviços, mas a
            classificação não deve ser feita apenas pela descrição comercial da
            empresa. É necessário avaliar a atividade efetivamente prestada, o
            CNAE, o enquadramento legal e, em alguns casos, a relação com o Fator
            R.
          </p>
        </div>
      </section>

      {/* QUANDO USAR */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Quando utilizar o Anexo III
          </h2>

          <ul className="space-y-3 text-[#555] leading-[1.8]">
            <li>• Receitas de determinadas atividades de prestação de serviços.</li>
            <li>• Atividades não enquadradas nos Anexos IV ou V.</li>
            <li>
              • Situações em que o Fator R permite tributação pelo Anexo III para
              atividades originalmente sujeitas ao Anexo V.
            </li>
            <li>
              • Serviços de instalação, manutenção, reparos, treinamentos e
              outras atividades conforme enquadramento aplicável.
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
            <li>• Aplicar o Anexo III sem validar o enquadramento correto da atividade.</li>
            <li>• Desconsiderar o Fator R em atividades que podem migrar entre Anexo III e Anexo V.</li>
            <li>• Aplicar a alíquota nominal da tabela diretamente, sem calcular a alíquota efetiva.</li>
            <li>• Não segregar receitas de serviços, comércio e atividades sujeitas a anexos distintos.</li>
            <li>• Ignorar o impacto do ISS na composição da carga tributária.</li>
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
              da atividade, Fator R, segregação de receitas, receita acumulada e
              análise do cenário real.
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