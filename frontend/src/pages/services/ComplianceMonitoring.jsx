import React from "react";
import { FileSearch, RefreshCw, ShieldCheck } from "lucide-react";
import ServiceLanding from "./ServiceLanding";

export default function ComplianceMonitoring() {
  return (
    <ServiceLanding
      eyebrow="Monitoramento de compliance fiscal"
      title="Monitoramento contínuo para manter"
      highlight=" a operação sob controle."
      intro="Mesmo uma estrutura correta pode se desalinhar com mudanças de processo, equipe, legislação ou sistema. O monitoramento contínuo identifica desvios antes que se transformem em retrabalho, risco ou perda."
      primaryCta="Quero monitorar minha operação"
      primaryMessage="Olá, vim pela página de Monitoramento de Compliance Fiscal e quero avaliar uma rotina de acompanhamento para minha empresa."
      supportingLink={{ to: "/diagnostico", label: "Conhecer o diagnóstico técnico" }}
      sectionEyebrow="Controle recorrente"
      sectionTitle="Conformidade precisa ser acompanhada, não presumida."
      sectionText="Acompanhamos pontos sensíveis da operação para verificar se o que foi definido continua sendo praticado. A análise recorrente ajuda a antecipar inconsistências e manter a empresa preparada para decidir e responder com segurança."
      pillars={[
        { icon: FileSearch, title: "Leitura periódica", text: "Revisão de rotinas, documentos e sinais de divergência que exigem atenção." },
        { icon: RefreshCw, title: "Prevenção contínua", text: "Identificação de desvios antes que eles afetem fechamento, entrega ou resultado." },
        { icon: ShieldCheck, title: "Ambiente controlado", text: "Orientação para manter regras, processos e responsabilidades alinhados." },
      ]}
      scopeTitle="Acompanhamento para a operação não perder consistência com o tempo."
      scopeItems={[
        "Auditoria recorrente de pontos fiscais e operacionais",
        "Acompanhamento de alterações na rotina da empresa",
        "Prevenção de inconsistências em obrigações acessórias",
        "Validação de processos e responsabilidades internas",
        "Leitura de impactos de mudanças sistêmicas",
        "Plano de ação para correções e manutenção do controle",
      ]}
      closingTitle="Sua empresa precisa manter"
      closingHighlight=" o controle depois da correção?"
      closingText="Explique como a operação funciona hoje. Direcionamos uma rotina de monitoramento adequada ao risco e à complexidade do negócio."
      closingMessage="Olá, vim pela página de Monitoramento de Compliance Fiscal e quero conversar sobre acompanhamento recorrente."
    />
  );
}
