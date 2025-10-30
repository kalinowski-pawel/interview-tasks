export const maxSubarrayLengthWithSum = (arr: number[], targetSum: number): number => {
  let left = 0;
  let currentSum = 0;
  let maxLen = 0;

  for (let right = 0; right < arr.length; right++) {
    currentSum += arr[right];

    while (left <= right && currentSum > targetSum) {
      currentSum -= arr[left];
      left++;
    }

    if (currentSum === targetSum) {
      maxLen = Math.max(maxLen, right - left + 1);
      currentSum -= arr[left];
      left++;
    }
  }

  return maxLen;
}