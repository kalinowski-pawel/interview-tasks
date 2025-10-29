const arrayGenerator = (start: number = 1, length: number = 100, missingNumber: number = 48 ) => {
  const result: number[] = [];
  for (let i = start; i <= length; i++) {
    if (i === 0 || i === missingNumber) continue;
    result.push(i);
  }
  return result;
}

export default arrayGenerator;