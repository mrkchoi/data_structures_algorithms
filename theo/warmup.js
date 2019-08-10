// quicksort

function quicksort(arr) {
  if (arr.length < 2) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = arr.filter((el) => el < pivot);
  let right = arr.filter((el) => el > pivot);

  return quicksort(left).concat([pivot]).concat(quicksort(right));
}

let test = [9, 4, 8, 2, 5, 6, 7, 1, 0];

// console.log(quicksort(test))

// find duplicates in an arr

var findDuplicates = function (nums) {
  let result = [];
  nums = nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      result.push(nums[i + 1]);
    }
  }
  result = [...new Set(result)];
  return result;
};

// nth Fib 

// [0, 1, 1, 2, 3, 5, 8, 13]

function nthFib(n) {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  return nthFib(n-1) + nthFib(n-2);
}

// 4th fib should be 3

console.log(nthFib(40))