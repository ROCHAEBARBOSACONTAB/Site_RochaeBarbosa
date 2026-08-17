import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import cfopData from "../pages/resources/cfop/cfopData.json";

const SITE_URL = "https://www.rochaebarbosa.com.br";
const BRAND = "Rocha & Barbosa Assessoria Contabil";
const SOCIAL_IMAGE = `${SITE_URL}/og-rocha-barbosa.png`;
const LOGO_URL = `${SITE_URL}/rocha-barbosa-logo.png`;
const MAPS_URL = "https://maps.app.goo.gl/FwjWsxxiHdU2AmcK7";

const pageMetadata = {
  "/": {
    title: "Rocha & Barbosa | Inteligência Fiscal e Tributária",
    description:
      "Escritorio de contabilidade em Pederneiras para abertura e regularizacao de empresas, rotina fiscal e suporte empresarial. Atendimento regional e remoto.",
  },
  "/servicos": {
    title: "Servicos de contabilidade em Pederneiras | Rocha & Barbosa",
    description:
      "Servicos de contabilidade em Pederneiras: abertura e regularizacao de empresas, gestao contabil e fiscal, compliance e suporte empresarial.",
    service: "Servicos contabeis, fiscais e empresariais",
  },
  "/servicos/abertura-de-empresa": {
    title: "Abertura de empresa em Pederneiras | Rocha & Barbosa",
    description:
      "Abra, altere ou regularize sua empresa em Pederneiras com orientacao contabil, fiscal e societaria. Atendimento presencial, regional e remoto.",
    service: "Abertura e regularizacao de empresa",
    breadcrumbs: [
      ["Servicos", "/servicos"],
      ["Abertura e regularizacao de empresa", "/servicos/abertura-de-empresa"],
    ],
  },
  "/servicos/contabilidade-e-gestao-fiscal": {
    title: "Contabilidade e gestao fiscal em Pederneiras | Rocha & Barbosa",
    description:
      "Contabilidade e gestao fiscal em Pederneiras para empresas que precisam organizar rotinas, obrigacoes e informacoes para decidir com clareza.",
    service: "Contabilidade e gestao fiscal",
    breadcrumbs: [
      ["Servicos", "/servicos"],
      ["Contabilidade e gestao fiscal", "/servicos/contabilidade-e-gestao-fiscal"],
    ],
  },
  "/servicos/consultoria-totvs-protheus": {
    title: "Consultoria TOTVS Protheus e ERP fiscal | Rocha & Barbosa",
    description:
      "Consultoria TOTVS Protheus e ERP fiscal para revisar parametrizacao tributaria, integracoes e processos que afetam a rotina fiscal da empresa.",
    service: "Consultoria TOTVS Protheus e ERP fiscal",
    breadcrumbs: [
      ["Servicos", "/servicos"],
      ["Consultoria TOTVS Protheus", "/servicos/consultoria-totvs-protheus"],
    ],
  },
  "/servicos/implantacao-totvs-protheus": {
    title: "Implantacao TOTVS Protheus e pre-go-live | Rocha & Barbosa",
    description:
      "Acompanhamento de implantacao TOTVS Protheus e pre-go-live para validar parametrizacao fiscal, integracoes e processos antes da entrada em producao.",
    service: "Implantacao TOTVS Protheus e pre-go-live",
    breadcrumbs: [
      ["Servicos", "/servicos"],
      ["Implantacao TOTVS Protheus", "/servicos/implantacao-totvs-protheus"],
    ],
  },
  "/servicos/recuperacao-de-creditos-tributarios": {
    title: "Recuperacao de creditos tributarios | Rocha & Barbosa",
    description:
      "Recuperacao de creditos tributarios com analise da origem da perda, revisao de apuracoes e orientacao para corrigir processos e sistemas.",
    service: "Recuperacao de creditos tributarios",
    breadcrumbs: [
      ["Servicos", "/servicos"],
      ["Recuperacao de creditos tributarios", "/servicos/recuperacao-de-creditos-tributarios"],
    ],
  },
  "/servicos/monitoramento-compliance-fiscal": {
    title: "Monitoramento de compliance fiscal | Rocha & Barbosa",
    description:
      "Monitoramento de compliance fiscal para prevenir inconsistencias, acompanhar processos e manter a operacao sob controle.",
    service: "Monitoramento de compliance fiscal",
    breadcrumbs: [
      ["Servicos", "/servicos"],
      ["Monitoramento de compliance fiscal", "/servicos/monitoramento-compliance-fiscal"],
    ],
  },
  "/servicos/licencas-e-regularizacao-operacional": {
    title: "Licencas e regularizacao operacional | Rocha & Barbosa",
    description:
      "Licencas e regularizacao operacional para empresas que precisam cumprir exigencias municipais, estaduais e setoriais para operar com seguranca.",
    service: "Licencas e regularizacao operacional",
    breadcrumbs: [
      ["Servicos", "/servicos"],
      ["Licencas e regularizacao operacional", "/servicos/licencas-e-regularizacao-operacional"],
    ],
  },
  "/diagnostico": {
    title: "Diagnostico fiscal e de ERP | Rocha & Barbosa",
    description:
      "Identifique divergencias fiscais, riscos, perdas e oportunidades na operacao. Diagnostico tecnico para processos, obrigacoes e sistemas ERP.",
    service: "Diagnostico fiscal e de ERP",
  },
  "/sobre": {
    title: "Rocha & Barbosa Assessoria Contabil em Pederneiras",
    description:
      "Conheca a Rocha & Barbosa, assessoria contabil que integra rotina contabil, fiscal e operacao para apoiar decisoes empresariais com clareza.",
  },
  "/contato": {
    title: "Contato | Contabilidade em Pederneiras | Rocha & Barbosa",
    description:
      "Entre em contato com a Rocha & Barbosa, escritorio de contabilidade em Pederneiras. Atendimento para abertura, regularizacao, rotinas fiscais e empresariais.",
  },
  "/politica-de-cookies": {
    title: "Politica de Cookies | Rocha & Barbosa",
    description:
      "Entenda como a Rocha & Barbosa utiliza cookies essenciais e de medicao no site e como gerenciar suas preferencias.",
  },
  "/recursos": {
    title: "Materiais tecnicos contabeis e fiscais | Rocha & Barbosa",
    description:
      "Consulte materiais tecnicos sobre CFOP, Simples Nacional, ICMS, IPI e PIS/COFINS para apoiar a rotina contabil e fiscal da sua empresa.",
  },
  "/recursos/cfop": {
    title: "Consulta de CFOP e codigos fiscais | Rocha & Barbosa",
    description:
      "Consulte codigos CFOP, descricoes e classificacoes relacionadas para apoiar a correta identificacao das operacoes fiscais da sua empresa.",
    breadcrumbs: [
      ["Materiais tecnicos", "/recursos"],
      ["CFOP", "/recursos/cfop"],
    ],
  },
  "/recursos/simples-nacional": {
    title: "Simples Nacional: anexos e faixas | Rocha & Barbosa",
    description:
      "Consulte os anexos, faixas e aliquotas do Simples Nacional para entender a tributacao aplicavel a atividade da sua empresa.",
    breadcrumbs: [
      ["Materiais tecnicos", "/recursos"],
      ["Simples Nacional", "/recursos/simples-nacional"],
    ],
  },
  "/recursos/simples-nacional/anexo-1": {
    title: "Anexo I do Simples Nacional | Rocha & Barbosa",
    description:
      "Consulte as faixas, aliquotas e valores de deducao do Anexo I do Simples Nacional, aplicavel a atividades de comercio.",
  },
  "/recursos/simples-nacional/anexo-2": {
    title: "Anexo II do Simples Nacional | Rocha & Barbosa",
    description:
      "Consulte as faixas, aliquotas e valores de deducao do Anexo II do Simples Nacional, aplicavel a atividades industriais.",
  },
  "/recursos/simples-nacional/anexo-3": {
    title: "Anexo III do Simples Nacional | Rocha & Barbosa",
    description:
      "Consulte as faixas, aliquotas e valores de deducao do Anexo III do Simples Nacional, aplicavel a atividades de servicos.",
  },
  "/recursos/simples-nacional/anexo-4": {
    title: "Anexo IV do Simples Nacional | Rocha & Barbosa",
    description:
      "Consulte as faixas, aliquotas e valores de deducao do Anexo IV do Simples Nacional para servicos sujeitos a contribuicao patronal.",
  },
  "/recursos/simples-nacional/anexo-5": {
    title: "Anexo V do Simples Nacional | Rocha & Barbosa",
    description:
      "Consulte as faixas, aliquotas e valores de deducao do Anexo V do Simples Nacional e entenda o fator R nos servicos.",
  },
  "/recursos/tabelas": {
    title: "Tabelas fiscais: ICMS, IPI e PIS/COFINS | Rocha & Barbosa",
    description:
      "Acesse tabelas fiscais de ICMS, IPI e PIS/COFINS para consulta tecnica, classificacao e apoio a rotina tributaria.",
    breadcrumbs: [
      ["Materiais tecnicos", "/recursos"],
      ["Tabelas fiscais", "/recursos/tabelas"],
    ],
  },
  "/recursos/tabelas/icms": {
    title: "Tabela de ICMS para consulta | Rocha & Barbosa",
    description:
      "Consulte a tabela de ICMS para apoiar a classificacao fiscal e a analise tributaria das operacoes da sua empresa.",
  },
  "/recursos/tabelas/ipi": {
    title: "Tabela de IPI para consulta | Rocha & Barbosa",
    description:
      "Consulte a tabela de IPI para apoiar a classificacao fiscal e a analise tributaria das operacoes da sua empresa.",
  },
  "/recursos/tabelas/pis-cofins": {
    title: "Tabela de PIS e COFINS para consulta | Rocha & Barbosa",
    description:
      "Consulte a tabela de PIS e COFINS para apoiar a classificacao fiscal e a analise tributaria das operacoes da sua empresa.",
  },
};

