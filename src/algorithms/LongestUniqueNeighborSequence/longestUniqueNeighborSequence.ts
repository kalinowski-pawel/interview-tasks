export const longestUniqueNeighborSequence = (A: number[]) => {
  if (A.length === 0){
    return 0;
  }
  let maxLen = 1;
  let currentLen = 1;

  for (let i = 1; i < A.length; i++) {
    if (A[i] !== A[i - 1]) {
      currentLen++;
    } else {
      currentLen = 1;
    }
    maxLen = Math.max(maxLen, currentLen);
  }
  return maxLen;
}