import { findMissingPositive, findMissingPositiveComplex } from './findMissingPositive';
import { arrayGeneratorWithMissingNumber } from '@@common';
import { describe, it, expect } from 'vitest'
describe('findMissingPositive', () => {

  it('simple missing positive function - should return the first missing positive integer', () => {
    expect(findMissingPositive(arrayGeneratorWithMissingNumber(-100, 1000, 567))).toBe(567);
    expect(findMissingPositive(arrayGeneratorWithMissingNumber(-34, 245, 143))).toBe(143);
    expect(findMissingPositive(arrayGeneratorWithMissingNumber(-98, 1000, 12))).toBe(12);
  });

  it('complex missing positive function - should return the first missing positive integer', () => {
    expect(findMissingPositiveComplex(arrayGeneratorWithMissingNumber(-1040, 10000, 1002))).toBe(1002);
    expect(findMissingPositiveComplex(arrayGeneratorWithMissingNumber(-21, 233, 146))).toBe(146);
    expect(findMissingPositiveComplex(arrayGeneratorWithMissingNumber(-98, 1000, 101))).toBe(101);
  });

});