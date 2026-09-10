export const matoGrossoDoSulStSources = {
  ricms: "https://aacpdappls.net.ms.gov.br/appls/legislacao/serc/legato.nsf/34248fea4d6a6d2a04256b210079ce20/31511cecb1ac450a04256d6400483d13",
  decreto14645: "https://www.legisweb.com.br/legislacao/?id=334817",
  decreto16467: "https://www.spdo.ms.gov.br/diariodoe/Index/Download/DO11562_22_07_2024",
  decreto16584: "https://aacpdappls.net.ms.gov.br/appls/legislacao/serc/legato.nsf/fd8600de8a55c7fc04256b210079ce25/15b08cafe9554b3004258c4b004dd780?OpenDocument=",
  decreto16618: "https://aacpdappls.net.ms.gov.br/appls/legislacao/serc/legato.nsf/7382b3a89b695e7a04256b1f00725c1e/24d232d76ea38b9204258c7c004bc0ce",
  decreto16640: "https://www.spdo.ms.gov.br/diariodoe/Index/Download/DO11863_25_06_2025",
};

const segments = [
  ["01", "Autopeças", "Tabela II"], ["02", "Bebidas alcoólicas, exceto cerveja e chope", "Tabelas III-A e III-B"],
  ["03", "Cervejas, chopes, refrigerantes, águas e outras bebidas", "Tabelas IV-A e IV-B"], ["04", "Cigarros e outros produtos derivados do fumo", "Tabela V"],
  ["05", "Cimentos", "Tabela VI"], ["06", "Combustíveis e lubrificantes", "Tabela VII"], ["07", "Energia elétrica", "Tabela VIII"],
  ["08", "Ferramentas", "Tabela IX"], ["09", "Lâmpadas, reatores e starter", "Tabela X"], ["10", "Materiais de construção e congêneres", "Tabela XI"],
  ["11", "Materiais de limpeza", "Tabela XII"], ["12", "Materiais elétricos", "Tabela XIII"], ["13", "Medicamentos de uso humano e outros produtos farmacêuticos", "Tabela XIV"],
  ["14", "Papéis, plásticos, produtos cerâmicos e vidros", "Tabela XV"], ["15", "Plásticos", "Segmento incorporado ao item 14"],
  ["16", "Pneumáticos, câmaras de ar e protetores de borracha", "Tabela XVI"], ["17", "Produtos alimentícios", "Tabela XVIII"],
  ["18", "Produtos cerâmicos", "Segmento incorporado ao item 14"], ["19", "Produtos de papelaria", "Tabela XX"],
  ["20", "Produtos de perfumaria, higiene pessoal e cosméticos", "Tabela XXI"], ["21", "Produtos eletrônicos, eletroeletrônicos e eletrodomésticos", "Tabela XXII"],
  ["22", "Rações para animais domésticos", "Tabela XXIII"], ["23", "Sorvetes e preparados para fabricação de sorvetes em máquinas", "Tabela XXIV"],
  ["24", "Tintas e vernizes", "Tabela XXV"], ["25", "Veículos automotores", "Tabela XXVI"], ["26", "Veículos de duas e três rodas motorizados", "Tabela XXVII"],
  ["27", "Vidros", "Segmento incorporado ao item 14"], ["28", "Venda de mercadorias pelo sistema porta a porta", "Tabela XXVIII"],
];

const revoked = {
  "15": ["Decreto nº 14.645/2016 · art. 1º", "30/12/2016", "decreto14645"],
  "18": ["Decreto nº 14.645/2016 · art. 1º", "30/12/2016", "decreto14645"],
  "19": ["Decreto nº 16.467/2024 · art. 1º", "01/08/2024", "decreto16467"],
  "27": ["Decreto nº 14.645/2016 · art. 1º", "30/12/2016", "decreto14645"],
};

const changes = new Set(["06", "14", "21", "25"]);

export const matoGrossoDoSulStSections = segments.map(([id, title]) => ({ id, label: `Segmento ${id}`, title, status: revoked[id] ? "Seção revogada" : changes.has(id) ? "Alterações por itens" : "Vigente" }));

function eventsFor(id, table) {
  const events = [["Relação de mercadorias", `RICMS/MS · Anexo III · Subanexo I · ${table}`, "Consultar NCM, CEST, descrição legal e MVA por operação"]];
  if (id === "06") events.push(["Item incluído", "CEST 06.019.00 · naftas, exceto nafta petroquímica", "Decreto nº 16.640/2025; Convênio ICMS 181/2024"]);
  if (id === "14") events.push(["Consolidação de segmentos", "Papéis, plásticos, produtos cerâmicos e vidros", "Decreto nº 14.645/2016 reuniu os antigos segmentos 14, 15, 18 e 27"]);
  if (id === "21") events.push(["Itens excluídos", "Itens 1 a 121, 126 e 127 da Tabela XXII", "Decreto nº 16.584/2025; efeitos em 01/04/2025"], ["Itens repristinados", "CEST 21.122.00 a 21.125.00", "Decreto nº 16.618/2025; efeitos desde 01/04/2025"]);
  if (id === "25") events.push(["Item incluído", "CEST 25.032.00 · veículo elétrico de carga", "Decreto nº 16.640/2025; Convênio ICMS 174/2024"]);
  return events;
}

export const matoGrossoDoSulStSegments = segments.map(([id, title, table]) => {
  const historical = revoked[id];
  if (historical) {
    const [act, effectiveDate, source] = historical;
    return { id: `ms-segmento-${id}-revogado`, annex: id, title, status: "Seção revogada", source,
      scope: "Segmento revogado ou incorporado a outro segmento do Subanexo I. A referência é mantida exclusivamente para auditoria histórica e não indica incidência autônoma atual.",
      events: [["Referência histórica", `RICMS/MS · Anexo III · Subanexo I · Segmento ${id}`, "Texto anterior consolidado"], ["Revogação", act, `Efeitos a partir de ${effectiveDate}`]], };
  }
  return { id: `ms-segmento-${id}`, annex: id, title, status: changes.has(id) ? "Alterações por itens" : "Vigente", source: "ricms",
    scope: "A incidência interna exige conferir o item, NCM, CEST, descrição legal, MVA e condições da operação. A presença no segmento não dispensa a validação da mercadoria específica.", events: eventsFor(id, table) };
});
