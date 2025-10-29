/**
 * Exercise: Count the longest valid parentheses substring
 */

export function longestValidParentheses(parentheses: string): number {
  const stack: number[] = [-1];
  let maxLen: number = 0;

  for (let i = 0; i < parentheses.length; i++) {
    if (parentheses[i] === '(') {
      stack.push(i);
    } else {
      stack.pop();// try to match with last opening
      if (stack.length === 0) {
        // mis-matched closing, save index as last unprocessed
        stack.push(i);
      } else {
        // count valid length from last unprocessed
        const currentLen = i - stack[stack.length - 1];
        if (currentLen > maxLen) {
          maxLen = currentLen;
        }
      }
    }
  }
  return maxLen;
}
