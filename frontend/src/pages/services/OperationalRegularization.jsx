import React from "react";
import { Building2, ClipboardCheck, ShieldCheck } from "lucide-react";
import ServiceLanding from "./ServiceLanding";

export default function OperationalRegularization() {
  return (
    <ServiceLanding
      eyebrow="Regularização operacional"
      title="Licenças e regularização para sua empresa"
      highlight=" operar com segurança."
      intro="Organizamos exigências municipais, estaduais e setoriais que afetam a continuidade da atividade, com leitura contábil, fiscal e operacional do cenário da empresa."
      primaryCta="Quero regularizar minha operação"
      primaryMessage="Olá, vim pela página de Licenças e Regularização Operacional e preciso avaliar as exigências da minha empresa."
      supportingLink={{ to: "/servicos/abertura-de-empresa", label: "Conhecer abertura e regularização" }}
      sectionEyebrow="Além do CNPJ regular"
      sectionTitle="A empresa precisa estar apta a operar na prática."
      sectionText="Regularidade empresarial não se resume ao cadastro da empresa. Dependendo da atividade, endereço e operação, existem licenças, alvarás, inscrições e obrigações que precisam estar alinhados para reduzir interrupções, pendências e retrabalho."
      pillars={[
        { icon: Building2, title: "Leitura da atividade", text: "Identificação das exigências relacionadas ao tipo de operação e aos órgãos aplicáveis." },
        { icon: ClipboardCheck, title: "Organização documental", text: "Apoio na organização de informações, cadastros e documentos necessários." },
        { icon: ShieldCheck, title: "Regularidade sustentada", text: "Orientação para manter obrigações e prazos sob acompanhamento." },
      ]}
      scopeTitle="Exigências tratadas conforme a realidade da operação."
      scopeItems={[
        "Licenças, alvarás e inscrições aplicáveis",
        "Demandas municipais e estaduais",
        "Regularização cadastral e documental",
        "Orientação sobre órgãos reguladores e setoriais",
        "ANVISA, CETESB e exigências específicas, quando aplicável",
        "Acompanhamento de pendências que possam afetar a atividade",
      ]}
      closingTitle="Há uma exigência impedindo ou colocando"
      closingHighlight=" sua operação em risco?"
      closingText="Explique o cenário e a atividade da empresa. Direcionamos quais regularizações precisam ser avaliadas primeiro."
      closingMessage="Olá, vim pela página de Licenças e Regularização Operacional e quero conversar sobre a situação da minha empresa."
    />
  );
}
