export const distritoFederalStSources = {
  ricms: "https://www.sinj.df.gov.br/sinj/Norma/33077/Decreto_18955_22_12_1997.html",
  decreto38383: "https://www.sinj.df.gov.br/sinj/DetalhesDeNorma.aspx?id_norma=00a66dd3c3df4b2094b17684fcac1adc",
  decreto34328: "https://www.sinj.df.gov.br/sinj/Norma/74172/Decreto_34328_30_04_2013.html",
  decreto32943: "https://www.sinj.df.gov.br/sinj/Norma/68321/Decreto_32943_27_05_2011.html",
  decreto30077: "https://www.sinj.df.gov.br/sinj/BaixarArquivoDiario.aspx?id_file=a20efc4e-ade6-3ba5-96af-d7807e6aedb6",
  decreto32269: "https://www.sinj.df.gov.br/sinj/BaixarArquivoDiario.aspx?id_file=8835a9d8-17b5-3915-8ad7-ff91b257a3d3",
  decreto44147: "https://www.sinj.df.gov.br/sinj/Diario/3efad964-e161-3b3a-b731-75351c155019/DODF%20015%2020-01-2023%20INTEGRA.pdf",
  decreto48865: "https://www.receita.fazenda.df.gov.br/aplicacoes/UltimasNormasPublicadas/TelaSaidaDocumento.cfm?txtAno=2026&txtNumero=46865&txtParte=.&txtTipo=6",
};

const cadernoITitles = {
  1: "Cigarros, charutos, cigarrilhas, fumos e correlatos",
  2: "Cimento",
  3: "Cervejas, chope, refrigerantes, água mineral ou potável e gelo",
  4: "Combustíveis, lubrificantes e naftas, exceto nafta petroquímica",
  5: "Veículos automotores novos",
  6: "Mercadorias da tabela do item 6",
  7: "Mercadorias da tabela do item 7",
  8: "Veículos novos de duas rodas motorizados",
  9: "Pneumáticos, câmaras de ar e protetores de borracha",
  10: "Farinha de trigo",
  11: "Medicamentos e produtos farmacêuticos",
  12: "Produtos comercializados por marketing direto",
  13: "Discos, fitas e suportes de reprodução ou gravação",
  14: "Sorvetes e preparados para fabricação de sorvete",
  15: "Item 15 do Caderno I",
  16: "Item 16 do Caderno I",
  17: "Item 17 do Caderno I",
  18: "Item 18 do Caderno I",
  19: "Item 19 do Caderno I",
  20: "Item 20 do Caderno I",
  21: "Item 21 do Caderno I",
  22: "Item 22 do Caderno I",
  23: "Item 23 do Caderno I",
  24: "Item 24 do Caderno I",
  25: "Item 25 do Caderno I",
  26: "Item 26 do Caderno I",
  27: "Item 27 do Caderno I",
  28: "Mercadorias da tabela do item 28",
  29: "Item 29 do Caderno I",
  30: "Item 30 do Caderno I",
  31: "Item 31 do Caderno I",
  32: "Item 32 do Caderno I",
  33: "Item 33 do Caderno I",
  34: "Bebidas quentes",
  35: "Item 35 do Caderno I",
  36: "Item 36 do Caderno I",
  37: "Item 37 do Caderno I",
  38: "Mercadorias da tabela do item 38",
  39: "Mercadorias da tabela do item 39",
  40: "Produtos alimentícios, laticínios e matinais",
  41: "Mercadorias da tabela do item 41",
  42: "Mercadorias da tabela do item 42",
};

const fullyRevokedI = new Set([10, 13, 14, 15, 21, 29, 32, 36]);
const materiallyChangedI = new Set([3, 4, 5, 6, 7, 28, 34, 40, 41, 42]);

const cadernoI = Array.from({ length: 42 }, (_, index) => {
  const item = index + 1;
  const revoked = fullyRevokedI.has(item);
  const changed = materiallyChangedI.has(item);
  return {
    id: `df-caderno-i-${item}`,
    annex: `caderno-i-${item}`,
    title: cadernoITitles[item],
    status: revoked ? "Seção revogada" : changed ? "Alterações por itens" : "Vigente",
    source: revoked ? (item === 10 ? "decreto44147" : item === 29 || item === 36 ? "decreto34328" : "decreto38383") : changed ? (item === 4 ? "decreto48865" : "decreto38383") : "ricms",
    scope: revoked
      ? "Referência histórica preservada para auditoria. O item foi expressamente revogado e não integra a relação atual de mercadorias sujeitas à ST subsequente."
      : "A incidência exige conferir a tabela, NCM, CEST, descrição legal, operação e data do fato gerador. O registro não substitui a validação da mercadoria específica.",
    events: revoked
      ? [["Revogação integral", item === 10 ? "Decreto nº 44.147/2023" : item === 29 || item === 36 ? "Decreto nº 34.328/2013" : "Decreto nº 38.383/2017", "Efeitos indicados no ato revogador"]]
      : [["Relação consolidada", "RICMS/DF · Anexo IV · Caderno I", "Operações subsequentes internas e interestaduais"], ...(changed ? [["Alteração material", item === 4 ? "Decreto nº 48.865/2026" : "Atos posteriores de atualização da tabela", "Conferir a tabela vigente e a eficácia do ato aplicável"]] : [])],
  };
});

