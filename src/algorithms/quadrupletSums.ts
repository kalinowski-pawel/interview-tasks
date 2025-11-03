export function findQuadruplet(numbers: number[], target: number): [number, number, number, number] {
  const unique = [...new Set(numbers)];
  // Map of pair sum -> example pair (a,b)
  const pairMap = new Map<number, [number, number]>();
  for (let i = 0; i < unique.length; i++) {
    for (let j = 0; j < unique.length; j++) { // allows repeating the same element (i==j)
      const a = unique[i], b = unique[j];
      const s = a + b;
      // Store only the first pair for a given sum (enough to solve)
      if (!pairMap.has(s)) pairMap.set(s, [a, b]);
    }
  }
  for (const [s, pair1] of pairMap.entries()) {
    const need = target - s;
    const pair2 = pairMap.get(need);
    if (pair2) {
      return [pair1[0], pair1[1], pair2[0], pair2[1]];
    }
  }
  throw new Error("No quadruplet found (problem statement assumes one exists).");
}

// Alternative variant (simpler logic, worse complexity O(u^3)):
export function findQuadrupletFallback(numbers: number[], target: number): [number, number, number, number] {
  const unique = [...new Set(numbers)];
  const set = new Set(unique);
  for (let i = 0; i < unique.length; i++) {
    for (let j = 0; j < unique.length; j++) {
      const a = unique[i], b = unique[j];
      const remaining = target - a - b;
      for (let k = 0; k < unique.length; k++) {
        const c = unique[k];
        const d = remaining - c;
        if (set.has(d)) {
          return [a, b, c, d];
        }
      }
    }
  }
  throw new Error("No quadruplet found (fallback).");
}

// Example usage:
if (require.main === module) {
  const nums = [5, 4, 3, 2, 1, 0];
  const target = 11;
  console.log("Quadruplet:", findQuadruplet(nums, target)); // e.g. [5,5,1,0] or [1,2,3,5]
}
