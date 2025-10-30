import { longestUniqueNeighborSequence } from './longestUniqueNeighborSequence';
import { describe, it, expect } from 'vitest';

describe('longestUniqueNeighborSequence', () => {
  it('returns 0 for an empty array', () => {
    expect(longestUniqueNeighborSequence([])).toBe(0);
  });

  it('returns 1 for an array with one element', () => {
    expect(longestUniqueNeighborSequence([5])).toBe(1);
  });

  it('returns the length of the array when all elements are unique', () => {
    expect(longestUniqueNeighborSequence([1, 2, 3, 4, 5])).toBe(5);
  });

  it('returns 1 when all elements are the same', () => {
    expect(longestUniqueNeighborSequence([7, 7, 7, 7])).toBe(1);
  });

  it('returns the correct length for alternating unique and duplicate elements', () => {
    expect(longestUniqueNeighborSequence([1, 2, 2, 3, 4, 4, 5])).toBe(3);
  });

  it('handles a sequence with unique neighbors followed by duplicates', () => {
    expect(longestUniqueNeighborSequence([1, 2, 3, 3, 3, 4, 5])).toBe(3);
  });

  it('handles a sequence with duplicates followed by unique neighbors', () => {
    expect(longestUniqueNeighborSequence([1, 1, 2, 3, 4, 5])).toBe(5);
  });

  it('handles a sequence with alternating duplicates and unique elements', () => {
    expect(longestUniqueNeighborSequence([1, 1, 2, 2, 3, 3, 4, 4])).toBe(2);
  });

  it('handles a sequence with a single long unique neighbor sequence', () => {
    expect(longestUniqueNeighborSequence([1, 2, 3, 4, 5, 5, 5, 6, 7])).toBe(5);
  });

  it('handles a sequence with unique neighbors at the end', () => {
    expect(longestUniqueNeighborSequence([1, 1, 1, 2, 3, 4])).toBe(4);
  });
});
