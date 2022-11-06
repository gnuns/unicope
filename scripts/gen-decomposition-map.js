import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import readline from "node:readline/promises";


const unicodeDataPath = fileURLToPath(new URL('../data/UnicodeData.txt', import.meta.url))
const rs = fs.createReadStream(unicodeDataPath);
const rl = readline.createInterface({ input: rs, crlfDelay: Infinity });

const map = new Map();

for await (const line of rl) {
  if (line.startsWith("#") || line.startsWith("@")) {
    continue;
  }
  const [
    hex,
    what,
    category,
    combiningClass,
    bidirectionalClass,
    decomposition,
  ] = line.split(";");

  if (category === "Cc" || Number(`0x${hex}`) < 0xff) {
    continue;
  }

  const bestChar = decomposition
    .split(" ")
    .map((x) => Number(`0x${x}`))
    .filter((x) => x && x >= 0x30 && x <= 0x7a)[0];

  if (bestChar) {
    map.set(Number(`0x${hex}`), bestChar);
  } else {
    if (what.toLowerCase().includes("letter")) {
      const matcher = what.match(/.*letter( .*)? ([a-z]{1})(\s.+)?$/i);
      const letter = matcher?.[2];
      if (letter) {
        const small = what.toLowerCase().includes("small");
        if (small) {
          map.set(Number(`0x${hex}`), letter.toLowerCase().charCodeAt(0));
          continue;
        }
        map.set(Number(`0x${hex}`), letter.charCodeAt(0));
      }
    }
  }
}

const mapTsPath = fileURLToPath(new URL('../src/decomposition-map.ts', import.meta.url))
fs.writeFileSync(
  mapTsPath,

  `export const decompositionMap = new Map<number, number>(
    ${JSON.stringify([...map])}\n);`
);

console.log(`Wrote ${map.size} entries to ${mapTsPath}`);
