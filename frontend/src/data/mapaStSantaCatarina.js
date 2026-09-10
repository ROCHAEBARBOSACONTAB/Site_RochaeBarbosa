export const santaCatarinaStSources = {
  anexo1A: "https://legislacao.sef.sc.gov.br/legtrib_internet/html/regulamentos/icms/ricms_01_01_a.htm",
  anexo1AHistory: "https://legislacao.sef.sc.gov.br/html/regulamentos/icms/ricms_01_01_a_pas.htm",
  anexo3: "https://legislacao.sef.sc.gov.br/legtrib_internet/html/regulamentos/icms/ricms_01_03.htm",
  atoDiat012: "https://legislacao.sef.sc.gov.br/html/atos_diat/2026/atodiat_26_012.htm",
  atosDiat2026: "https://legislacao.sef.sc.gov.br/legtrib_internet/indices/atos_diat/indice_atos_diat.htm",
};

const currentSections = [
  ["III-A", "Bebidas alcoólicas, exceto cerveja e chope", "art. 40"],
  ["IV", "Cervejas, chopes, refrigerantes e outras bebidas", "arts. 41 a 42-A"],
  ["V", "Cigarros e outros produtos derivados do fumo", "arts. 56 e 57"],
  ["VI", "Cimentos", "arts. 45 e 46"],
  ["VII", "Combustíveis e lubrificantes", "arts. 149 a 205"],
  ["VIII", "Energia elétrica", "arts. 245 a 249"],
  ["XVI", "Pneumáticos, câmaras de ar e protetores de borracha", "arts. 53 a 55"],
  ["XXIV", "Veículos automotores", "arts. 47 a 49"],
  ["XXV", "Veículos de duas e três rodas motorizados", "arts. 50 a 52"],
  ["XXVI", "Venda de mercadorias pelo sistema porta a porta", "arts. 66 a 70"],
];

const revokedSections = [
  ["II", "Autopeças", "Decreto nº 479/2020 · art. 3º", "01/04/2020"],
  ["III", "Bebidas alcoólicas, exceto cerveja e chope", "Decreto nº 982/2020 · art. 3º", "01/01/2021"],
  ["IX", "Ferramentas", "Decreto nº 104/2019 · art. 1º", "01/05/2019"],
  ["X", "Lâmpadas, reatores e starter", "Decreto nº 104/2019 · art. 1º", "01/05/2019"],
  ["XI", "Materiais de construção e congêneres", "Decreto nº 104/2019 · art. 1º", "01/05/2019"],
  ["XII", "Materiais de limpeza", "Decreto nº 1.541/2018 · art. 3º, I, a", "01/04/2018"],
  ["XIII", "Materiais elétricos", "Decreto nº 104/2019 · art. 1º", "01/05/2019"],
  ["XIV", "Medicamentos de uso humano e outros produtos farmacêuticos", "Decreto nº 982/2020 · art. 3º", "01/01/2021"],
  ["XV", "Papéis, plásticos, produtos cerâmicos e vidros", "Decreto nº 1.541/2018 · art. 3º, I, b", "01/04/2018"],
  ["XVII", "Produtos alimentícios", "Decreto nº 1.541/2018 · art. 3º, I, c", "01/04/2018"],
  ["XVIII", "Produtos de papelaria", "Decreto nº 104/2019 · art. 1º", "01/05/2019"],
  ["XIX", "Produtos de perfumaria e higiene pessoal e cosméticos", "Decreto nº 982/2020 · art. 3º", "01/01/2021"],
  ["XX", "Produtos eletrônicos, eletroeletrônicos e eletrodomésticos", "Decreto nº 104/2019 · art. 1º", "01/05/2019"],
  ["XXI", "Rações para animais domésticos", "Decreto nº 463/2020 · art. 3º, II", "01/03/2020"],
  ["XXII", "Sorvetes e preparados para fabricação de sorvetes em máquinas", "Decreto nº 74/2023 · art. 1º", "01/04/2023"],
  ["XXIII", "Tintas e vernizes", "Decreto nº 104/2019 · art. 1º", "01/05/2019"],
];

export const santaCatarinaStSections = [
  ...currentSections.map(([id, title]) => ({ id, label: `Seção ${id}`, title, status: id === "IV" ? "Alterações por itens" : "Vigente" })),
  ...revokedSections.map(([id, title]) => ({ id, label: `Seção ${id}`, title, status: "Seção revogada" })),
].sort((left, right) => left.id.localeCompare(right.id, "pt-BR", { numeric: true }));

