const fs = require("fs");
const https = require("https");
const path = require("path");

const SOURCE_URL = "https://www.sefaz.pe.gov.br/Legislacao/Tributaria/Documents/Legislacao/Tabelas/CFOP.htm";
const OUTPUT_PATH = path.resolve(__dirname, "../src/pages/resources/cfop/cfopData.json");
const WINDOWS_1252 = {
  0x80: "€", 0x82: "‚", 0x83: "ƒ", 0x84: "„", 0x85: "…", 0x86: "†", 0x87: "‡",
  0x88: "ˆ", 0x89: "‰", 0x8a: "Š", 0x8b: "‹", 0x8c: "Œ", 0x8e: "Ž", 0x91: "‘",
  0x92: "’", 0x93: "“", 0x94: "”", 0x95: "•", 0x96: "–", 0x97: "—", 0x98: "˜",
  0x99: "™", 0x9a: "š", 0x9b: "›", 0x9c: "œ", 0x9e: "ž", 0x9f: "Ÿ",
};

function download(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Download failed with HTTP ${response.statusCode}`));
        response.resume();
        return;
      }

      const chunks = [];
      response.on("data", (chunk) => chunks.push(chunk));
      response.on("end", () => resolve(Buffer.concat(chunks).toString("latin1")));
    }).on("error", reject);
  });
}

function decodeEntities(value) {
  return value
    .replace(/[\u0080-\u009f]/g, (character) => WINDOWS_1252[character.charCodeAt(0)] || " ")
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&quot;/gi, '"')
    .replace(/&apos;/gi, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([\da-f]+);/gi, (_, code) => String.fromCodePoint(parseInt(code, 16)));
}

function textFromHtml(value) {
  return decodeEntities(value)
    .replace(/<\/?a\b[^>]*>/gi, " ")
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<\/?p\b[^>]*>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function parentFor(code, availableCodes) {
  const number = Number(code);
  if (number % 1000 === 0) return null;
  if (number % 100 === 0 || number % 100 === 50) return `${Math.floor(number / 1000)}000`;

  const hundredGroup = Math.floor(number / 100) * 100;
  const fiftyGroup = hundredGroup + 50;
  const candidate = number % 100 >= 50 && availableCodes.has(`${fiftyGroup}`)
    ? `${fiftyGroup}`
    : `${hundredGroup}`;

  return availableCodes.has(candidate) ? candidate : `${Math.floor(number / 1000)}000`;
}

function parseRows(html) {
  const records = [];
  const rowPattern = /<tr\b[^>]*>([\s\S]*?)<\/tr>/gi;
  let rowMatch;

  while ((rowMatch = rowPattern.exec(html))) {
    const cells = [...rowMatch[1].matchAll(/<td\b[^>]*>([\s\S]*?)<\/td>/gi)].map((match) => textFromHtml(match[1]));
    const codeMatch = cells[0]?.match(/^([1-7])\.(\d{3})$/);
    if (!codeMatch || cells.length < 2) continue;

    const code = `${codeMatch[1]}${codeMatch[2]}`;
    const title = cells[1];
    if (!title) continue;

    records.push({
      code,
      title,
      description: (cells[2] || "").replace(/^Início\s*/i, ""),
    });
  }

  const uniqueRecords = [...new Map(records.map((record) => [record.code, record])).values()];
  const availableCodes = new Set(uniqueRecords.map((record) => record.code));
  return uniqueRecords.map((record) => ({ ...record, parent: parentFor(record.code, availableCodes) }));
}

async function main() {
  const html = await download(SOURCE_URL);
  const records = parseRows(html);
  const rootCodes = new Set(records.filter((record) => record.parent === null).map((record) => record.code));

  if (records.length < 400 || rootCodes.size !== 6) {
    throw new Error(`Unexpected CFOP source structure: ${records.length} records and ${rootCodes.size} root groups.`);
  }

  fs.writeFileSync(OUTPUT_PATH, `${JSON.stringify(records, null, 2)}\n`, "utf8");
  console.log(`Generated ${records.length} CFOP records in ${OUTPUT_PATH}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exitCode = 1;
});
