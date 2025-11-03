export const flattenArray = (arr: any[]): number[] => {
  // the easiest way to flatten an array in JavaScript/TypeScript, not recommended for very large arrays due to stack size limits
  return arr.flat(Infinity);
}

export const flattenArrayIterative = <T>(arr: any[]): T[] => {
  const stack = [...arr];
  const out: T[] = [];
  while (stack.length) {
    const v = stack.pop();
    if (Array.isArray(v)) {
      for (let i = v.length - 1; i >= 0; i--) stack.push(v[i]);
    } else {
      out.push(v);
    }
  }
  return out;
}