import { basicMap } from "./basic-map";
import { perceptualMap } from "./perceptual-map";
import { decompositionMap } from "./decomposition-map";
/**
 * Transliterates a Unicode string into ASCII.
 *
 * @param {string} input
 * @return {string}
 */
export function unicope(input: string) {
  return [...input.normalize()]
    .map((c) => {
      const codePoint = c.codePointAt(0)!;
      if (codePoint <= 0xff) {
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
      return "?";
    })
    .join("");
}
