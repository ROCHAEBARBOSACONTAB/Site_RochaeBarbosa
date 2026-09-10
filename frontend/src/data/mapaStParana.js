export const paranaStSources = {
  ricms: "https://www.legislacao.pr.gov.br/legislacao/listarAtosAno.do?action=exibir&codAto=182608&codItemAto=1136687",
  decreto6048: "https://www.legislacao.pr.gov.br/legislacao/listarAtosAno.do?action=exibir&codAto=327771",
  decreto8404: "https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=iniciarProcesso&codAto=347980",
  decreto12828: "https://www.legislacao.pr.gov.br/legislacao/listarAtosAno.do?action=exibir&codAto=386529",
  decreto12924: "https://www.legislacao.pr.gov.br/legislacao/listarAtosAno.do?action=exibirImpressao&codAto=387374",
  decreto6834: "https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=iniciarProcesso&codAto=333319",
  decreto9311: "https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=iniciarProcesso&codAto=355882",
  decreto9647: "https://www.legislacao.pr.gov.br/legislacao/exibirAto.do?action=iniciarProcesso&codAto=357619",
};

const sections = [
  ["I", "Disposições gerais da substituição tributária", "arts. 1º a 21"],
  ["II", "Acumuladores elétricos", "arts. 22 a 23"],
  ["III", "Cerveja, refrigerante e outras bebidas", "arts. 24 a 25"],
  ["IV", "Aparelhos celulares e cartões inteligentes", "arts. 26 a 27"],
  ["V", "Autopeças", "arts. 28 a 30"],
  ["VI", "Artefatos de uso doméstico", "arts. 31 a 32"],
  ["VII", "Artigos de papelaria", "arts. 33 a 34"],
  ["VIII", "Bebidas quentes", "arts. 35 a 36"],
  ["IX", "Cigarro e outros produtos derivados do fumo", "arts. 37 a 38"],
  ["X", "Cimento", "arts. 39 a 40"],
  ["XI", "Combustíveis e lubrificantes, derivados ou não de petróleo, e outros produtos", "arts. 41 a 95"],
  ["XII", "Cosméticos, perfumaria, artigos de higiene pessoal e de toucador", "arts. 96 a 98"],
  ["XIII", "Ferramentas", "arts. 99 a 100"],
  ["XIV", "Lâmina de barbear e aparelho de barbear", "arts. 101 a 102"],
  ["XV", "Lâmpada elétrica", "arts. 103 a 104"],
  ["XVI", "Materiais de construção, acabamento, bricolagem ou adorno", "arts. 105 a 106"],
  ["XVII", "Materiais elétricos", "arts. 107 a 108"],
  ["XVIII", "Materiais de limpeza", "arts. 109 a 110"],
  ["XIX", "Máquinas e aparelhos mecânicos, elétricos, eletromecânicos e automáticos", "arts. 111 a 112"],
  ["XX", "Mercadorias destinadas a revendedores para venda porta a porta", "arts. 113 a 115"],
  ["XXI", "Pneumáticos, câmaras de ar e protetores", "arts. 116 a 117"],
  ["XXII", "Produtos alimentícios", "arts. 118 a 122"],
  ["XXIII", "Produtos eletrônicos, eletroeletrônicos e eletrodomésticos", "arts. 123 a 124"],
  ["XXIV", "Produtos farmacêuticos", "arts. 125 a 127"],
  ["XXV", "Rações para animais domésticos", "arts. 128 a 129"],
  ["XXVI", "Sorvetes", "arts. 130 a 131"],
  ["XXVII", "Tintas, vernizes e outras mercadorias da indústria química", "arts. 132 a 133"],
  ["XXVIII", "Veículos", "arts. 134 a 136"],
  ["XXIX", "Vendas de veículos novos por faturamento direto ao consumidor", "arts. 137 a 141"],
];

const revocations = {
  IV: ["Decreto nº 12.924/2026 · art. 2º", "01/03/2026", "decreto12924"],
  VI: ["Decreto nº 6.048/2024 · Alteração 953ª", "01/08/2024", "decreto6048"],
  VII: ["Decreto nº 6.048/2024 · Alteração 953ª", "01/08/2024", "decreto6048"],
  XVIII: ["Decreto nº 6.048/2024 · Alteração 953ª", "01/08/2024", "decreto6048"],
  XXIII: ["Decreto nº 12.828/2026 · art. 2º, III", "01/03/2026", "decreto12828"],
  XXVI: ["Decreto nº 8.404/2024 · Alteração 1.132ª", "01/02/2025", "decreto8404"],
};

const changedSections = new Set(["I", "XI", "XVI", "XXII", "XXIV", "XXVIII"]);

export const paranaStSections = sections.map(([id, title]) => ({
  id,
  label: `Seção ${id}`,
  title,
  status: revocations[id] ? "Seção revogada" : changedSections.has(id) ? "Alterações por itens" : "Vigente",
}));

function eventsFor(section, rules) {
  const events = [["Relação e regra operacional", `RICMS/PR · Anexo IX · Seção ${section} · ${rules}`, "Texto consolidado a conferir por operação"]];
  if (section === "I") events[0] = ["Regras gerais", "RICMS/PR · Anexo IX · Capítulo I · arts. 1º a 21", "Regras transversais de retenção, recolhimento, restituição, ressarcimento e complementação; não corresponde a um segmento de mercadorias"];
  if (section === "XI") events.push(["Item incluído", "CEST 06.019.00 · nafta não petroquímica", "Decreto nº 9.647/2025; Subseção IV-A"]);
  if (section === "XVI") events.push(["Âmbito interestadual", "Remetentes de UF relacionada no art. 105", "Decreto nº 6.834/2024 atualizou os responsáveis e exceções da seção"]);
  if (section === "XXII") events.push(["Item alterado", "CEST 17.011.00 · água de coco", "Decreto nº 7.092/2024; efeitos no primeiro dia do segundo mês subsequente"]);
  if (section === "XXIV") events.push(["Itens revogados", "Posições 13, 14, 14A a 14D e 15 a 28", "Decreto nº 6.048/2024; efeitos em 01/08/2024"]);
  if (section === "XXVIII") events.push(["Item incluído", "CEST 25.032.00 · veículo elétrico de carga", "Decreto nº 9.311/2025; efeitos no primeiro dia do segundo mês subsequente"], ["Exceção interestadual", "CEST 25.032.00 nas operações com RS e SP", "Sem aplicação de ST; § 4º do art. 134"]);
  return events;
}

export const paranaStSegments = sections.map(([section, title, rules]) => {
  const revoked = revocations[section];
  if (revoked) {
    const [act, effectiveDate, source] = revoked;
    return {
      id: `pr-secao-${section.toLowerCase()}-revogada`, annex: section, title, status: "Seção revogada",
      scope: "Seção integralmente revogada para fins de substituição tributária no Paraná. A referência permanece no mapa exclusivamente para auditoria histórica e não indica incidência atual.", source,
      events: [["Relação histórica", `RICMS/PR · Anexo IX · Seção ${section}`, "Texto anterior consolidado"], ["Revogação", act, `Efeitos a partir de ${effectiveDate}`]],
    };
  }
  return {
    id: `pr-secao-${section.toLowerCase()}`, annex: section, title,
    status: changedSections.has(section) ? "Alterações por itens" : "Vigente",
    scope: "A incidência interna exige conferir o item, NCM, CEST, descrição legal, base de cálculo e as condições da operação. A presença na seção não dispensa a validação da mercadoria específica no texto consolidado.",
    source: "ricms", events: eventsFor(section, rules),
  };
});