const currentSegments = currentSections.map(([section, title, rules]) => {
  const isColdBeverage = section === "IV";
  const isFuel = section === "VII";
  const isVehicle = section === "XXIV";
  const isMotorcycle = section === "XXV";
  return {
    id: `sc-secao-${section.toLowerCase()}`,
    annex: section,
    title,
    status: isColdBeverage ? "Alterações por itens" : "Vigente",
    scope: "A incidência interna exige conferir mercadoria, NCM, CEST, descrição legal, base de cálculo e demais condições da operação. A presença na seção não dispensa a análise do item específico.",
    source: isColdBeverage ? "atoDiat012" : (isFuel || isVehicle || isMotorcycle ? "anexo1AHistory" : "anexo1A"),
    events: [
      ["Relação de mercadorias", `RICMS/SC-01 · Anexo 1-A · Seção ${section}`, "Texto consolidado vigente"],
      ["Regras da substituição tributária", `RICMS/SC-01 · Anexo 3 · ${rules}`, "Conferência por operação"],
      ...(section === "III-A" ? [["Histórico da seção", "Seção III revogada pelo Decreto nº 982/2020", "Efeitos em 01/01/2021; relação atual na Seção III-A"], ["Item revogado", "CEST 02.024.00 · vinhos e espumantes", "Decreto nº 252/2019; efeitos em 01/10/2019"]] : []),
      ...(isColdBeverage ? [["PMPF", "Ato DIAT nº 012/2026", "Vigência-base de 01/04/2026 a 30/11/2026"], ["Alterações do PMPF", "Atos DIAT nº 24, 27, 34, 43 e 46/2026", "Conferir o ato vigente antes da apuração"]] : []),
      ...(isColdBeverage ? [["Itens revogados", "CEST 03.001.00 a 03.006.00", "Decreto nº 463/2020; efeitos em 01/03/2020"], ["Itens reincluídos", "CEST 03.007.00 e 03.008.00", "Alteração 4.808; efeitos em 31/10/2024"], ["Itens revogados", "CEST 03.014.00 e 03.016.00", "Decreto nº 1.339/2021; efeitos em 01/06/2021"]] : []),
      ...(isFuel ? [["Itens revogados", "CEST 06.001.00, 06.002.00 a 06.002.03, 06.006.00 a 06.006.10, 06.011.00 a 06.011.07 e 06.016.00", "Decreto nº 1.112/2025; efeitos em 11/08/2025"], ["Item incluído", "CEST 06.019.00 · nafta não petroquímica", "Alteração 4.908; efeitos em 01/11/2025"]] : []),
      ...(isVehicle ? [["Itens incluídos", "CEST 25.030.00 e 25.031.00 · veículos híbridos", "Alteração 4.814; efeitos em 01/11/2024"], ["Item incluído", "CEST 25.032.00 · veículo elétrico de carga", "Alteração 4.892; efeitos em 31/03/2025"], ["Exceção interestadual", "CEST 25.032.00 nas operações com RS e SP", "Sem aplicação de ST; art. 51, V, Anexo 3"]] : []),
      ...(isMotorcycle ? [["Item alterado e incluído", "CEST 26.001.00 e 26.001.01 · ciclos motorizados", "Alteração 4.534; efeitos em 22/07/2022"], ["Exceção interestadual", "CEST 26.001.01 nas operações com SP", "Sem aplicação de ST; art. 51, IV, Anexo 3"]] : []),
    ],
  };
});

const revokedSegments = revokedSections.map(([section, title, act, effectiveDate]) => ({
  id: `sc-secao-${section.toLowerCase()}-revogada`,
  annex: section,
  title,
  status: "Seção revogada",
  scope: "Seção integralmente revogada para fins da substituição tributária em Santa Catarina. A referência permanece no mapa para auditoria histórica e não indica incidência atual.",
  source: "anexo1AHistory",
  events: [["Relação histórica", `RICMS/SC-01 · Anexo 1-A · Seção ${section}`, "Texto anterior consolidado"], ["Revogação", act, `Efeitos a partir de ${effectiveDate}`]],
}));

export const santaCatarinaStSegments = [...currentSegments, ...revokedSegments];
