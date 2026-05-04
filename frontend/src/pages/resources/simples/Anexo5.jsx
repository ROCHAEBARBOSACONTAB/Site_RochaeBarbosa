import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const TABLE_HEAD_BG = "#0A2A57";

const aliquotas = [
  {
    faixa: "1ª Faixa",
    receita: "Até R$ 180.000,00",
    aliquota: "15,50 %",
    deducao: "R$ 0,00",
  },
  {
    faixa: "2ª Faixa",
    receita: "De R$ 180.000,01 a R$ 360.000,00",
    aliquota: "18,00 %",
    deducao: "R$ 4.500,00",
  },
  {
    faixa: "3ª Faixa",
    receita: "De R$ 360.000,01 a R$ 720.000,00",
    aliquota: "19,50 %",
    deducao: "R$ 9.900,00",
  },
  {
    faixa: "4ª Faixa",
    receita: "De R$ 720.000,01 a R$ 1.800.000,00",
    aliquota: "20,50 %",
    deducao: "R$ 17.100,00",
  },
  {
    faixa: "5ª Faixa",
    receita: "De R$ 1.800.000,01 a R$ 3.600.000,00",
    aliquota: "23,00 %",
    deducao: "R$ 62.100,00",
  },
  {
    faixa: "6ª Faixa",
    receita: "De R$ 3.600.000,01 a R$ 4.800.000,00",
    aliquota: "30,50 %",
    deducao: "R$ 540.000,00",
  },
];

