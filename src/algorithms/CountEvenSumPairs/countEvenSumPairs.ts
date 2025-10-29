/**
 * Exercise: Count Even Sum Pairs
 * Given an array of integers, count the number of pairs (i, j) such that i < j and the sum of nums[i] + nums[j] is even.
 */

export const countEvenSumPairs = (nums: number[]): number => {
  let evenCount = 0;
  let oddCount = 0;

  // Count the number of even and odd numbers in the array
  for (const num of nums) {
    if (num % 2 === 0) {
      evenCount++;
    } else {
      oddCount++;
    }
  }

  // Calculate the number of pairs with even sums
  const evenPairs = (evenCount * (evenCount - 1)) / 2; // Pairs of even numbers
  const oddPairs = (oddCount * (oddCount - 1)) / 2;   // Pairs of odd numbers

  return evenPairs + oddPairs;
}