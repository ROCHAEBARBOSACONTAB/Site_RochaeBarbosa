import {
  BadgeCheck,
  Blocks,
  ClipboardCheck,
  FileCog,
  FileSearch,
  Landmark,
  Scale,
  Settings2,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const protheusMessage = (subject) =>
  `Olá, vim pelo site da Rocha & Barbosa e quero conversar sobre ${subject}.`;

export const technicalServices = {
  "configurador-de-tributos-protheus": {
    eyebrow: "Protheus e tributação",
    title: "Configurador de Tributos no Protheus para regras fiscais coerentes",
    description:
      "Consultoria para Configurador de Tributos no TOTVS Protheus: leitura de regras, cadastros e integrações fiscais para apoiar uma operação consistente.",
    service: "Consultoria de Configurador de Tributos no TOTVS Protheus",
    intro:
      "Regras tributárias só entregam previsibilidade quando cadastro, operação e configuração conversam entre si. A análise técnica parte da operação real para identificar parâmetros que merecem validação.",
    theme: "Configuração com leitura fiscal",
    sectionTitle: "A regra no sistema precisa acompanhar a regra da operação.",
    sectionText:
      "Mudanças de produto, operação, estabelecimento ou legislação podem deixar regras antigas ativas sem que isso seja percebido no dia a dia. A revisão organiza os pontos que influenciam a tributação, os documentos fiscais e a escrituração.",
    pillars: [
      { icon: Settings2, title: "Regras e cadastros", text: "Leitura dos parâmetros e cadastros que participam da definição tributária." },
      { icon: Workflow, title: "Fluxo operacional", text: "Validação do caminho entre pedido, documento, escrituração e obrigação acessória." },
      { icon: FileSearch, title: "Evidências", text: "Registro dos pontos avaliados para orientar priorização e correção." },
    ],
    scopeTitle: "Pontos que podem entrar em uma revisão técnica.",
    scopeItems: [
      "Regras fiscais relacionadas a produto, operação e estabelecimento",
      "Cadastros e campos que alimentam a tributação",
      "Relação entre TES, natureza da operação e documentos fiscais",
      "Integrações que levam dados ao fiscal e à contabilidade",
      "Impactos de alterações legais na parametrização existente",
      "Cenários de teste e critérios de validação antes da mudança",
    ],
    faq: [
      ["A revisão resolve toda divergência fiscal automaticamente?", "Não. O objetivo é localizar e qualificar os pontos de configuração e processo. A correção deve ser definida conforme o cenário, o histórico e as regras aplicáveis."],
      ["Quando vale revisar o Configurador de Tributos?", "Em mudanças de operação, implantação, troca de cadastros, inconsistências recorrentes, preparação para mudanças legais ou antes de colocar uma nova rotina em produção."],
      ["A análise considera a Reforma Tributária?", "Quando aplicável ao escopo, a análise observa os impactos de IBS, CBS, classificações e regras de transição no desenho da operação e do ERP."],
    ],
    related: [
      ["Diagnóstico Fiscal Protheus", "/servicos/diagnostico-fiscal-protheus"],
      ["Reforma Tributária no Protheus", "/servicos/reforma-tributaria-protheus"],
      ["Revisão de TES e regras fiscais", "/servicos/revisao-tes-protheus"],
    ],
    primaryMessage: protheusMessage("a revisão do Configurador de Tributos no Protheus"),
  },
  "parametrizacao-fiscal-protheus": {
    eyebrow: "Protheus e tributação",
    title: "Parametrização fiscal Protheus com visão de processo",
    description:
      "Parametrização fiscal no TOTVS Protheus para empresas que precisam revisar regras, cadastros, integrações e reflexos na rotina fiscal.",
    service: "Parametrização fiscal no TOTVS Protheus",
    intro:
      "Parametrizar fiscalmente não é apenas preencher campos. É traduzir a operação da empresa em regras verificáveis no ERP, com critérios claros para manutenção e mudança.",
    theme: "ERP conectado à rotina",
    sectionTitle: "Parâmetros sustentam decisões que aparecem no documento e no fechamento.",
    sectionText:
      "Uma parametrização consistente considera a origem da informação, a regra aplicada e o destino do dado. O trabalho técnico evita tratar o sintoma isolado quando a causa está no processo, no cadastro ou na integração.",
    pillars: [
      { icon: Blocks, title: "Estrutura", text: "Organização dos elementos fiscais que sustentam cada cenário de operação." },
      { icon: ClipboardCheck, title: "Validação", text: "Cenários definidos para conferir efeitos antes de mudanças em produção." },
      { icon: ShieldCheck, title: "Continuidade", text: "Orientação para reduzir a recorrência após o ajuste inicial." },
    ],
    scopeTitle: "Uma parametrização fiscal pode envolver.",
    scopeItems: [
      "Leitura de operações de entrada, saída e movimentações internas",
      "Cadastros fiscais de itens, clientes, fornecedores e estabelecimentos",
      "TES, CFOP, CST e demais referências necessárias ao cenário",
      "Reflexos em documentos fiscais, apuração e obrigações acessórias",
      "Integrações com módulos fiscais e contábeis",
      "Documentação dos critérios adotados para operação e manutenção",
    ],
    faq: [
      ["Parametrização e Configurador de Tributos são a mesma coisa?", "São temas relacionados, mas a parametrização pode envolver uma camada mais ampla de cadastros, TES, integrações e processos que suportam a regra tributária."],
      ["É possível revisar apenas um processo?", "Sim. A definição do escopo pode ser pontual, desde que seja possível avaliar as dependências que afetam o processo escolhido."],
      ["A correção deve ser feita diretamente em produção?", "A prática recomendada é definir cenários de teste e validação compatíveis com o ambiente e a operação antes de qualquer alteração produtiva."],
    ],
    related: [
      ["Consultoria Fiscal Protheus", "/servicos/consultoria-totvs-protheus"],
      ["Diagnóstico Fiscal Protheus", "/servicos/diagnostico-fiscal-protheus"],
      ["TES e regras fiscais", "/servicos/revisao-tes-protheus"],
    ],
    primaryMessage: protheusMessage("a parametrização fiscal do Protheus"),
  },
  "diagnostico-fiscal-protheus": {
    eyebrow: "Diagnóstico técnico",
    title: "Diagnóstico Fiscal Protheus antes de corrigir a origem do problema",
    description:
      "Diagnóstico Fiscal Protheus para identificar divergências entre ERP, documentos, rotinas fiscais, integrações e obrigações acessórias.",
    service: "Diagnóstico fiscal no TOTVS Protheus",
    intro:
      "Antes de alterar regras, é preciso entender o que ocorre, onde começa e qual é o impacto. O diagnóstico organiza evidências para que a empresa priorize as correções com leitura fiscal e operacional.",
    theme: "Leitura técnica do cenário",
    sectionTitle: "Problemas recorrentes merecem uma investigação que vá além do fechamento.",
    sectionText:
      "Diferenças entre ERP, documento e escrituração frequentemente surgem quando uma mudança operacional deixa de ser refletida em todos os pontos do processo. O diagnóstico examina as conexões relevantes para estabelecer hipóteses e próximos passos.",
    pillars: [
      { icon: FileSearch, title: "Evidências", text: "Leitura de sinais, documentos e rotinas relacionados ao problema relatado." },
      { icon: Landmark, title: "Impacto", text: "Classificação de riscos e efeitos que merecem prioridade técnica." },
      { icon: BadgeCheck, title: "Plano", text: "Direcionamento de ações, responsáveis e validações necessárias." },
    ],
    scopeTitle: "O diagnóstico pode orientar decisões sobre.",
    scopeItems: [
      "Divergências entre ERP, documentos fiscais e escrituração",
      "Falhas que aparecem apenas no fechamento ou na obrigação acessória",
      "Parâmetros, TES e cadastros com efeito fiscal relevante",
      "Pontos de integração entre operação, fiscal e contabilidade",
      "Riscos de mudança legislativa para a rotina atual",
      "Priorização entre correção pontual, projeto técnico ou acompanhamento",
    ],
    faq: [
      ["O diagnóstico substitui uma auditoria?", "Não necessariamente. Ele é uma leitura técnica orientada ao cenário e ao escopo definidos, podendo indicar a necessidade de análises adicionais."],
      ["O que a empresa precisa disponibilizar?", "Isso é definido após o entendimento inicial. Podem ser necessários exemplos de operação, documentos, descrições de fluxo e acessos controlados conforme o escopo."],
      ["O resultado inclui uma recomendação?", "O diagnóstico busca consolidar achados, prioridades e próximos passos para orientar uma decisão técnica mais segura."],
    ],
    related: [
      ["Consultoria Fiscal Protheus", "/servicos/consultoria-totvs-protheus"],
      ["Parametrização Fiscal Protheus", "/servicos/parametrizacao-fiscal-protheus"],
      ["Recuperação de créditos tributários", "/servicos/recuperacao-de-creditos-tributarios"],
    ],
    primaryMessage: protheusMessage("um diagnóstico fiscal no Protheus"),
  },
  "reforma-tributaria-protheus": {
    eyebrow: "Transição tributária",
    title: "Reforma Tributária no Protheus: prepare regras, dados e processos",
    description:
      "Consultoria para avaliar impactos da Reforma Tributária no TOTVS Protheus, com foco em processos, dados fiscais, IBS, CBS e governança de mudanças.",
    service: "Preparação da Reforma Tributária no TOTVS Protheus",
    intro:
      "A transição para IBS e CBS exige mais do que acompanhar uma regra nova. Ela pede leitura dos dados que a empresa já produz, das rotinas que o ERP sustenta e das decisões que deverão ser testadas ao longo da vigência.",
    theme: "Preparação para a transição",
    sectionTitle: "Reforma tributária é agenda de dados, processo e governança.",
    sectionText:
      "A legislação e os documentos técnicos devem ser acompanhados continuamente. A atuação técnica organiza o inventário de pontos sensíveis, cenários prioritários e critérios de teste, sem antecipar como definitiva uma regra ainda sujeita a regulamentação.",
    pillars: [
      { icon: Scale, title: "Base legal", text: "Leitura da legislação e atos aplicáveis ao escopo definido." },
      { icon: FileCog, title: "Dados fiscais", text: "Mapeamento dos campos, classificações e cadastros que exigem atenção." },
      { icon: Workflow, title: "Transição", text: "Cenários e prioridades para adaptação gradual da operação." },
    ],
    scopeTitle: "A preparação pode contemplar.",
    scopeItems: [
      "Mapeamento de processos e operações com maior exposição à transição",
      "Leitura de cadastros, classificações e dados fiscais relevantes",
      "Impactos de IBS, CBS e regras de transição conforme a norma aplicável",
      "Pontos de atenção em documentos, integrações e obrigações",
      "Critérios para testes, homologação e governança de alterações",
      "Acompanhamento de atualizações oficiais que afetem o escopo",
    ],
    faq: [
      ["A página traz uma parametrização pronta para todos os casos?", "Não. A aplicação depende da operação, do período de vigência e dos atos que regulamentam cada cenário. O objetivo é estruturar uma preparação tecnicamente responsável."],
      ["cClassTrib tem relação com essa preparação?", "Sim. A classificação tributária pode ser relevante para documentos e regras de IBS/CBS. A tabela técnica disponível no site serve como material de consulta e não substitui a análise da operação."],
      ["Quando começar?", "O momento depende da complexidade da empresa. Mapear impactos e qualidade dos dados antecipadamente reduz decisões feitas sob pressão quando novas exigências entram em vigor."],
    ],
    related: [
      ["Tabela cClassTrib", "/recursos/tabelas/cclass-trib"],
      ["Configurador de Tributos", "/servicos/configurador-de-tributos-protheus"],
      ["Diagnóstico Fiscal Protheus", "/servicos/diagnostico-fiscal-protheus"],
    ],
    primaryMessage: protheusMessage("a preparação da Reforma Tributária no Protheus"),
  },
  "revisao-tes-protheus": {
    eyebrow: "Regras fiscais",
    title: "Revisão de TES e regras fiscais no Protheus",
    description:
      "Revisão de TES e regras fiscais no TOTVS Protheus para avaliar coerência entre operação, documentos, cadastros, tributos e integrações.",
    service: "Revisão de TES e regras fiscais no TOTVS Protheus",
    intro:
      "TES participa de decisões relevantes do fluxo fiscal. Uma revisão técnica verifica se a regra adotada continua coerente com a operação, os cadastros relacionados e os reflexos esperados no ERP.",
    theme: "Regras que refletem a operação",
    sectionTitle: "Uma TES isolada não explica todo o comportamento fiscal.",
    sectionText:
      "Para avaliar uma regra com segurança, é necessário considerar a operação, os produtos, as partes envolvidas, os tributos, o documento e a integração posterior. A revisão busca evitar ajustes aparentes que deslocam o problema para outra etapa.",
    pillars: [
      { icon: Settings2, title: "TES e operação", text: "Leitura do vínculo entre a regra, o tipo de movimento e o cenário de negócio." },
      { icon: FileCog, title: "Reflexos", text: "Verificação dos efeitos previstos no documento, fiscal e contábil." },
      { icon: ClipboardCheck, title: "Teste", text: "Cenários para validar o comportamento antes de implementar alterações." },
    ],
    scopeTitle: "Uma revisão pode abranger.",
    scopeItems: [
      "TES utilizadas em operações críticas ou recorrentes",
      "Vínculos com CFOP, CST, natureza e cadastro de produto",
      "Regras de entrada, saída, devolução e transferências",
      "Reflexos em documentos fiscais e escrituração",
      "Pontos de integração com módulos fiscais e contábeis",
      "Critérios de validação para evitar efeitos não previstos",
    ],
    faq: [
      ["É possível alterar TES sem testar?", "Não é recomendável. Uma alteração pode produzir efeitos em documentos, impostos, estoque, integrações e obrigações. O cenário precisa de validação compatível com a operação."],
      ["TES resolve a tributação sozinha?", "Não. A tributação depende de outros cadastros, regras e contextos da operação. A TES é um dos elementos que precisam ser avaliados em conjunto."],
      ["A revisão serve para operações já em andamento?", "Sim, desde que o histórico, os exemplos e a necessidade de correção retroativa sejam considerados no planejamento técnico."],
    ],
    related: [
      ["Parametrização Fiscal Protheus", "/servicos/parametrizacao-fiscal-protheus"],
      ["Consulta de CFOP", "/recursos/cfop"],
      ["Diagnóstico Fiscal Protheus", "/servicos/diagnostico-fiscal-protheus"],
    ],
    primaryMessage: protheusMessage("a revisão de TES e regras fiscais no Protheus"),
  },
};

export const technicalServiceSlugs = Object.keys(technicalServices);
