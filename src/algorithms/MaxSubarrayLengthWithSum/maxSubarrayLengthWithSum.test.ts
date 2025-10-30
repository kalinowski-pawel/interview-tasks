import { maxSubarrayLengthWithSum } from './maxSubarrayLengthWithSum.ts';
import {describe, expect, it } from 'vitest';

describe('MaxSubarrayLengthWithSum', () => {

  it('should return the length of the longest subarray with the given sum', () => {
    const arr = [1, 2, 3, 7, 5];
    const targetSum = 12;
    const result = maxSubarrayLengthWithSum(arr, targetSum);
    expect(result).toBe(3); // The subarray [5, 7] has the sum of 12 and length 2
  });

  it('should return 0 if no subarray with the given sum exists', () => {
    const arr = [1, 2, 3, 4, 5];
    const targetSum = 20;
    const result = maxSubarrayLengthWithSum(arr, targetSum);
    expect(result).toBe(0); // No subarray has the sum of 20
  });

});