function cfopMetadata(pathname) {
  const code = pathname.split("/").pop();
  const item = cfopData.find((entry) => entry.code === code);

  if (!item) return null;

  return {
    title: `CFOP ${item.code}: ${item.title} | Rocha & Barbosa`,
    description: `CFOP ${item.code}: ${item.title}. ${item.description}`.slice(0, 155),
    breadcrumbs: [
      ["Materiais tecnicos", "/recursos"],
      ["CFOP", "/recursos/cfop"],
      [`CFOP ${item.code}`, pathname],
    ],
  };
}

function getMetadata(pathname) {
  if (pageMetadata[pathname]) return pageMetadata[pathname];
  if (pathname.startsWith("/recursos/cfop/")) return cfopMetadata(pathname);

  return {
    title: "Pagina nao encontrada | Rocha & Barbosa",
    description: "A pagina solicitada nao foi encontrada.",
    noIndex: true,
  };
}

function setMeta(selector, attribute, value) {
  let element = document.head.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    document.head.appendChild(element);
  }
  element.setAttribute(attribute, value);
}

function setLink(rel, href) {
  let element = document.head.querySelector(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement("link");
    element.setAttribute("rel", rel);
    document.head.appendChild(element);
  }
  element.setAttribute("href", href);
}

export default function SEO() {
  const { pathname } = useLocation();
  const metadata = useMemo(() => getMetadata(pathname), [pathname]);

  useEffect(() => {
    const canonical = `${SITE_URL}${pathname === "/" ? "/" : pathname}`;
    const isPrivateRoute = ["/login", "/registro", "/admin"].includes(pathname);
    const noIndex = metadata.noIndex || isPrivateRoute;

    document.title = metadata.title;
    setMeta('meta[name="description"]', "name", "description");
    document.head.querySelector('meta[name="description"]').setAttribute("content", metadata.description);
    setMeta('meta[name="robots"]', "name", "robots");
    document.head.querySelector('meta[name="robots"]').setAttribute("content", noIndex ? "noindex, nofollow" : "index, follow");
    setMeta('meta[property="og:title"]', "property", "og:title");
    document.head.querySelector('meta[property="og:title"]').setAttribute("content", metadata.title);
    setMeta('meta[property="og:description"]', "property", "og:description");
    document.head.querySelector('meta[property="og:description"]').setAttribute("content", metadata.description);
    setMeta('meta[property="og:url"]', "property", "og:url");
    document.head.querySelector('meta[property="og:url"]').setAttribute("content", canonical);
    setMeta('meta[property="og:type"]', "property", "og:type");
    document.head.querySelector('meta[property="og:type"]').setAttribute("content", "website");
    setMeta('meta[property="og:locale"]', "property", "og:locale");
    document.head.querySelector('meta[property="og:locale"]').setAttribute("content", "pt_BR");
    setMeta('meta[property="og:image"]', "property", "og:image");
    document.head.querySelector('meta[property="og:image"]').setAttribute("content", SOCIAL_IMAGE);
    setMeta('meta[property="og:image:width"]', "property", "og:image:width");
    document.head.querySelector('meta[property="og:image:width"]').setAttribute("content", "1717");
    setMeta('meta[property="og:image:height"]', "property", "og:image:height");
    document.head.querySelector('meta[property="og:image:height"]').setAttribute("content", "916");
    setMeta('meta[name="twitter:card"]', "name", "twitter:card");
    document.head.querySelector('meta[name="twitter:card"]').setAttribute("content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", "twitter:title");
    document.head.querySelector('meta[name="twitter:title"]').setAttribute("content", metadata.title);
    setMeta('meta[name="twitter:description"]', "name", "twitter:description");
    document.head.querySelector('meta[name="twitter:description"]').setAttribute("content", metadata.description);
    setMeta('meta[name="twitter:image"]', "name", "twitter:image");
    document.head.querySelector('meta[name="twitter:image"]').setAttribute("content", SOCIAL_IMAGE);
    setLink("canonical", canonical);

    const graph = [
      {
        "@type": "AccountingService",
        "@id": `${SITE_URL}/#business`,
        name: BRAND,
        url: SITE_URL,
        logo: LOGO_URL,
        image: SOCIAL_IMAGE,
        telephone: "+551434351298",
        email: "contabilidade@rochaebarbosa.com.br",
        description:
          "Escritorio de contabilidade em Pederneiras para rotinas contabeis e fiscais, abertura e regularizacao empresarial e suporte a sistemas ERP.",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Duque de Caxias, 294",
          addressLocality: "Pederneiras",
          addressRegion: "SP",
          postalCode: "17280-029",
          addressCountry: "BR",
        },
        hasMap: MAPS_URL,
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "08:00",
            closes: "12:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "13:00",
            closes: "18:00",
          },
        ],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+5514991269374",
          contactType: "customer service",
          availableLanguage: ["Portuguese", "Spanish"],
        },
        sameAs: [
          "https://www.linkedin.com/in/rochaebarbosa-assessoria-e-contabilidade-227824338",
          "https://www.instagram.com/rochabarbosa.assessoria/",
          "https://www.facebook.com/profile.php?id=61567229489343",
        ],
        areaServed: [
          { "@type": "City", name: "Pederneiras" },
          { "@type": "City", name: "Bauru" },
          { "@type": "Country", name: "Brasil" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        inLanguage: "pt-BR",
        publisher: { "@id": `${SITE_URL}/#business` },
      },
      {
        "@type": "WebPage",
        "@id": canonical,
        url: canonical,
        name: metadata.title.replace(" | Rocha & Barbosa", ""),
        description: metadata.description,
        inLanguage: "pt-BR",
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
    ];

    if (metadata.service) {
      graph.push({
        "@type": "Service",
        name: metadata.service,
        description: metadata.description,
        provider: { "@id": `${SITE_URL}/#business` },
        url: canonical,
      });
    }

    if (metadata.breadcrumbs) {
      graph.push({
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: `${SITE_URL}/` },
          ...metadata.breadcrumbs.map(([name, path], index) => ({
            "@type": "ListItem",
            position: index + 2,
            name,
            item: `${SITE_URL}${path}`,
          })),
        ],
      });
    }

    let script = document.getElementById("site-structured-data");
    if (!script) {
      script = document.createElement("script");
      script.id = "site-structured-data";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify({ "@context": "https://schema.org", "@graph": graph });
  }, [metadata, pathname]);

  return null;
}
