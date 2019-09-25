/**
 * @param {number[]} nums
 * @return {number}
*/

// Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

// You need to find the shortest such subarray and output its length.

// Example 1:
// Input: [2, 6, 4, 8, 10, 9, 15]
// Output: 5
// Explanation: You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.
// Note:
// Then length of the input array is in range [1, 10,000].
// The input array may contain duplicates, so ascending order here means <=.

// error check: non-array
// edge cases: empty array, array.length === 1
// sort array
// iterate through all elements of array
// check each element for equality
// first element that is different, save idx
// last element that is different, save idx
// return last - first + 1

var findUnsortedSubarray = function(nums) {
  if (!Array.isArray(nums)) throw new TypeError('Invalid input: input type must be array');
  if (nums.length === 0 || nums.length === 1) return 0;

  let sorted = nums.sort((a,b) => a - b);
  let first;
  let second;

  for (let i = 0; i < nums.length; i++) {
    if (!first && nums[i] !== sorted[i]) {
      first = i;
    }
    
    if (nums[i] !== sorted[i]) {
      second = i;
    }
  }

  return second - first + 1;
};
