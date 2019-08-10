// Write an `Array.prototype.bubbleSort(callback)` method, that bubble sorts an array.
// It should take an optional callback that compares two elements, returning
// -1 if the first element should appear before the second, 0 if they are
// equal, and 1 if the first element should appear after the second. Do NOT call
// the built-in Array.prototype.sort method in your implementation. Also, do NOT
// modify the original array.
//
// Here's a quick summary of the bubble sort algorithm:
//
// Iterate over the elements of the array. If the current element is unsorted
// with respect to the next element, swap them. If any swaps are made before
// reaching the end of the array, repeat the process. Otherwise, return the
// sorted array.
const defaultCallback = (num1, num2) => {
  if (num1 < num2) {
    return -1;
  } else if (num1 === num2) {
    return 0;
  } else {
    return 1;
  }
};

Array.prototype.bubbleSort = function (callback) {
  if (typeof callback !== "function") {
    callback = defaultCallback;
  }

  let resultArr = this.slice();
  let sorted = false;
  while (!sorted) {
    sorted = true;
    for (let i = 1, n = resultArr.length; i < n; i++) {
      if (callback(resultArr[i - 1], resultArr[i]) === 1) {
        sorted = false;
        let swap = resultArr[i - 1];
        resultArr[i - 1] = resultArr[i];
        resultArr[i] = swap;
      }
    }
  }
  return resultArr;
};
