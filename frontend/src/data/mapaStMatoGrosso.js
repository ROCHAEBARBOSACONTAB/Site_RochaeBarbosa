export const matoGrossoStSources = {
  apendice: "https://www.sefaz.mt.gov.br/legislacao/SubIndice.aspx?ID=214",
  anexo: "https://www.sefaz.mt.gov.br/legislacao/SubIndice.aspx?ID=212",
};

const segments = [
  ["01", "Autopeças"],
  ["02", "Bebidas alcoólicas, exceto cerveja e chope"],
  ["03", "Cervejas, chopes, refrigerantes, águas e outras bebidas"],
  ["04", "Cigarros e outros produtos derivados do fumo"],
  ["05", "Cimentos"],
  ["06", "Combustíveis e lubrificantes"],
  ["07", "Energia elétrica"],
  ["08", "Ferramentas"],
  ["09", "Lâmpadas, reatores e starter"],
  ["10", "Materiais de construção e congêneres"],
  ["11", "Materiais de limpeza"],
  ["12", "Materiais elétricos"],
  ["13", "Medicamentos de uso humano e outros produtos farmacêuticos"],
  ["14", "Papéis, plásticos, produtos cerâmicos e vidros"],
  ["16", "Pneumáticos, câmaras de ar e protetores de borracha"],
  ["17", "Produtos alimentícios"],
  ["19", "Produtos de papelaria"],
  ["20", "Produtos de perfumaria, higiene pessoal e cosméticos"],
  ["21", "Produtos eletrônicos, eletroeletrônicos e eletrodomésticos"],
  ["22", "Rações para animais domésticos"],
  ["23", "Sorvetes e preparados para fabricação de sorvetes em máquinas"],
  ["24", "Tintas e vernizes"],
  ["25", "Veículos automotores"],
  ["26", "Veículos de duas e três rodas motorizados"],
  ["28", "Venda de mercadorias pelo sistema porta a porta"],
];

const changes = {
  "01": [["Item revogado", "Item 110.0 da Tabela II", "Decreto nº 312/2019; revogação anotada no texto consolidado"]],
  "02": [["Item revogado", "Item 24.0 da Tabela III", "Decreto nº 1.932/2026; efeitos a partir de 01/04/2026"]],
  "03": [["Itens revogados", "Itens 1.0, 2.0 e 4.0 da Tabela IV", "Convênio ICMS 150/2020; efeitos a partir de 01/06/2021"]],
  "17": [["Itens revogados", "Itens 12.0 a 19.3 da Tabela XVII", "Decreto nº 1.972/2026; efeitos a partir de 01/05/2026"]],
};

export const matoGrossoStSections = segments.map(([id, title]) => ({
  id,
  label: `Segmento ${id}`,
  title,
  status: changes[id] ? "Alterações por itens" : "Vigente",
}));

export const matoGrossoStSegments = segments.map(([id, title]) => ({
  id: `mt-segmento-${id}`,
  annex: id,
  title,
  status: changes[id] ? "Alterações por itens" : "Vigente",
  source: "apendice",
  scope: "A incidência depende da conferência conjunta do item, NCM, CEST, descrição legal e condições da operação. Alterações indicadas nesta consulta alcançam os itens apontados, sem revogar todo o segmento.",
  events: [
    ["Relação de mercadorias", "RICMS/MT · Anexo X · Apêndice", "Consultar a tabela do segmento, NCM, CEST, descrição legal e condições de incidência"],
    ...(changes[id] || []),
  ],
}));
