import { describe, it, expect } from 'vitest';
import { arrayGenerator } from '@@common';
import { countEvenSumPairs } from './countEvenSumPairs';

describe('countEvenSumPairs', () => {
  it('should count the number of pairs with even sums', () => {
    expect(countEvenSumPairs(arrayGenerator(-7, 20))).toBe(182);
    expect(countEvenSumPairs(arrayGenerator(1, 10))).toBe(20);
    expect(countEvenSumPairs(arrayGenerator(5, 12))).toBe(12);
    expect(countEvenSumPairs(arrayGenerator(1, 8))).toBe(12);
    expect(countEvenSumPairs([1, 2, 3, 4, 5])).toBe(4);
    expect(countEvenSumPairs([2, 2, 2])).toBe(3);
    expect(countEvenSumPairs([1])).toBe(0);
    expect(countEvenSumPairs([0, -1, -3, 4])).toBe(2);
  });
});
