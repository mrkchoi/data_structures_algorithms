// LC 283. Move Zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
*/

// move all of the zeros to the end of the array
// do this in a single pass

// error check: empty arr, nonarr

// init two pointers, i && nonZero
// iterate through each element of arr
// while i < arr.length,
// if nonZero, arr[n] = arr[i], n += 1;
// while n < arr.length, arr[n] = 0
// return arr


var moveZeroes = function(nums) {
  let nonZero = 0;
  let i = 0;

  while (i < nums.length) {
    if (nums[i] !== 0) {
      nums[nonZero] = nums[i];
      nonZero += 1;
    }
    i += 1;
  }

  while (nonZero < nums.length) {
    nums[nonZero] = 0;
    nonZero += 1;
  }

  return nums;
};
