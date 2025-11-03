import { describe, it, expect } from 'vitest';
import {firstNonRepeatingCharacter, firstNonRepeatingCharacterObj, firstNonRepeatingCharacterStreaming, firstNonRepeatingCharacterWithIndex } from './firstNonRepetingCharacter.ts';

/**
 * Tests for functions finding the first non-repeating character.
 */

describe('firstNonRepeatingCharacter - basic variant', () => {
  it('returns -1 for empty string', () => {
    expect(firstNonRepeatingCharacter('')).toBe(-1);
  });
  it('returns the only character for length 1', () => {
    expect(firstNonRepeatingCharacter('a')).toBe('a');
  });
  it('returns correct character for simple cases', () => {
    expect(firstNonRepeatingCharacter('abcab')).toBe('c');
    expect(firstNonRepeatingCharacter('aabbcddee')).toBe('c');
    expect(firstNonRepeatingCharacter('aabbcdd')).toBe('c');
  });
  it('returns -1 when there are no unique characters', () => {
    expect(firstNonRepeatingCharacter('aabbcc')).toBe(-1);
  });
});

describe('firstNonRepeatingCharacterObj - object variant', () => {
  it('works identically to the basic variant', () => {
    const cases = ['abcab', 'aabbcddee', 'aabbcdd', 'aabbcc', '', 'x'];
    for (const c of cases) {
      expect(firstNonRepeatingCharacterObj(c)).toBe(firstNonRepeatingCharacter(c));
    }
  });
});

describe('firstNonRepeatingCharacterStreaming - streaming variant', () => {
  it('returns the same result as the basic variant', () => {
    const cases = ['abcab', 'abacabad', 'aabbccddeffg', 'z', '', 'aabbcc'];
    for (const c of cases) {
      expect(firstNonRepeatingCharacterStreaming(c)).toBe(firstNonRepeatingCharacter(c));
    }
  });
});

describe('firstNonRepeatingCharacterWithIndex - variant with index', () => {
  it('returns correct pair character + index', () => {
    expect(firstNonRepeatingCharacterWithIndex('abcab')).toEqual({ char: 'c', index: 2 });
    expect(firstNonRepeatingCharacterWithIndex('aabbcddee')).toEqual({ char: 'c', index: 4 });
  });
  it('returns -1 when there are no unique characters', () => {
    expect(firstNonRepeatingCharacterWithIndex('aabb')).toBe(-1);
  });
});
