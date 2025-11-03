/**
 * Returns the number k of books to take from the top and reverse
 * to restore the original case-insensitive sorted order.
 * Uses binary search to find the breaking point,
 * reducing comparisons from O(n) to O(log n).
 */
export function findReversedPrefixLength(finalPile: string[]): number {
  const n = finalPile.length;
  if (n <= 1) return 0;

  // 1. Check if already sorted (case-insensitive)
  let sortedAsc = true;
  for (let i = 1; i < n; i++) {
    if (finalPile[i - 1].toLowerCase() > finalPile[i].toLowerCase()) {
      sortedAsc = false;
      break;
    }
  }
  if (sortedAsc) return 0;

  // 2. Binary search for first index where title > topTitle
  const topTitle = finalPile[0].toLowerCase();
  let lo = 1;
  let hi = n - 1;
  let firstGreater = -1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (finalPile[mid].toLowerCase() > topTitle) {
      firstGreater = mid;
      hi = mid - 1; // szukamy wcześniejszego wystąpienia
    } else {
      lo = mid + 1;
    }
  }

  const k = firstGreater === -1 ? n : firstGreater;

  // 3. Validate structure of reversed prefix (optional, O(k))
  // Prefix should be non-increasing (case-insensitive)
  for (let i = 1; i < k; i++) {
    if (finalPile[i - 1].toLowerCase() < finalPile[i].toLowerCase()) {
      throw new Error("Prefix is not a reversed sorted segment.");
    }
  }
  // Suffix if it exists: should be increasing and > topTitle
  for (let i = k + 1; i < n; i++) {
    const prev = finalPile[i - 1].toLowerCase();
    const cur = finalPile[i].toLowerCase();
    if (prev > cur || cur <= topTitle) {
      throw new Error("Suffix does not meet original sorted conditions.");
    }
  }

  return k;
}

/**
 * Reconstructs the original pile by reversing the computed prefix.
 */
export function restoreOriginalPile(finalPile: string[]): string[] {
  const k = findReversedPrefixLength(finalPile);
  const prefix = finalPile.slice(0, k).reverse();
  return [...prefix, ...finalPile.slice(k)];
}

// Example usage (from the problem statement):
if (require.main === module) {
  const finalPile = [
    "Harry Potter and the Prisoner of Azkaban",
    "Gone With the Wind",
    "Frankenstein or The Modern Prometheus",
    "Band of Brothers",
    "The Caves of Steel",
    "The Grapes of Wrath",
    "Ubik"
  ];
  const k = findReversedPrefixLength(finalPile);
  console.log("Number of books to reverse:", k); // 4
  console.log("Restored original pile:", restoreOriginalPile(finalPile));
}
