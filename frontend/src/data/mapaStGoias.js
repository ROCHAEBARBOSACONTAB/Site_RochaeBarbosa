export const goiasStSources = {
  rcte: "https://appasp.economia.go.gov.br/legislacao/arquivos/Rcte/RCTE.htm",
  consulta: "https://orientacaotributaria.economia.go.gov.br/spo-web/perguntasfrequentes/perguntafrequente/21321",
  decreto8567: "https://appasp.economia.go.gov.br/legislacao/arquivos/decretos/D_08567.htm",
  decreto6663: "https://appasp.economia.go.gov.br/legislacao/arquivos/decretos/D_06663.htm",
  decreto9108: "https://appasp.economia.go.gov.br/legislacao/arquivos/Decretos/D_09108.htm",
  decreto9147: "https://appasp.economia.go.gov.br/legislacao/arquivos/Decretos/D_09147.htm",
  decreto9813: "https://appasp.economia.go.gov.br/legislacao/arquivos/Decretos/D_09813.htm",
  decreto9851: "https://appasp.economia.go.gov.br/legislacao/arquivos/decretos/D_09851.htm",
  decreto10172: "https://appasp.economia.go.gov.br/legislacao/arquivos/Decretos/D_10172.htm",
  decreto10897: "https://appasp.economia.go.gov.br/legislacao/arquivos/Decretos/D_10897.htm",
};

const entries = [
  ["I", "Bebidas", "Alterações por itens"],
  ["II", "Telhas, cumeeiras, caixas d'água e tampas", "Seção revogada"],
  ["III", "Combustíveis e lubrificantes", "Alterações por itens"],
  ["IV", "Veículos automotores novos", "Alterações por itens"],
  ["V", "Pneumáticos, protetores e câmaras de ar de borracha novos", "Vigente"],
  ["VI", "Cigarros e outros produtos derivados do fumo", "Vigente"],
  ["VII", "Tintas e vernizes", "Vigente"],
  ["VIII", "Lâminas e aparelhos de barbear", "Vigente"],
  ["IX", "Lâmpadas elétricas e eletrônicas, reatores e starter", "Vigente"],
  ["X", "Pilhas, acumuladores e baterias elétricas", "Seção revogada"],
  ["XI", "Cimento", "Vigente"],
  ["XII", "Aparelhos de telefonia móvel", "Alterações por itens"],
  ["XIII", "Autopeças", "Seção revogada"],
  ["XIV", "Ração tipo pet para animais domésticos", "Seção revogada"],
  ["XV", "Material de construção, acabamento, bricolagem ou adorno", "Seção revogada"],
  ["XVI", "Material elétrico", "Seção revogada"],
  ["XVII", "Marketing direto", "Vigente"],
  ["XVIII", "Sorvetes e preparados para fabricação de sorvete em máquinas", "Vigente"],
];

const appendixOneHistorical = [
  ["I", "Cimento"],
  ["II", "Produtos alimentícios"],
  ["III", "Pneumáticos usados procedentes do exterior ou de outra unidade da Federação"],
  ["IV", "Papel e palha cortados para cigarro"],
  ["V", "Calçados"],
  ["VI", "Autopeças e peças novas de uso em veículos, máquinas e implementos agrícolas"],
  ["VII", "Bebidas"],
  ["VIII", "Produtos farmacêuticos e assemelhados"],
  ["IX", "Tecidos, vestuário, roupas de cama, mesa e banho"],
  ["X", "Produtos da construção civil"],
  ["XI", "Arames e telas"],
  ["XII", "Produtos diversos"],
  ["XIII", "Álcool não carburante"],
];

