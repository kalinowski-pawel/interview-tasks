import { longestValidParentheses } from './longestValidParentheses';
import { describe, it, expect} from 'vitest';

describe('longestValidParentheses', () => {
  it('should return 0 for empty string', () => {
    expect(longestValidParentheses('')).toBe(0);
  });

  it('should return 2 for "()"', () => {
    expect(longestValidParentheses('()')).toBe(2);
  });

  it('should return 2 for "(()"', () => {
    expect(longestValidParentheses('(()')).toBe(2);
  });

  it('should return 2 for "))()"', () => {
    expect(longestValidParentheses('))()')).toBe(2);
  });

  it('should return 4 for "(()()("', () => {
    expect(longestValidParentheses('(()()(')).toBe(4);
  })
  it('should return 4 for "(()()())()()()"', () => {
    expect(longestValidParentheses('(()()())()()()')).toBe(14);
  })
});