const historicalPartials = [
  ["caderno-i-3-historico", "Caderno I · Item 3 · Subitens 3.3, 3.4, 3.5, 3.6 e 3.9", "Subitens revogados da tabela de bebidas", "decreto38383", "Decreto nº 38.383/2017"],
  ["caderno-i-4-historico", "Caderno I · Item 4 · Subitens 4.2 a 4.26", "Subitens revogados da tabela de combustíveis", "decreto48865", "Decreto nº 48.865/2026"],
  ["caderno-i-7-historico", "Caderno I · Item 7 · Item 1.0 da tabela", "Registro revogado da tabela do item 7", "decreto38383", "Decreto nº 43.938/2022 e ato posterior indicado no SINJ"],
  ["caderno-i-28-historico", "Caderno I · Item 28 · Item 108.0 da tabela", "Registro revogado da tabela do item 28", "decreto38383", "Decreto de 21/07/2021"],
  ["caderno-i-34-historico", "Caderno I · Item 34 · Item 1.0 da tabela", "Registro revogado da tabela de bebidas quentes", "decreto38383", "Decreto nº 43.938/2022"],
].map(([id, label, title, source, act]) => ({
  id: `df-${id}`,
  annex: id,
  title,
  status: "Itens revogados",
  source,
  scope: "Referência histórica preservada para auditoria. A revogação atingiu apenas o registro identificado, não todo o item principal.",
  events: [["Revogação parcial", act, "Efeitos conforme o respectivo ato"]],
  label,
}));

const cadernoII = [
  [1, "Sucatas, resíduos e metais não ferrosos"],
  [2, "Produtos agropecuários in natura"],
  [3, "Hortifrutigranjeiros"],
  [4, "Couro, pele, sebo, osso, chifre e casco"],
  [5, "Operações antecedentes do item 5"],
  [6, "Operações antecedentes do item 6"],
  [7, "Produtos resultantes de abate entre abatedouro e centro de distribuição"],
].map(([item, title]) => ({
  id: `df-caderno-ii-${item}`,
  annex: `caderno-ii-${item}`,
  title,
  status: "Vigente",
  source: "ricms",
  scope: "Substituição tributária referente às operações antecedentes. Este grupo é separado da relação de mercadorias sujeitas à ST subsequente.",
  events: [["Regime antecedente", "RICMS/DF · Anexo IV · Caderno II", "Conferir a operação e os responsáveis previstos no item"]],
}));

const revokedIII = new Set([4, 7, 9, 11, 12]);
const cadernoIIITitles = {
  1: "Bens ou mercadorias relacionados em ato do Secretário de Fazenda",
  2: "Aço em rolo e barras de ferro ou aço",
  3: "Lâmpadas e reatores",
  4: "Carnes de aves e seus preparados",
  5: "Mercadorias da tabela do item 5",
  6: "Peças, componentes e acessórios automotivos",
  7: "Mercadorias da tabela do item 7",
  8: "Mercadorias da tabela do item 8",
  9: "Mercadorias da tabela do item 9",
  10: "Mercadorias da tabela do item 10",
  11: "Carnes e produtos de bovinos, bubalinos, caprinos, ovinos e suínos",
  12: "Mercadorias da tabela do item 12",
};
const cadernoIII = Array.from({ length: 12 }, (_, index) => {
  const item = index + 1;
  const revoked = revokedIII.has(item);
  const source = item === 4 ? "decreto32269" : item === 9 ? "decreto32943" : item === 7 ? "decreto34328" : revoked ? "decreto30077" : "ricms";
  return {
    id: `df-caderno-iii-${item}`,
    annex: `caderno-iii-${item}`,
    title: cadernoIIITitles[item],
    status: revoked ? "Seção revogada" : "Vigente",
    source,
    scope: revoked ? "Referência histórica. O item foi expressamente revogado e não integra a relação atual de operações subsequentes internas." : "Mercadorias sujeitas à ST em operações subsequentes internas, conforme a tabela e a eficácia aplicáveis.",
    events: [[revoked ? "Revogação integral" : "Relação consolidada", revoked ? (item === 4 ? "Decreto nº 32.269/2010" : item === 9 ? "Decreto nº 32.943/2011" : item === 7 ? "Decreto nº 34.328/2013" : "Decreto nº 30.077/2009") : "RICMS/DF · Anexo IV · Caderno III", revoked ? "Efeitos definidos no ato revogador" : "Operações subsequentes internas"]],
  };
});

const cadernoIV = [1, 2, 3].map((item) => ({
  id: `df-caderno-iv-${item}`,
  annex: `caderno-iv-${item}`,
  title: `Serviços sob ST interna · Item ${item}`,
  status: "Vigente",
  source: "ricms",
  scope: "Regime de substituição tributária para serviços internos. Mantido em grupo próprio e não confundido com mercadorias.",
  events: [["Regime de serviços", "RICMS/DF · Anexo IV · Caderno IV", "Aplicação conforme o serviço e a operação"]],
}));

export const distritoFederalStSegments = [...cadernoI, ...historicalPartials, ...cadernoII, ...cadernoIII, ...cadernoIV];

export const distritoFederalStSections = distritoFederalStSegments.map((segment) => ({
  id: segment.annex,
  label: segment.annex.startsWith("caderno-i-") ? segment.annex.includes("historico") ? historicalPartials.find((entry) => entry.annex === segment.annex)?.label : `Caderno I · Item ${segment.annex.replace("caderno-i-", "")}` : segment.annex.startsWith("caderno-ii-") ? `Caderno II · Item ${segment.annex.replace("caderno-ii-", "")}` : segment.annex.startsWith("caderno-iii-") ? `Caderno III · Item ${segment.annex.replace("caderno-iii-", "")}` : `Caderno IV · Item ${segment.annex.replace("caderno-iv-", "")}`,
  title: segment.title,
  status: segment.status,
}));
