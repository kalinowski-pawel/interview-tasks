import { findMissingPositive, arrayGenerator, findMissingPositiveComplex } from './findMissingPositive';
import { describe, it, expect } from 'vitest'
describe('findMissingPositive', () => {

  it('simple missing positive function - should return the first missing positive integer', () => {
    expect(findMissingPositive(arrayGenerator(-100, 1000, 567))).toBe(567);
    expect(findMissingPositive(arrayGenerator(-34, 245, 143))).toBe(143);
    expect(findMissingPositive(arrayGenerator(-98, 1000, 12))).toBe(12);
  });

  it('complex missing positive function - should return the first missing positive integer', () => {
    expect(findMissingPositiveComplex(arrayGenerator(-1040, 10000, 1002))).toBe(1002);
    expect(findMissingPositiveComplex(arrayGenerator(-21, 233, 146))).toBe(146);
    expect(findMissingPositiveComplex(arrayGenerator(-98, 1000, 101))).toBe(101);
  });

});