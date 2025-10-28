import { findMissingPositive, arrayGenerator } from './findMissingPositive';
import { describe, it, expect } from 'vitest'
describe('findMissingPositive', () => {

  it('should return the first missing positive integer', () => {
    expect(findMissingPositive(arrayGenerator(-100, 1000, 567))).toBe(567);
    expect(findMissingPositive(arrayGenerator(-34, 245, 143))).toBe(143);
    expect(findMissingPositive(arrayGenerator(-98, 1000, 12))).toBe(12);
  });
});