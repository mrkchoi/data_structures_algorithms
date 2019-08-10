// Write a function, `exponent(b, n)`, that calculates b^n recursively.
// Your solution should accept negative values for n. Do NOT use ** or Math.pow
function exponent(b, n) {
  if (n === 0) return 1;

  if (n > 0) {
    return b * exponent(b, n - 1);
  } else {
    return 1/b * exponent(b, n + 1);
  }
}
