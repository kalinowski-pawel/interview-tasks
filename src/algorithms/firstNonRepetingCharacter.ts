// Returns the first non-repeating character (first character with frequency == 1)
// If it does not exist, returns -1.
// Simple O(n) variant with O(1) extra memory (depends on alphabet) using Map.
export const firstNonRepeatingCharacter = (s: string): string | number => {
  if (s.length === 0) return -1;
  const freq = new Map<string, number>();
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) ?? 0) + 1);
  }
  for (const ch of s) {
    if (freq.get(ch) === 1) return ch;
  }
  return -1;
};

// Variant using object as a hash table; faster in practice for small alphabets.
export const firstNonRepeatingCharacterObj = (s: string): string | number => {
  if (!s) return -1;
  const freq: Record<string, number> = {};
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    freq[ch] = (freq[ch] || 0) + 1;
  }
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (freq[ch] === 1) return ch;
  }
  return -1;
};

// Single-pass approach with a queue of unique character indices (preserves order of unique chars)
// Still O(n), but may return result faster if immediate access is needed during streaming.
export const firstNonRepeatingCharacterStreaming = (s: string): string | number => {
  const freq: Record<string, number> = {};
  const uniqueOrder: number[] = []; // indices of potentially unique characters

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    freq[ch] = (freq[ch] || 0) + 1;
    if (freq[ch] === 1) {
      uniqueOrder.push(i);
    } else if (freq[ch] === 2) {
      // Remove all indices of characters that are no longer unique (lazily from the front)
      while (uniqueOrder.length && freq[s[uniqueOrder[0]]] !== 1) {
        uniqueOrder.shift();
      }
    }
  }
  if (!uniqueOrder.length) return -1;
  return s[uniqueOrder[0]];
};

// Variant returning also the index (useful for diagnostics)
export const firstNonRepeatingCharacterWithIndex = (s: string): { char: string; index: number } | number => {
  if (!s) return -1;
  const freq = new Map<string, number>();
  for (const ch of s) freq.set(ch, (freq.get(ch) ?? 0) + 1);
  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (freq.get(ch) === 1) return { char: ch, index: i };
  }
  return -1;
};

// Edge cases examples (comments):
// "" -> -1
// "a" -> 'a'
// "aa" -> -1
// "abacbd" -> 'e' (if there was 'e'; actually not in this example -> 'd')
// "abcab" -> 'c'
