export const rioDeJaneiroStSources = {
  anexo: "https://taxpratico.com.br/assets/media/RICMS_RJ/anexo_I_livroII.pdf",
  consulta056: "https://legislacao.fazenda.rj.gov.br/wp-content/uploads/056.pdf",
  consulta098: "https://portal.fazenda.rj.gov.br/consulta-tributaria/wp-content/uploads/sites/45/2025/01/098_2024.pdf",
  decreto47864: "https://mgcontecnica.com.br/comunicados/2021/12/RJ/info/380/ANEXO_II_ID_31021.pdf",
  lei2657: "https://www3.alerj.rj.gov.br/lotus_notes/default.asp?id=6&url=L2NvbnRsZWkubnNmL2M4YWEwOTAwMDI1ZmVlZjYwMzI1NjRlYzAwNjBkZmZmLzAxY2MwNGVlZTUzYjNiMzAwMzI1NjRmYjAwNWMyZGRmP09wZW5Eb2N1bWVudA%3D%3D",
  decreto48039: "https://portal.fazenda.rj.gov.br/consulta-tributaria/wp-content/uploads/sites/45/2023/10/c018-23-SEI-040079-003810-22.pdf",
};

const items = [
  [1, "Cervejas, chopes, refrigerantes, águas e outras bebidas", "Aplicação suspensa"],
  [2, "Cigarros e outros produtos derivados do fumo", "Alterações por itens"],
  [3, "Cimentos", "Vigente"],
  [4, "Energia elétrica não destinada à comercialização ou à industrialização", "Alterações por itens"],
  [5, "Aparelhos de barbear e lâminas de barbear", "Vigente"],
  [6, "Lâmpadas, reatores e starter", "Vigente"],
  [7, "Peças, partes e acessórios para veículos automotores", "Vigente"],
  [8, "Acumuladores elétricos", "Vigente"],
  [9, "Pneumáticos, câmaras de ar e protetores de borracha", "Alterações por itens"],
  [10, "Medicamentos de uso humano e outros produtos farmacêuticos", "Alterações por itens"],
  [11, "Ração tipo pet para animais domésticos", "Vigente"],
  [12, "Sorvetes e preparados para fabricação de sorvetes em máquinas", "Aplicação suspensa"],
  [13, "Tintas e vernizes", "Alterações por itens"],
  [14, "Veículos automotores", "Alterações por itens"],
  [15, "Veículos de duas e três rodas motorizados", "Vigente"],
  [16, "Aparelhos celulares", "Vigente"],
  [17, "Pneus e câmaras de ar dos tipos utilizados em bicicletas", "Vigente"],
  [18, "Ferramentas", "Vigente"],
  [19, "Papelaria", "Vigente"],
  [20, "Produtos eletrônicos, eletroeletrônicos e eletrodomésticos", "Alterações por itens"],
  [21, "Vendas por sistema de marketing direto porta a porta", "Alterações por itens"],
  [22, "Materiais de limpeza", "Vigente"],
  [23, "Produtos alimentícios", "Aplicação suspensa"],
  [24, "Materiais de construção e congêneres", "Alterações por itens"],
  [25, "Máquinas e aparelhos mecânicos, elétricos, eletromecânicos e automáticos", "Vigente"],
  [26, "Materiais elétricos", "Vigente"],
  [27, "Artefatos de uso doméstico", "Vigente"],
  [28, "Cosméticos, perfumaria, artigos de higiene pessoal e de toucador", "Alterações por itens"],
  [29, "Bebidas alcoólicas, exceto cerveja e chope", "Aplicação suspensa"],
];

const changedItems = new Set([2, 4, 9, 10, 13, 14, 20, 21, 24, 28]);
const suspendedItems = new Map([
  [1, "Água mineral ou potável envasada, nas hipóteses legais. A suspensão não alcança automaticamente os demais produtos do item."],
  [12, "Sorvetes de qualquer espécie, inclusive sanduíches e acessórios. Preparados para fabricação exigem conferência do NCM e da descrição."],
  [23, "Leite, laticínios e correlatos incluídos na relação legal. Os demais subgrupos alimentícios permanecem sujeitos à análise própria."],
  [29, "Vinhos e as bebidas alcoólicas listadas na lei, incluindo cachaça, aguardente e outras destiladas ou fermentadas. A suspensão não equivale à revogação do item."],
]);

function currentItem([id, title, status]) {
  const changed = changedItems.has(id);
  const suspended = suspendedItems.get(id);
  const source = suspended ? "lei2657" : changed ? "decreto47864" : id === 7 || id === 20 || id === 24 ? "consulta056" : "anexo";
  const events = [["Relação vigente", "RICMS/RJ · Livro II · Anexo I", "NCM, CEST, descrição legal, operação e data do fato gerador devem ser analisados em conjunto"]];

  if (changed) events.push(["Alteração material", "Decreto nº 47.864/2021", "Atualização de lista, fundamento normativo, MVA ou inclusão de subitens; vigência em 10/12/2021"]);
  if (suspended) events.push(["Aplicação suspensa", "Lei nº 2.657/1996, art. 22, parágrafo único, e Decreto nº 48.039/2022", "Suspensão vigente para o grupo legal específico, sem revogação da lista do Anexo I"]);

  return {
    id: `rj-item-${id}`,
    annex: `item-${id}`,
    title,
    status,
    source,
    scope: suspended
      ? suspended
      : "A incidência exige correspondência cumulativa entre NCM/SH, CEST e descrição legal, além da operação e da vigência aplicáveis.",
    events,
  };
}

const historical = [
  {
    id: "rj-item-7-subitem-7-110",
    annex: "historico-7-110",
    label: "Item 7 · Subitem 7.110",
    title: "Corrente de transmissão",
    status: "Itens revogados",
    source: "decreto47864",
    scope: "Referência histórica preservada para auditoria. A revogação alcançou exclusivamente o subitem 7.110 do item de autopeças, sem revogar o item 7 integralmente.",
    events: [["Revogação parcial", "Decreto nº 47.864/2021 · art. 3º, I", "Vigente desde 10/12/2021"]],
  },
  {
    id: "rj-item-24-subitem-24-23",
    annex: "historico-24-23",
    label: "Item 24 · Subitem 24.23",
    title: "Telha, cumeeira e caixa d'água de fibrocimento ou cimento-celulose",
    status: "Itens revogados",
    source: "decreto47864",
    scope: "Referência histórica preservada para auditoria. A revogação alcançou exclusivamente o subitem 24.23 do item de materiais de construção e congêneres.",
    events: [["Revogação parcial", "Decreto nº 47.864/2021 · art. 3º, II", "Vigente desde 10/12/2021"]],
  },
];

export const rioDeJaneiroStSegments = [...items.map(currentItem), ...historical];

export const rioDeJaneiroStSections = rioDeJaneiroStSegments.map((segment) => ({
  id: segment.annex,
  label: segment.label || `Item ${segment.annex.replace("item-", "")}`,
  title: segment.title,
  status: segment.status,
}));
