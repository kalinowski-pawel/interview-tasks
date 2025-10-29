/**
 * Exercise Description:
 * Given an unsorted array of integers, find the smallest missing positive integer.
 */

//Simple fast way to return missing positive integer
export const findMissingPositive = (nums: number[]): number | undefined => {
  const sortedNumbers = nums.filter(num => num > 0).sort((a, b) => a - b);

  for (let i = 1; i <= sortedNumbers.length; i++) {
    if (sortedNumbers[i - 1] !== i) {
      return i;
    }
  }

  return undefined;
}

//More complex way to return missing positive integer with O(n) time and O(n) space complexity
export const findMissingPositiveComplex = (nums: number[]): number | undefined => {
  const size = nums.length;
  // Create a boolean array to track the presence of numbers, including missing positive integer
  const seen = new Array(size + 2).fill(false);

  for (let i = 0; i <= size; i++) {
    const x= nums[i];
    if (x > 0 && x <= size + 1) {
      seen[x] = true;
    }
  }

  for (let v = 1; v <= size + 1; v++) {
    if (!seen[v]) {
      return v;
    }
  }

  return undefined;
};