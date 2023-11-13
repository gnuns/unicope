declare enum AllowedBlockLimit {
    BasicLatin = "basic",
    Latin1Supplement = "latin-1",
    LatinExtendedA = "latin-extended-a"
}
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
declare function unicope(input: string, options?: UnicopeOptions): string;

export { AllowedBlockLimit, unicope };
