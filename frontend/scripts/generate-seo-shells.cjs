const fs = require("fs");
const path = require("path");

const siteUrl = "https://www.rochaebarbosa.com.br";
const buildDir = path.resolve(__dirname, "..");
const buildPath = path.join(buildDir, "build");
const indexPath = path.join(buildPath, "index.html");
const outputDir = path.join(buildPath, "seo");

const pages = [
  {
    route: "/servicos/consultoria-totvs-protheus",
    file: "consultoria-totvs-protheus",
    title: "Consultoria TOTVS Protheus e ERP fiscal | Rocha & Barbosa",
    description: "Consultoria TOTVS Protheus e ERP fiscal para revisar parametrização tributária, integrações e processos que afetam a rotina fiscal da empresa.",
    h1: "Consultoria TOTVS Protheus para uma operação fiscal confiável",
    lead: "Leitura técnica de processos, parametrizações e integrações para identificar a origem das divergências e orientar uma correção sustentável.",
    service: "Consultoria TOTVS Protheus e ERP fiscal",
  },
  {
    route: "/servicos/configurador-de-tributos-protheus",
    file: "configurador-de-tributos-protheus",
    title: "Configurador de Tributos no Protheus | Rocha & Barbosa",
    description: "Consultoria para Configurador de Tributos no TOTVS Protheus: leitura de regras, cadastros e integrações fiscais para apoiar uma operação consistente.",
    h1: "Configurador de Tributos no Protheus para regras fiscais coerentes",
    lead: "Regras tributárias só entregam previsibilidade quando cadastro, operação e configuração conversam entre si.",
    service: "Consultoria de Configurador de Tributos no TOTVS Protheus",
    faq: [
      ["A revisão resolve toda divergência fiscal automaticamente?", "Não. O objetivo é localizar e qualificar os pontos de configuração e processo."],
      ["Quando vale revisar o Configurador de Tributos?", "Em mudanças de operação, implantação, inconsistências recorrentes ou antes de colocar uma nova rotina em produção."],
    ],
  },
  {
    route: "/servicos/parametrizacao-fiscal-protheus",
    file: "parametrizacao-fiscal-protheus",
    title: "Parametrização fiscal Protheus | Rocha & Barbosa",
    description: "Parametrização fiscal no TOTVS Protheus para empresas que precisam revisar regras, cadastros, integrações e reflexos na rotina fiscal.",
    h1: "Parametrização fiscal Protheus com visão de processo",
    lead: "Parametrizar fiscalmente é traduzir a operação da empresa em regras verificáveis no ERP.",
    service: "Parametrização fiscal no TOTVS Protheus",
  },
  {
    route: "/servicos/diagnostico-fiscal-protheus",
    file: "diagnostico-fiscal-protheus",
    title: "Diagnóstico Fiscal Protheus | Rocha & Barbosa",
    description: "Diagnóstico Fiscal Protheus para identificar divergências entre ERP, documentos, rotinas fiscais, integrações e obrigações acessórias.",
    h1: "Diagnóstico Fiscal Protheus antes de corrigir a origem do problema",
    lead: "Antes de alterar regras, é preciso entender o que ocorre, onde começa e qual é o impacto na operação.",
    service: "Diagnóstico fiscal no TOTVS Protheus",
  },
  {
    route: "/servicos/reforma-tributaria-protheus",
    file: "reforma-tributaria-protheus",
    title: "Reforma Tributária no Protheus | Rocha & Barbosa",
    description: "Consultoria para avaliar impactos da Reforma Tributária no TOTVS Protheus, com foco em processos, dados fiscais, IBS, CBS e governança de mudanças.",
    h1: "Reforma Tributária no Protheus: prepare regras, dados e processos",
    lead: "A transição para IBS e CBS exige leitura dos dados, das rotinas do ERP e das decisões que deverão ser testadas ao longo da vigência.",
    service: "Preparação da Reforma Tributária no TOTVS Protheus",
  },
  {
    route: "/servicos/revisao-tes-protheus",
    file: "revisao-tes-protheus",
    title: "Revisão de TES e regras fiscais no Protheus | Rocha & Barbosa",
    description: "Revisão de TES e regras fiscais no TOTVS Protheus para avaliar coerência entre operação, documentos, cadastros, tributos e integrações.",
    h1: "Revisão de TES e regras fiscais no Protheus",
    lead: "TES participa de decisões relevantes do fluxo fiscal e precisa refletir a operação, os cadastros e os efeitos esperados no ERP.",
    service: "Revisão de TES e regras fiscais no TOTVS Protheus",
  },
  {
    route: "/diagnostico",
    file: "diagnostico",
    title: "Diagnóstico fiscal e de ERP | Rocha & Barbosa",
    description: "Identifique divergências fiscais, riscos, perdas e oportunidades na operação. Diagnóstico técnico para processos, obrigações e sistemas ERP.",
    h1: "Diagnóstico fiscal e de ERP para decisões mais seguras",
    lead: "Uma leitura técnica do cenário para identificar prioridades entre processo, sistema, obrigação fiscal e operação.",
    service: "Diagnóstico fiscal e de ERP",
  },
  {
    route: "/recursos/tabelas/cclass-trib",
    file: "cclass-trib",
    title: "Tabela cClassTrib: consulta de IBS e CBS | Rocha & Barbosa",
    description: "Consulte códigos cClassTrib, CST IBS/CBS, vigência e referências legais com base na planilha publicada pelo Portal Nacional da NF-e.",
    h1: "Tabela cClassTrib: consulta técnica de IBS e CBS",
    lead: "Consulte classificações tributárias, vigências e referências legais a partir da tabela publicada pelo Portal Nacional da NF-e.",
  },
  {
    route: "/recursos/cfop",
    file: "cfop",
    title: "Consulta de CFOP e códigos fiscais | Rocha & Barbosa",
    description: "Consulte códigos CFOP, descrições e classificações relacionadas para apoiar a correta identificação das operações fiscais da sua empresa.",
    h1: "Consulta de CFOP e códigos fiscais",
    lead: "Material técnico para consulta de códigos e apoio à correta identificação das operações fiscais.",
  },
  {
    route: "/recursos/mapa-st",
    file: "mapa-st",
    title: "Mapa da Incidência do ICMS-ST por Estado | Rocha & Barbosa",
    description: "Selecione uma unidade federada para consultar a incidência interna do ICMS-ST, vigências e atos normativos mapeados por estado.",
    h1: "Mapa da Incidência do ICMS-ST por Estado",
    lead: "Consulta organizada por unidade federada, com foco na incidência interna e nas respectivas bases legais.",
  },
  {
    route: "/recursos/mapa-st/sao-paulo",
    file: "mapa-st-sao-paulo",
    title: "Mapa da Incidência do ICMS-ST em São Paulo | Rocha & Barbosa",
    description: "Consulte a incidência interna do ICMS-ST em São Paulo, com anexos, vigência, atos normativos e alcance das alterações por segmento.",
    h1: "Mapa da Incidência do ICMS-ST em São Paulo",
    lead: "Consulta de anexos, vigências e atos normativos relativos à incidência interna do ICMS-ST em São Paulo.",
  },
  {
    route: "/recursos/mapa-st/rio-grande-do-sul",
    file: "mapa-st-rio-grande-do-sul",
    title: "Mapa da Incidência do ICMS-ST no Rio Grande do Sul | Rocha & Barbosa",
    description: "Consulte a incidência interna do ICMS-ST no Rio Grande do Sul, com itens do Apêndice II do RICMS/RS, vigências e atos normativos por segmento.",
    h1: "Mapa da Incidência do ICMS-ST no Rio Grande do Sul",
    lead: "Consulta de itens do Apêndice II do RICMS/RS, vigências e atos normativos relativos à incidência interna do ICMS-ST no Rio Grande do Sul.",
  },
  {
    route: "/recursos/mapa-st/minas-gerais",
    file: "mapa-st-minas-gerais",
    title: "Mapa da Incidência do ICMS-ST em Minas Gerais | Rocha & Barbosa",
    description: "Consulte os capítulos da Parte 2 do Anexo VII do RICMS/2023 de Minas Gerais, com foco na incidência interna, NCM, CEST e âmbito de aplicação.",
    h1: "Mapa da Incidência do ICMS-ST em Minas Gerais",
    lead: "Consulta dos capítulos da Parte 2 do Anexo VII do RICMS/2023, com foco na incidência interna do ICMS-ST em Minas Gerais.",
  },
  {
    route: "/recursos/mapa-st/santa-catarina",
    file: "mapa-st-santa-catarina",
    title: "Mapa da Incidência do ICMS-ST em Santa Catarina | Rocha & Barbosa",
    description: "Consulte as seções vigentes do Anexo 1-A do RICMS/SC para incidência interna do ICMS-ST, com NCM, CEST e referências operacionais.",
    h1: "Mapa da Incidência do ICMS-ST em Santa Catarina",
    lead: "Consulta das seções vigentes do Anexo 1-A do RICMS/SC, com foco na incidência interna, NCM, CEST e regras operacionais.",
  },
  {
    route: "/recursos/mapa-st/parana",
    file: "mapa-st-parana",
    title: "Mapa da Incidência do ICMS-ST no Paraná | Rocha & Barbosa",
    description: "Consulte seções materialmente auditadas do Anexo IX do RICMS/PR, com vigências, revogações e alterações relevantes do ICMS-ST.",
    h1: "Mapa da Incidência do ICMS-ST no Paraná",
    lead: "Consulta de seções materialmente auditadas do Anexo IX do RICMS/PR, com foco na incidência interna, vigências, revogações e alterações por item.",
  },
  {
    route: "/recursos/mapa-st/mato-grosso-do-sul",
    file: "mapa-st-mato-grosso-do-sul",
    title: "Mapa da Incidência do ICMS-ST em Mato Grosso do Sul | Rocha & Barbosa",
    description: "Consulte os segmentos do Subanexo I do Anexo III do RICMS/MS, com vigências, revogações e alterações relevantes do ICMS-ST.",
    h1: "Mapa da Incidência do ICMS-ST em Mato Grosso do Sul",
    lead: "Consulta dos segmentos do Subanexo I do Anexo III do RICMS/MS, com foco na incidência interna, vigências, revogações e alterações por item.",
  },
  {
    route: "/recursos/mapa-st/mato-grosso",
    file: "mapa-st-mato-grosso",
    title: "Mapa da Incidência do ICMS-ST em Mato Grosso | Rocha & Barbosa",
    description: "Consulte os segmentos da Tabela I do Apêndice do Anexo X do RICMS/MT, com vigências e alterações relevantes por item do ICMS-ST.",
    h1: "Mapa da Incidência do ICMS-ST em Mato Grosso",
    lead: "Consulta dos segmentos da Tabela I do Apêndice do Anexo X do RICMS/MT, com foco na incidência interna, vigências e alterações por item.",
  },
  {
    route: "/recursos/mapa-st/goias",
    file: "mapa-st-goias",
    title: "Mapa da Incidência do ICMS-ST em Goiás | Rocha & Barbosa",
    description: "Consulte os incisos do Apêndice II do Anexo VIII do RCTE/GO, com vigências, exclusões e alterações relevantes do ICMS-ST.",
    h1: "Mapa da Incidência do ICMS-ST em Goiás",
    lead: "Consulta dos incisos do Apêndice II do Anexo VIII do RCTE/GO, com foco na incidência interna, vigências, exclusões e alterações por item.",
  },
];

