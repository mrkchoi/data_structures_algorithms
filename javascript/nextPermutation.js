/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

// If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

// The replacement must be in-place and use only constant extra memory.

// Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.

// 1,2,3 → 1,3,2
// 3,2,1 → 1,2,3
// 1,1,5 → 1,5,1


// error check: non-array
// edge cases: empty array, arr.length === 1

// helper function reverse, swap
// starting from second to last element in array,
// check to see if sequence is decreasing by comparing adjacent elements
// until adjacement elements are not decreasing, continue to decrement i
// if we reach a point where i < 0, then we know that we have traversed the entire array and the entire array is decreasing, this means that we need to reverse the entire array and return
// once we reach a point where adj elements are not decreasing && i >= 0, we now know one of the swap elements
// to find the other swap element, we look to the right of the array, and find the element that has a value greater than our current swap element
// as soon as we find the element that has a value greater than i, we know this is the next element in line,
// swap the two elements
// now, the decreasing sequence to the right of i needs to be reversed, in order to have the smallest increasing sequence for the new element at position i
// we can achieve this my reversing all of the elements to the right of the new i
// the process is taking place in-place, and once we complete, we can return


function nextPermutation(nums) {
  if (!Array.isArray(nums)) throw new TypeError('Invalid input: input type must be array');

  function swap(i,j) {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  function reverse(start) {
    let end = nums.length - 1;
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]];
      start += 1;
      end -= 1;
    }
  }

  let i = nums.length - 2;
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i -= 1;
  }

  if (i < 0) {
    reverse(0);
    return;
  }

  let j = nums.length - 1;
  while (j >= 0 && nums[i] >= nums[j]) {
    j -= 1;
  } 

  swap(i,j);
  reverse(i + 1);
}














































// /**
//  * @param {number[]} nums
//  * @return {void} Do not return anything, modify nums in-place instead.
//  */
// var nextPermutation = function(nums) {
//   function swap(a, b) {
//     const temp = nums[a];
//     nums[a] = nums[b];
//     nums[b] = temp;
//   }

//   function reverse(start) {
//     let end = nums.length - 1;
//     while (start < end) {
//       swap(start, end);
//       start++;
//       end--;
//     }
//   }

//   let i = nums.length - 2;
//   while (i >= 0 && nums[i + 1] <= nums[i]) {
//     i--;
//   }
//   if (i < 0) {
//     reverse(0);
//     return;
//   }
//   let j = nums.length - 1;
//   while (j >= 0 && nums[j] <= nums[i]) {
//     j--;
//   }
//   swap(i, j);
//   reverse(i + 1);
// };

// // error check: non-array
// // edge case: empty array, arr.length === 1

// // we have four main types of problems:
// // all ascending/all same, all descending, mixed asc, mixed desc
// // flag for allEqual, if true, return nums
// // flag for allAsc, if true, swap last two elements
// // flag for allDesc, if true, swap first with last until center
// // if arr[0] < arr[1] || arr[0] < arr[arr.length - 1], flag for mostAsc,
// // check where arr[i] < arr[i + 1] && arr[i + 1] < arr[i + 2], swap arr[i], arr[i + 1]
// // if arr[0] > arr[1] || arr[0] > arr[arr.length - 1], flag for mostDesc
// // return arr

// var nextPermutation = function(nums) {
//   if (!Array.isArray(nums)) throw new TypeError('Invalid input');
//   if (nums.length === 0 || nums.length === 1) return nums;
//   if (nums.length === 2) {
//     [nums[0], nums[1]] = [nums[1], nums[0]];
//     return nums;
//   }

//   let allEqual;
//   let allAsc;
//   let allDesc;
//   let asc;
//   let desc;
//   let ascCount = 0;
//   let descCount = 0;

//   for (let i = 0; i < nums.length - 1; i++) {
//     if (nums[i] < nums[i + 1]) {
//       ascCount += 1;
//     } else if (nums[i] > nums[i + 1]) {
//       descCount += 1;
//     }
//   }

//   if (ascCount === 0 && descCount === 0) {
//     allEqual = true;
//   } else if (ascCount === nums.length - 1) {
//     allAsc = true;
//   } else if (descCount === nums.length - 1) {
//     allDesc = true;
//   } else if (ascCount > descCount) {
//     asc = true;
//   } else if (descCount > ascCount) {
//     desc = true;
//   }

//   if (allEqual) return nums;
//   if (allAsc) {
//     [nums[nums.length - 2], nums[nums.length - 1]] =
//     [nums[nums.length - 1], nums[nums.length - 2]];
//     return nums;
//   }
//   if (allDesc) {
//     let i = 0;
//     let j = nums.length - 1;
//     while (i < j) {
//       [nums[i], nums[j]] = [nums[j], nums[i]];
//       i += 1;
//       j -= 1;
//     }
//     return nums;
//   }

//   for (let i = 0; i < nums.length - 2; i++) {
//     if (nums[i] < nums[i + 1] && nums[i + 1] > nums[i + 2]) {
//       [nums[i], nums[i + 1]] = [nums[i + 1], nums[i]];
//       break;
//     }
//   }

//   return nums;
// };
