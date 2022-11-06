import fs from 'node:fs';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

const lookup = require('../data/basic-map.json');

const map = new Map();

const keys = Object.keys(lookup);

for (const [key, value] of Object.entries(lookup)) {
  const charCodeKey = key.charCodeAt(0);
  for (const char of value) {
    if (keys.includes(char)) continue;
    map.set(char.charCodeAt(0), charCodeKey);
  }
}

const basicMapTsPath = fileURLToPath(new URL('../src/basic-map.ts', import.meta.url))
fs.writeFileSync(
  basicMapTsPath,

  `export const basicMap = new Map<number, number>(
    ${JSON.stringify([...map])}\n);`
);

console.log(`Wrote ${map.size} entries to ${basicMapTsPath}`);
