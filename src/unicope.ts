import basicMap from "./basic-map";
import perceptualMap from "./perceptual-map";

/**
 * Transliterates a Unicode string into ASCII.
 *
 * @param {string} input
 * @return {string}
 */
export default function unicope(input: string) {
  return [...input].map((c) => {
    const codePoint = c.codePointAt(0)!;
    if (codePoint <= 0xff) {
      return c;
    }
    if (basicMap[codePoint]) {
      return basicMap[codePoint];
    }
    const perceptualIndex = perceptualMap.indexOf(codePoint);
    if (perceptualIndex !== -1) {
      return perceptualMap[perceptualIndex % 52];
    }
    return "?";
  }).join('');
}
