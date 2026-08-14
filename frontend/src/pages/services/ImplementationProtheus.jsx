import React from "react";
import { ClipboardCheck, Network, Settings2 } from "lucide-react";
import ServiceLanding from "./ServiceLanding";

export default function ImplementationProtheus() {
  return (
    <ServiceLanding
      eyebrow="Implantação TOTVS Protheus"
      title="Implantação Protheus acompanhada"
      highlight=" antes do go-live."
      intro="Acompanhamos a implantação e a parametrização fiscal para que a empresa entre em operação com processos validados, menos retrabalho e uma base sustentável."
      primaryCta="Quero planejar meu go-live"
      primaryMessage="Olá, vim pela página de Implantação TOTVS Protheus e quero avaliar o acompanhamento pré-go-live da minha empresa."
      supportingLink={{ to: "/servicos/consultoria-totvs-protheus", label: "Conhecer consultoria Protheus" }}
      sectionEyebrow="Antes de colocar a operação em produção"
      sectionTitle="Implantar não é apenas configurar o sistema."
      sectionText="Erros de desenho, cadastros e regras fiscais costumam aparecer depois do go-live, quando corrigir custa mais. Acompanhamos os pontos que conectam processo, ERP e obrigação fiscal antes que se tornem passivo operacional."
      pillars={[
        { icon: ClipboardCheck, title: "Plano de validação", text: "Definição dos cenários que precisam ser conferidos antes da entrada em produção." },
        { icon: Settings2, title: "Parametrização fiscal", text: "Leitura de tributos, TES, cadastros e regras conforme a operação real." },
        { icon: Network, title: "Integrações testadas", text: "Verificação dos fluxos entre módulos, documentos, fiscal e contabilidade." },
      ]}
      scopeTitle="Acompanhamento técnico para uma entrada em produção mais segura."
      scopeItems={[
        "Levantamento dos processos fiscais críticos",
        "Validação de parametrizações e cadastros",
        "Testes de emissão, escrituração e integrações",
        "Acompanhamento de homologação e pré-go-live",
        "Identificação de riscos antes da operação assistida",
        "Orientação para ajustes e sustentação inicial",
      ]}
      closingTitle="Seu projeto Protheus precisa entrar"
      closingHighlight=" em operação com segurança?"
      closingText="Apresente o momento atual da implantação. Avaliamos onde o acompanhamento técnico gera mais proteção para o go-live."
      closingMessage="Olá, vim pela página de Implantação TOTVS Protheus e quero conversar sobre o go-live da minha empresa."
    />
  );
}
