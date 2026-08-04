import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import cfopData from "../pages/resources/cfop/cfopData.json";

const SITE_URL = "https://www.rochaebarbosa.com.br";
const BRAND = "Rocha & Barbosa Assessoria Contabil";
const SOCIAL_IMAGE = `${SITE_URL}/og-rocha-barbosa.png`;
const LOGO_URL = `${SITE_URL}/rocha-barbosa-logo.png`;

const pageMetadata = {
  "/": {
    title: "Rocha & Barbosa | Inteligência Fiscal e Tributária",
    description:
      "Contabilidade, abertura e regularizacao de empresas, gestao fiscal e suporte a sistemas ERP. Atendimento em Pederneiras, regiao e remoto.",
  },
  "/servicos": {
    title: "Servicos contabeis, fiscais e empresariais | Rocha & Barbosa",
    description:
      "Abertura e regularizacao de empresas, gestao contabil e fiscal, compliance e suporte a ERP para empresas que precisam operar com seguranca.",
    service: "Servicos contabeis, fiscais e empresariais",
  },
  "/servicos/abertura-de-empresa": {
    title: "Abertura e regularizacao de empresa | Rocha & Barbosa",
    description:
      "Abra, altere ou regularize sua empresa com orientacao contabil, fiscal e societaria desde o inicio. Atendimento em Pederneiras, regiao e remoto.",
    service: "Abertura e regularizacao de empresa",
    breadcrumbs: [
      ["Servicos", "/servicos"],
      ["Abertura e regularizacao de empresa", "/servicos/abertura-de-empresa"],
    ],
  },
  "/diagnostico": {
    title: "Diagnostico fiscal e de ERP | Rocha & Barbosa",
    description:
      "Identifique divergencias fiscais, riscos, perdas e oportunidades na operacao. Diagnostico tecnico para processos, obrigacoes e sistemas ERP.",
    service: "Diagnostico fiscal e de ERP",
  },
  "/sobre": {
    title: "Sobre a Rocha & Barbosa Assessoria Contabil",
    description:
      "Conheca a Rocha & Barbosa, assessoria contabil que integra rotina contabil, fiscal e operacao para apoiar decisoes empresariais com clareza.",
  },
  "/contato": {
    title: "Contato | Rocha & Barbosa Assessoria Contabil",
    description:
      "Fale com a Rocha & Barbosa para abertura, regularizacao, contabilidade, fiscal e diagnostico de ERP. Atendimento em Pederneiras, regiao e remoto.",
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
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rua Duque de Caxias, 294",
          addressLocality: "Pederneiras",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        areaServed: ["Pederneiras", "Sao Paulo", "Brasil"],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: BRAND,
        inLanguage: "pt-BR",
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