function escapeHtml(value) {
  return value.replace(/[&<>'"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" })[char]);
}

function pageSchema(page) {
  const canonical = `${siteUrl}${page.route}`;
  const graph = [{
    "@type": "WebPage",
    "@id": canonical,
    url: canonical,
    name: page.title.replace(" | Rocha & Barbosa", ""),
    description: page.description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": `${siteUrl}/#website` },
  }];
  if (page.service) graph.push({
    "@type": "Service",
    name: page.service,
    description: page.description,
    provider: { "@id": `${siteUrl}/#business` },
    url: canonical,
  });
  if (page.faq) graph.push({
    "@type": "FAQPage",
    mainEntity: page.faq.map(([name, text]) => ({
      "@type": "Question",
      name,
      acceptedAnswer: { "@type": "Answer", text },
    })),
  });
  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
}

if (!fs.existsSync(indexPath)) {
  throw new Error("Build não encontrado. Execute o build do React antes de gerar as páginas de SEO.");
}

const index = fs.readFileSync(indexPath, "utf8");
fs.rmSync(outputDir, { recursive: true, force: true });
fs.mkdirSync(outputDir, { recursive: true });

for (const page of pages) {
  const canonical = `${siteUrl}${page.route}`;
  const initialMarkup = `<main data-seo-prerendered="true"><article><h1>${escapeHtml(page.h1)}</h1><p>${escapeHtml(page.lead)}</p></article></main>`;
  const head = [
    `<link rel="canonical" href="${canonical}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<meta property="og:title" content="${escapeHtml(page.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(page.description)}" />`,
    `<meta property="og:url" content="${canonical}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<script type="application/ld+json">${pageSchema(page)}</script>`,
  ].join("");
  const html = index
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(page.title)}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeHtml(page.description)}" />`)
    .replace("</head>", `${head}</head>`)
    .replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${initialMarkup}</div>`);
  fs.writeFileSync(path.join(outputDir, `${page.file}.html`), html);
}

console.log(`SEO static shells generated: ${pages.length}`);