const revoked = {
  II: ["decreto9813", "Decreto nº 9.813/2021", "Exclusão integral do inciso II; efeitos no primeiro dia do segundo mês subsequente à publicação"],
  X: ["decreto8567", "Decreto nº 8.567/2016", "Mercadorias do inciso excluídas do Anexo VIII a partir de 01/01/2016"],
  XIII: ["decreto9108", "Decretos nº 9.108/2017 e nº 9.147/2018", "Exclusão integral do inciso XIII; efeitos a partir de 01/03/2018"],
  XIV: ["decreto9108", "Decretos nº 9.108/2017 e nº 9.147/2018", "Exclusão integral do inciso XIV; efeitos a partir de 01/03/2018"],
  XV: ["decreto9108", "Decretos nº 9.108/2017 e nº 9.147/2018", "Exclusão integral do inciso XV; efeitos a partir de 01/03/2018"],
  XVI: ["decreto9108", "Decretos nº 9.108/2017 e nº 9.147/2018", "Exclusão integral do inciso XVI; efeitos a partir de 01/03/2018"],
};

const changes = {
  I: ["decreto9851", "Alterações de itens da relação de bebidas", "Decreto nº 9.851/2021; adequação ao Convênio ICMS nº 150/2020"],
  III: ["decreto10897", "Regras relativas ao GLGN e tributação monofásica", "Decreto nº 10.897/2026; efeitos indicados no próprio ato"],
  IV: ["decreto10897", "Item CEST 25.032.00 em operações com o Rio Grande do Sul", "Decreto nº 10.897/2026; efeitos retroativos a 01/12/2025"],
  XII: ["decreto10172", "Alteração das regras interestaduais aplicáveis ao inciso XII", "Decreto nº 10.172/2022; Convênio ICMS nº 213/2017"],
};

export const goiasStSections = entries.map(([id, title, status]) => ({ id, label: `Inciso ${id}`, title, status }));

goiasStSections.push(...appendixOneHistorical.map(([id, title]) => ({
  id: `apendice-i-${id}`,
  label: `Apêndice I · Inciso ${id}`,
  title,
  status: "Seção revogada",
})));

goiasStSections.push({
  id: "apendice-x",
  label: "Apêndice X",
  title: "Substituição tributária para contribuinte do regime tributário simplificado",
  status: "Seção revogada",
});

export const goiasStSegments = entries.map(([id, title, status]) => {
  const historical = revoked[id];
  const change = changes[id];
  return {
    id: `go-inciso-${id.toLowerCase()}`,
    annex: id,
    title,
    status,
    source: historical ? historical[0] : change ? change[0] : "consulta",
    scope: historical
      ? "Referência histórica mantida para auditoria. O inciso foi excluído integralmente da substituição tributária pelas operações posteriores e não integra a lista oficial atual."
      : "A incidência exige conferir o item, NCM, CEST, descrição legal, operação e data do fato gerador. A classificação do inciso não substitui a validação da mercadoria específica.",
    events: historical
      ? [["Exclusão integral", historical[1], historical[2]]]
      : [["Relação vigente", "RCTE/GO · Anexo VIII · Apêndice II", "Lista oficial de mercadorias sujeitas à ST por convênio ou protocolo"], ...(change ? [["Alteração material", change[1], change[2]]] : [])],
  };
});

goiasStSegments.push(...appendixOneHistorical.map(([id, title]) => ({
  id: `go-apendice-i-${id.toLowerCase()}`,
  annex: `apendice-i-${id}`,
  title,
  status: "Seção revogada",
  source: "decreto6663",
  scope: "Referência histórica do Apêndice I, mantida para auditoria. O Decreto nº 6.663/2007 excluiu integralmente as mercadorias desse apêndice da substituição tributária pelas operações posteriores e do pagamento antecipado do ICMS.",
  events: [["Exclusão integral", "Decreto nº 6.663/2007 · art. 1º", "Efeitos a partir de 01/09/2007"]],
})));

goiasStSegments.push({
  id: "go-apendice-x",
  annex: "apendice-x",
  title: "Substituição tributária para contribuinte do regime tributário simplificado",
  status: "Seção revogada",
  source: "rcte",
  scope: "Referência histórica. O inciso III do § 1º do art. 32, que atribuía o regime às mercadorias do Apêndice X, foi revogado em decorrência da Lei Complementar nº 123/2006.",
  events: [["Revogação", "RCTE/GO · Anexo VIII · art. 32, § 1º, III", "Efeitos a partir de 01/07/2007"]],
});
