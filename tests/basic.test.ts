import { describe, it, expect } from "vitest";
import { unicope, AllowedBlockLimit } from '../src/unicope.ts';

describe('unicope', () => {
  it('should return the input string if it only contains allowed characters', () => {
    const input = 'Hello, world!';
    const expectedOutput = 'Hello, world!';
    expect(unicope(input)).toEqual(expectedOutput);
  });

  it('should replace basic characters with their unicoded counterparts', () => {
    const input = 'Cafés are nice!';
    const expectedOutput = 'Cafés are nice!';
    expect(unicope(input)).toEqual(expectedOutput);
  });

  it('should replace perceptually similar characters with a subset of them', () => {
    const input = '𝐇𝐞𝐥𝐥𝐨, 𝐰𝐨𝐫𝐥𝐝!';
    const expectedOutput = 'Hello, world!';
    expect(unicope(input)).toEqual(expectedOutput);
  });

  it('should replace non-alphanumeric characters if the option is set', () => {
    const input = 'Hello, world!';
    const expectedOutput = 'Helloworld';
    expect(unicope(input, { alphanumericOnly: true })).toEqual(expectedOutput);
  });

  it('should replace non-BasicLatin characters if the option is set', () => {
    const input = 'Héllo, wörld!';
    const expectedOutput = 'Hello, world!';
    expect(unicope(input, { maxAllowedBlock: AllowedBlockLimit.BasicLatin })).toEqual(expectedOutput);
  });

  it('should replace non-Latin1Supplement characters if the option is set', () => {
    const input = 'Héllo, wörld!';
    const expectedOutput = 'Héllo, wörld!';
    expect(unicope(input, { maxAllowedBlock: AllowedBlockLimit.Latin1Supplement })).toEqual(expectedOutput);
  });
  
});
