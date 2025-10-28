export const arrayGenerator = (start: number = 1, length: number = 100, missingNumber: number = 48 ) => {
  const result: number[] = [];
  for (let i = start; i <= length; i++) {
    if (i === 0 || i === missingNumber) continue;
    result.push(i);
  }
  return result;
}

export const findMissingPositive = (nums: number[]): number | undefined => {
  const sortedNumbers = nums.filter(num => num > 0).sort((a, b) => a - b);

  for (let i = 1; i <= sortedNumbers.length; i++) {
    if (sortedNumbers[i - 1] !== i) {
      return i;
    }
  }

  return undefined;
}