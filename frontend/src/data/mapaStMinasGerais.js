export const minasGeraisStSources = {
  ricms: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/anexovii2023seco.pdf",
  parte2: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/ricms_2023_seco/anexovii2023_4.html",
  decreto48803: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/2024/d48803_2024.html",
  decreto48889: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/2024/d48889_2024.html",
  decreto48998: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/2025/d48998_2025.html",
  decreto49041: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/2025/d49041_2025.html",
  decreto49236: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/2026/d49236_2026.html",
  decreto49252: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/2026/d49252_2026.html",
  decreto49273: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/2026/d49273_2026.html",
  decreto49275: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/2026/d49275_2026.html",
  decreto49281: "https://www.fazenda.mg.gov.br/empresas/legislacao_tributaria/decretos/2026/d49281_2026.html",
};

const chapters = [
  ["1", "Autopeças"],
  ["2", "Bebidas alcoólicas, exceto cerveja e chope"],
  ["3", "Cervejas, chopes, refrigerantes, águas e outras bebidas"],
  ["4", "Cigarros e outros produtos derivados do fumo"],
  ["5", "Cimentos"],
  ["6", "Combustíveis e lubrificantes"],
  ["7", "Energia elétrica"],
  ["8", "Ferramentas"],
  ["9", "Lâmpadas, reatores e starter"],
  ["10", "Materiais de construção e congêneres"],
  ["11", "Materiais de limpeza"],
  ["12", "Materiais elétricos"],
  ["13", "Medicamentos de uso humano e outros produtos farmacêuticos"],
  ["14", "Papéis, plásticos, produtos cerâmicos e vidros"],
  ["15", "Plásticos"],
  ["16", "Pneumáticos, câmaras de ar e protetores de borracha"],
  ["17", "Produtos alimentícios"],
  ["18", "Produtos cerâmicos"],
  ["19", "Produtos de papelaria"],
  ["20", "Produtos de perfumaria e de higiene pessoal e cosméticos"],
  ["21", "Produtos eletrônicos, eletroeletrônicos e eletrodomésticos"],
  ["22", "Rações para animais domésticos"],
  ["23", "Sorvetes e preparados para fabricação de sorvetes em máquinas"],
  ["24", "Tintas e vernizes"],
  ["25", "Veículos automotores"],
  ["26", "Veículos de duas e três rodas motorizados"],
  ["27", "Vidros"],
  ["28", "Venda de mercadorias pelo sistema porta a porta"],
];

// Mudanças oficiais relevantes para consulta interna. Ajustes de protocolo são
// registrados como contexto, sem tratar a alteração interestadual como exclusão em MG.
const chapterMovements = {
  "1": {
    source: "decreto49041",
    events: [["Alteração de âmbito", "Decreto nº 49.041/2025 · Capítulo 1", "Efeitos na publicação (24/05/2025)"]],
  },
  "2": {
    source: "decreto49275",
    events: [["Alteração de âmbito", "Decreto nº 49.275/2026 · Capítulo 2", "Efeitos na publicação (12/08/2026)"]],
  },
  "3": {
    source: "decreto48889",
    events: [["Alterações por itens", "Decreto nº 48.889/2024 · Itens 3.0, 3.1 e 5.0 a 5.5", "Efeitos em 01/09/2024"]],
  },
  "8": {
    source: "decreto48889",
    events: [["Alterações por itens", "Decreto nº 48.889/2024 · Itens 5.0, 6.0, 12.0, 15.0 e 19.0", "Efeitos em 01/09/2024"]],
  },
  "9": {
    source: "decreto49281",
    events: [["Alteração de âmbito", "Decreto nº 49.281/2026 · Capítulo 9", "Efeitos na publicação (29/08/2026)"]],
  },
  "10": {
    source: "decreto49281",
    events: [["Alteração por item", "Decreto nº 49.281/2026 · Item 64.0", "Efeitos na publicação (29/08/2026)"]],
  },
  "11": {
    source: "decreto49281",
    events: [["Alteração de âmbito", "Decreto nº 49.281/2026 · Capítulo 11", "Efeitos na publicação (29/08/2026)"]],
  },
  "17": {
    source: "decreto49273",
    events: [
      ["Alterações por itens", "Decreto nº 48.889/2024 · Itens 4.0 e 109.0", "Efeitos em 01/09/2024"],
      ["Alterações por itens", "Decreto nº 49.273/2026 · Itens 33.0 e 116.0", "Efeitos na publicação (11/08/2026)"],
    ],
  },
  "20": {
    source: "decreto49273",
    events: [
      ["Alteração por item", "Decreto nº 48.998/2025 · Item 43.0", "Efeitos em 01/04/2025"],
      ["Alterações de âmbito", "Decretos nº 49.252/2026 e nº 49.273/2026 · Capítulo 20", "Efeitos em 30/06/2026 e 11/08/2026"],
    ],
  },
  "21": {
    source: "decreto49281",
    events: [
      ["Alterações de âmbito", "Decreto nº 49.236/2026 · Âmbitos 21.1 e 21.4", "Efeitos na publicação (27/05/2026)"],
      ["Alterações por itens", "Decreto nº 49.281/2026 · Itens 11 a 14, 19 a 22, 24 a 27 e 40 a 51", "Efeitos na publicação (29/08/2026)"],
    ],
  },
  "22": {
    source: "decreto49281",
    events: [["Alteração de âmbito", "Decreto nº 49.281/2026 · Capítulo 22", "Efeitos na publicação (29/08/2026)"]],
  },
  "23": {
    source: "decreto48803",
    events: [["Alteração por item", "Decreto nº 48.803/2024 · Item 2.0", "Efeitos em 01/06/2024"]],
  },
  "25": {
    source: "decreto48998",
    events: [["Item incluído", "Decreto nº 48.998/2025 · Item 32.0", "Efeitos em 01/04/2025"]],
  },
  "28": {
    source: "decreto49252",
    events: [["Alteração de âmbito", "Decreto nº 49.252/2026 · Capítulo 28", "Efeitos em 01/07/2026"]],
  },
};

export const minasGeraisStSections = chapters.map(([id, title]) => ({
  id,
  label: `Capítulo ${id}`,
  title,
  status: chapterMovements[id] ? "Alterações por itens" : "Vigente",
}));

export const minasGeraisStSegments = chapters.map(([annex, title]) => {
  const movement = chapterMovements[annex];
  const isChapter27 = annex === "27";
  return {
    id: `mg-capitulo-${annex}`,
    annex,
    title,
    status: movement ? "Alterações por itens" : "Vigente",
    scope: isChapter27
      ? "O Capítulo 27 remete à relação de mercadorias do Capítulo 14. A incidência interna exige conferir a mercadoria, NCM, CEST, âmbito de aplicação e MVA do item correspondente."
      : "Relação vigente na Parte 2 do Anexo VII do RICMS/2023. A incidência interna exige conferir a mercadoria, NCM, CEST, âmbito de aplicação e MVA aplicáveis ao item.",
    source: movement?.source || "ricms",
    events: [
      ["Relação de mercadorias", `RICMS/2023 · Anexo VII · Parte 2 · Capítulo ${annex}`, "Texto consolidado vigente"],
      ...(movement?.events || []),
      ["Critério de consulta", "NCM, CEST, âmbito de aplicação e MVA", "Conferência por item"],
    ],
  };
});
