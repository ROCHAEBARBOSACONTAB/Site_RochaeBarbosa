import React from "react";
import { BarChart3, FileSearch, Settings2 } from "lucide-react";
import ServiceLanding from "./ServiceLanding";

export default function TaxCreditRecovery() {
  return (
    <ServiceLanding
      eyebrow="Recuperação tributária"
      title="Recuperação de créditos tributários"
      highlight=" com correção da causa."
      intro="Investigamos valores, regras e processos que podem ter gerado pagamentos indevidos ou perdas de crédito, sem tratar a recuperação como uma ação isolada da operação."
      primaryCta="Quero avaliar créditos tributários"
      primaryMessage="Olá, vim pela página de Recuperação de Créditos Tributários e quero avaliar oportunidades na minha empresa."
      supportingLink={{ to: "/diagnostico", label: "Conhecer o diagnóstico técnico" }}
      sectionEyebrow="Recuperar e sustentar"
      sectionTitle="Crédito sem correção da origem volta a se perder."
      sectionText="Uma recuperação consistente começa na leitura dos documentos, da apuração e do sistema. Quando identificamos uma oportunidade, também apontamos o processo que precisa ser corrigido para reduzir recorrência e preservar resultado."
      pillars={[
        { icon: FileSearch, title: "Levantamento técnico", text: "Análise de documentos, regras e períodos para identificar oportunidades reais." },
        { icon: BarChart3, title: "Leitura financeira", text: "Priorização dos valores e impactos para apoiar decisões sobre a recuperação." },
        { icon: Settings2, title: "Correção da origem", text: "Orientação para corrigir parâmetros e processos que mantêm a perda ativa." },
      ]}
      scopeTitle="Uma análise que parte do crédito e alcança a operação."
      scopeItems={[
        "Levantamento de créditos tributários e pagamentos indevidos",
        "Revisão retroativa de apurações e documentos",
        "Análise de benefícios e enquadramentos aplicáveis",
        "Identificação de divergências sistêmicas no ERP",
        "Orientação para regularização e aproveitamento seguro",
        "Acompanhamento da correção para evitar novas perdas",
      ]}
      closingTitle="Há valores que sua empresa pode recuperar"
      closingHighlight=" ou perdas que precisa interromper?"
      closingText="Conte o que motivou a revisão. Avaliamos se o cenário pede levantamento de créditos, diagnóstico ou correção operacional."
      closingMessage="Olá, vim pela página de Recuperação de Créditos Tributários e quero avaliar o cenário da minha empresa."
    />
  );
}
