export const arrayGeneratorWithMissingNumber = (start: number = 1, max: number = 100, missingNumber: number = 48 ) => {
  const result: number[] = [];
  for (let i = start; i <= max; i++) {
    if (i === 0 || i === missingNumber) continue;
    result.push(i);
  }
  return result;
}

export const arrayGenerator = (start: number = 1, max: number = 100) => {
  const result: number[] = [];
  for (let i = start; i <= max; i++) {
    result.push(i);
  }
  return result;
}

export const randomIntArrayInRange = (min = 1, max= 10, n= 10) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
