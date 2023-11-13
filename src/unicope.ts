import { basicMap } from './basic-map';
import { perceptualMap } from './perceptual-map';
import { decompositionMap } from './decomposition-map';

export enum AllowedBlockLimit {
  BasicLatin = 'basic',
  Latin1Supplement = 'latin-1',
  LatinExtendedA = 'latin-extended-a',
}

const allowedBlocksEnd = {
  [AllowedBlockLimit.BasicLatin]: 0x007f,
  [AllowedBlockLimit.Latin1Supplement]: 0x00ff,
  [AllowedBlockLimit.LatinExtendedA]: 0x017f,
};

interface UnicopeOptions {
  placeholder?: string;
  maxAllowedBlock?: AllowedBlockLimit;
  alphanumericOnly?: boolean;
}

/**
 * Transliterates a Unicode string into ASCII.
 *
 * @param {string} input
 * @param {UnicopeOptions} options
 * @returns {string}
 */
export function unicope(
  input: string,
  options: UnicopeOptions = {
    placeholder: '?',
    maxAllowedBlock: AllowedBlockLimit.Latin1Supplement,
    alphanumericOnly: false,
  }
): string {
  const allowedBlockEnd = allowedBlocksEnd[options.maxAllowedBlock || AllowedBlockLimit.Latin1Supplement];

  const charParser = (c: string) => {
    const codePoint = c.codePointAt(0)!;
    if (codePoint >= 32 && codePoint <= allowedBlockEnd) {
      return c;
    }
    if (basicMap.has(codePoint)) {
      return String.fromCodePoint(basicMap.get(codePoint)!);
    }
    if (decompositionMap.has(codePoint)) {
      return String.fromCodePoint(decompositionMap.get(codePoint)!);
    }
    const perceptualIndex = perceptualMap.indexOf(codePoint);
    if (perceptualIndex !== -1) {
      return perceptualMap[perceptualIndex % 52];
    }
  
    return options.placeholder || '?';
  }

  const output = [...input.normalize()].map(charParser).join('');

  if (options.alphanumericOnly) {
    return output.replace(/[^A-Za-zÀ-Úà-ú0-9]/g, '');
  }
  return output;
}

