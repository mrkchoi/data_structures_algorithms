// given a sorted array of integers.
// return the number of occurences of a target value
// if the target value is not found, return -1

// [1,1,1,2,2,2,2,3,3,3,4,4,5], t = 1 // => 3



// error checking: non-array, empty array
// base case: if arr.length < 1, return -1

// find midIdx
// check arr[mid] === target


// check arr[mid] < target
// check arr[mid] > target


















































// run binary search on input array
// if arr.length > 1, return -1
// if target value === midpoint,
// init count = 1,
// decrement and check for equality, if equal, increment count,
// continue on left && right side until idx <= 0 || idx >= arr.length ||  numbers are not equal
// return count
// if target is greater, recursively call countSortedTarget on right half of array
// if target is less, recursively call countSortedTarget on left half of array

function countSortedTarget(arr, target) {
  if (arr.length < 1 || target < arr[0] || target > arr[arr.length - 1]) return -1;

  let midIdx = Math.floor(arr.length / 2);

  if (arr[midIdx] === target) {
    let count = 1;
    let leftIdx = midIdx - 1;
    while (leftIdx >= 0 && arr[leftIdx] === arr[midIdx]) {
      count += 1;
      leftIdx -= 1;
    }

    let rightIdx = midIdx + 1;
    while (rightIdx < arr.length && arr[rightIdx] === arr[midIdx]) {
      count += 1;
      rightIdx += 1;
    }

    return count;
  } else if (arr[midIdx] > target) {
    return countSortedTarget(arr.slice(0, midIdx), target);
  } else if (arr[midIdx] < target) {
    return countSortedTarget(arr.slice(midIdx + 1), target);
  }
}


countSortedTarget([1,1,2,2,3,3,3,3,4,4,5], 3); // => 4
countSortedTarget([1, 1, 2, 2, 2, 2, 3], 4); // => -1
countSortedTarget([1, 1, 2, 2, 2, 2, 3], 2); // => 4