const reparticao = [
  {
    faixa: "1ª Faixa",
    irpj: "25,00 %",
    csll: "15,00 %",
    cofins: "14,10 %",
    pis: "3,05 %",
    cpp: "28,85 %",
    iss: "14,00 %",
  },
  {
    faixa: "2ª Faixa",
    irpj: "23,00 %",
    csll: "15,00 %",
    cofins: "14,10 %",
    pis: "3,05 %",
    cpp: "27,85 %",
    iss: "17,00 %",
  },
  {
    faixa: "3ª Faixa",
    irpj: "24,00 %",
    csll: "15,00 %",
    cofins: "14,92 %",
    pis: "3,23 %",
    cpp: "23,85 %",
    iss: "19,00 %",
  },
  {
    faixa: "4ª Faixa",
    irpj: "21,00 %",
    csll: "15,00 %",
    cofins: "15,74 %",
    pis: "3,41 %",
    cpp: "23,85 %",
    iss: "21,00 %",
  },
  {
    faixa: "5ª Faixa",
    irpj: "23,00 %",
    csll: "12,50 %",
    cofins: "14,10 %",
    pis: "3,05 %",
    cpp: "23,85 %",
    iss: "23,50 %",
  },
  {
    faixa: "6ª Faixa",
    irpj: "35,00 %",
    csll: "15,50 %",
    cofins: "16,44 %",
    pis: "3,56 %",
    cpp: "29,50 %",
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

export default function Anexo5() {
  return (
    <div data-testid="anexo5-page" className="bg-white">
      {/* HERO */}
      <section className="bg-[#0A2A57] text-white pt-36 pb-20 noise">
        <div className="max-w-[900px] mx-auto px-6 text-center">
          <div className="eyebrow text-[#E6C96A] mb-4">
            Simples Nacional · Anexo V
          </div>

          <h1 className="font-serif text-4xl lg:text-5xl leading-[1.1]">
            Anexo V — Serviços
          </h1>

          <p className="mt-6 text-white/75 text-lg leading-[1.8]">
            Tabela de alíquotas, repartição dos tributos e aplicação prática para
            atividades de serviços sujeitas ao Anexo V do Simples Nacional, com
            atenção especial ao Fator R.
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
              O Anexo V deve ser analisado junto ao Fator R. Dependendo da relação
              entre massa salarial e receita bruta, determinadas atividades podem
              ser tributadas pelo Anexo III, em vez do Anexo V.
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
            nominal e parcela a deduzir aplicáveis ao Anexo V.
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
            tributos que compõem o Simples Nacional no Anexo V.
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

          <p className="mt-5 text-[#666] text-sm leading-[1.7]">
            Atenção: na 6ª faixa do Anexo V não há repartição para ISS na tabela
            acima. A análise prática deve considerar o enquadramento, a
            segregação de receitas e a operação realizada.
          </p>
        </div>
      </section>

      {/* FÓRMULA DA ALÍQUOTA EFETIVA */}
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
            receitas, enquadramento da atividade, Fator R e demais regras
            aplicáveis ao caso concreto.
          </p>
        </div>
      </section>

      {/* FATOR R */}
      <section className="py-20 bg-[#F7F7F4]">
        <div className="max-w-[900px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Fator R e relação com o Anexo V
          </h2>

          <p className="text-[#555] leading-[1.8] mb-6">
            O Fator R é utilizado para verificar se determinadas atividades de
            serviços serão tributadas pelo Anexo III ou pelo Anexo V. Ele mede a
            proporção entre a massa salarial e a receita bruta acumulada nos
            últimos 12 meses.
          </p>

          <div className="border border-[#0A2A57]/10 bg-white p-7 mb-6">
            <p className="text-[#0A2A57] font-serif text-xl leading-[1.7]">
              Fator R = Massa salarial ÷ Receita bruta dos últimos 12 meses
            </p>
          </div>

          <div className="space-y-4 text-[#555] leading-[1.8]">
            <p>
              Quando o Fator R for igual ou superior a 28,00 %, a empresa pode
              ser tributada pelo Anexo III, desde que a atividade esteja sujeita
              a essa regra.
            </p>

            <p>
              Quando o Fator R for inferior a 28,00 %, a tributação permanece no
              Anexo V, geralmente com carga tributária mais elevada.
            </p>
          </div>

          <div className="mt-8 border border-[#D4AF37]/40 bg-white p-6">
            <div className="eyebrow text-[#D4AF37] mb-2">
              Ponto técnico relevante
            </div>

            <p className="text-[#0A2A57] leading-[1.7]">
              A massa salarial deve ser analisada com cuidado, considerando
              salários, pró-labore e encargos vinculados à folha. A apuração
              incorreta desses valores pode gerar enquadramento indevido e risco
              fiscal.
            </p>
          </div>
        </div>
      </section>

      {/* INTERPRETAÇÃO */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Interpretação prática
          </h2>

          <p className="text-[#555] leading-[1.8]">
            O Anexo V costuma ser aplicado a determinadas atividades de serviços
            com maior carga tributária no Simples Nacional. No entanto, para
            atividades sujeitas ao Fator R, a tributação pode mudar para o Anexo
            III quando a relação entre folha e receita atingir o percentual
            exigido.
          </p>
        </div>
      </section>

      {/* QUANDO USAR */}
      <section className="py-16 bg-[#F7F7F4]">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Quando utilizar o Anexo V
          </h2>

          <ul className="space-y-3 text-[#555] leading-[1.8]">
            <li>• Atividades de serviços legalmente enquadradas no Anexo V.</li>
            <li>
              • Situações em que o Fator R seja inferior a 28,00 %, quando
              aplicável.
            </li>
            <li>
              • Atividades técnicas, intelectuais ou profissionais sujeitas à
              análise específica de enquadramento.
            </li>
            <li>
              • Receitas que não possam ser enquadradas no Anexo III em razão da
              regra do Fator R ou da natureza da atividade.
            </li>
          </ul>
        </div>
      </section>

      {/* ERROS COMUNS */}
      <section className="py-16 bg-white">
        <div className="max-w-[800px] mx-auto px-6">
          <h2 className="font-serif text-3xl text-[#0A2A57] mb-6">
            Erros comuns
          </h2>

          <ul className="space-y-3 text-[#555] leading-[1.8]">
            <li>
              • Aplicar o Anexo V sem verificar se a atividade está sujeita ao
              Fator R.
            </li>
            <li>
              • Calcular o Fator R com períodos diferentes entre folha e receita.
            </li>
            <li>
              • Desconsiderar pró-labore ou encargos vinculados à folha na massa
              salarial.
            </li>
            <li>
              • Aplicar a alíquota nominal da tabela diretamente, sem calcular a
              alíquota efetiva.
            </li>
            <li>
              • Não segregar receitas sujeitas a anexos distintos.
            </li>
            <li>
              • Tratar o Fator R como regra automática, sem validar a atividade e
              o enquadramento legal.
            </li>
          </ul>
        </div>
      </section>

      {/* BASE LEGAL */}
      <section className="py-14 bg-[#F7F7F4] border-t border-[#0A2A57]/10">
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
            enquadramento, Fator R, segregação de receitas, folha de pagamento e
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