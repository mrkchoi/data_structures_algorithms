// Write an `Array.prototype.quickSort(callback)` method that quick sorts an array.
// It should take an optional callback that compares two elements, returning -1 
// if the first element should appear before the second, 0 if they are equal, and
// 1 if the first element should appear after the second. Do NOT call the 
// built-in Array.prototype.sort method in your implementation.
//
// Here's a summary of the quick sort algorithm:
//
// Choose a pivot element, then iterate over the rest of the array, moving the 
// remaining elements on to the appropriate side of the pivot. Recursively quick 
// sort each side of the array until a base case is reached. 
Array.prototype.quickSort = function (func) {
  if (this.length < 2) return this;

  if (!func) {
    func = (x, y) => {
      if (x < y) return - 1;
      return 1;
    };
  }

  const pivot = this[0];
  let left = this.slice(1).filter((el) => func(el, pivot) === -1);
  let right = this.slice(1).filter((el) => func(el, pivot) !== -1);
  left = left.quickSort(func);
  right = right.quickSort(func);

  return left.concat([pivot]).concat(right);
};
