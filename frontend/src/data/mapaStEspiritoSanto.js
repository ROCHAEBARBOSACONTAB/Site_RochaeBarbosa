export const espiritoSantoStSources = {
  portaria16: "https://www.legisweb.com.br/legislacao/?id=376638",
  ricms: "https://sefaz.es.gov.br/Media/Sefaz/Legisla%C3%A7%C3%A3o/Legislacao-em-Destaque/RICMS%20Consolidado%20-%20Texto%20-%20PARA%20CONSULTA.%20-%20ATUALIZADO%20%282%29-1.pdf",
  decreto3968: "https://www.legisweb.com.br/legislacao/?id=320257",
  decreto3215: "https://www2.sefaz.es.gov.br/LegislacaoOnline/lpext.dll/infobaselegislacaoonline/decretos/2013/dec3215-r.htm?2.0=&f=templates&fn=document-frame.htm",
  autopecas: "https://sefaz.es.gov.br/Media/Sefaz/Not%C3%ADcias/Di%C3%A1rio%20Oficial%20ICMS%20Autope%C3%A7as%20Portaria.pdf",
  decreto6344: "https://ioes.dio.es.gov.br/apifront/portal/edicoes/publicacoes_ver_conteudo/1892863/10986",
  decreto6357: "https://ioes.dio.es.gov.br/apifront/portal/edicoes/publicacoes_ver_conteudo/1898502/11013",
};

const activeGroups = [
  ["I", "Derivados do fumo", "Vigente"],
  ["II", "Bebidas frias", "Vigente"],
  ["III", "Bebidas quentes", "Alterações por itens"],
  ["IV", "Cimento", "Vigente"],
  ["V", "Café torrado ou moído", "Vigente"],
  ["VI", "Biscoitos, pães industrializados e massas", "Alterações por itens"],
  ["VII", "Óleos comestíveis e azeites", "Vigente"],
  ["VIII", "Açúcar de cana", "Vigente"],
  ["IX", "Marketing porta a porta", "Vigente"],
  ["X", "Medicamentos e produtos farmacêuticos", "Alterações por itens"],
  ["XI", "Picolés, sorvetes e preparados para sorvetes", "Vigente"],
  ["XII", "Pneumáticos, câmaras de ar e protetores", "Vigente"],
  ["XIII", "Tintas e vernizes", "Vigente"],
  ["XIV", "Veículos automotores", "Alterações por itens"],
  ["XV", "Aparelhos e lâminas de barbear", "Vigente"],
  ["XVI", "Lâmpadas, diodos e aparelhos de iluminação", "Vigente"],
  ["XVII", "Rações tipo pet", "Vigente"],
  ["XVIII", "Aparelhos celulares e cartões inteligentes", "Vigente"],
  ["XX", "Materiais de limpeza", "Vigente"],
  ["XXI", "Materiais de construção e congêneres", "Vigente"],
  ["XXII", "Carnes e produtos comestíveis", "Vigente"],
  ["XXIII", "Farinha de trigo, misturas e preparações para pães e bolos", "Vigente"],
  ["XXXIV", "Produtos à base de cereais e salgadinhos", "Alterações por itens"],
];

const changes = new Map([
  ["II", ["Atualização material", "Portaria nº 16-R e atos posteriores", "A MVA e os subitens devem ser conferidos na versão vigente da Portaria"]],
  ["III", ["Atualização material", "Portaria nº 93-R/2025", "Alteração de MVA para vinhos; efeitos a partir de 01/11/2025"]],
  ["VI", ["Atualização material", "Portaria nº 30-R/2026", "Adequação da relação de produtos e MVA aplicável ao grupo"]],
  ["X", ["Atualização material", "Portaria nº 16-R e atos posteriores", "A incidência depende da lista aplicável, PMC e classificação do produto"]],
  ["XIV", ["Atualização material", "Portaria nº 6-R/2025", "Atualização de subitens e classificações do grupo de veículos"]],
  ["XXXIV", ["Inclusão vigente", "Decretos nº 6.344-R e nº 6.357-R/2026", "Eficácia a partir de 01/05/2026 para os produtos expressamente listados"]],
]);

export const espiritoSantoStSegments = activeGroups.map(([id, title, status]) => ({
  id: `es-grupo-${id.toLowerCase()}`,
  annex: id,
  title,
  status,
  source: id === "XXXIV" ? "decreto6344" : "portaria16",
  scope: "A aplicação exige a correspondência entre descrição legal, NCM/SH, CEST, operação e vigência. O grupo não dispensa a conferência do subitem aplicável.",
  events: [["Relação vigente", "Portaria nº 16-R/2019", "Base operacional da relação de produtos e MVA do ICMS-ST no ES"], ...(changes.has(id) ? [changes.get(id)] : [])],
}));

const revokedIncises = ["VIII", "IX", "X", "XIII", "XVIII", "XXV", "XXIX", "XXX"];

espiritoSantoStSegments.push(...revokedIncises.map((id) => ({
  id: `es-historico-${id.toLowerCase()}`,
  annex: `historico-${id}`,
  label: `Art. 265 · Inciso ${id}`,
  title: `Inciso ${id} do art. 265 do RICMS/ES`,
  status: "Seção revogada",
  source: "decreto3968",
  scope: "Referência histórica mantida para auditoria. Este inciso foi revogado integralmente e não compõe a relação vigente de mercadorias sujeitas ao ICMS-ST.",
  events: [["Revogação integral", "Decreto nº 3.968-R/2016 · art. 6º, III", "Efeitos conforme o ato revogador"]],
})));

espiritoSantoStSegments.push({
  id: "es-autopecas",
  annex: "historico-autopecas",
  label: "Portaria 16-R · Item XIX",
  title: "Autopeças",
  status: "Regime substituído",
  source: "autopecas",
  scope: "O item XIX da lista de substituição tributária foi revogado. As autopeças passaram a observar a relação e as condições do regime de antecipação parcial, que é juridicamente distinto da ST.",
  events: [["Mudança de regime", "Portaria nº 13-R/2022 · arts. 1º e 7º", "Efeitos a partir de 01/02/2022"]],
});

export const espiritoSantoStSections = espiritoSantoStSegments.map((segment) => ({
  id: segment.annex,
  label: segment.label || `Grupo ${segment.annex}`,
  title: segment.title,
  status: segment.status,
}));
