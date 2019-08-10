// Write a function `myReverse(array)` which returns the array in reversed
// order. Do NOT use the built-in `Array.prototype.reverse`.
// ex. myReverse([1,2,3]) => [3,2,1]
function myReverse(array) {
  const result = [];
  for (let i = 1; i < array.length + 1; i++) {
    result[i - 1] = array[array.length - i];
  }

  return result;
}
