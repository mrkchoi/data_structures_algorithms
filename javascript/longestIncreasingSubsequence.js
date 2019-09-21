/**
 * @param {number[]} nums
 * @return {number}
 */

// error check: non-array, empty array, array of length 1
// we init an dp array of length nums. we can fill each of the values with 1, because we know that at a minimum, at each position of the array, the minimum increasing subsequence will be of length 1 (the element itself)
// we init two pointers in order to have nested loops,
// we init i = 0 (this will be the pointer that always starts at the beginning of the array and iterates through each element, checking to see if the element value is less than that of index j. if this condition is met, then we know that we can increase the length of the subsequence by one (because the longest length is stored at idx i, so we can increment by one.) we test to see if this length is longer than the value that currently exists in the array (default is set to 1). if this is true, then we can update the value at the index of our dp array)
// we continue to increment our j pointer so that we can can check every position of the dp array, updating the longest subsequence values
// once our entire dp longest subsequence array is filled up, we can return the maximum value in the array, knowing that this value will be the maximum length of any subsequence of values that is strictly increasing

var lengthOfLIS = function(nums) {
  if (!Array.isArray(nums))
    throw new TypeError("Invalid input: input type must be array");
  if (nums.length === 0 || nums.length === 1) return nums.length;

  let lengths = new Array(nums.length).fill(1);

  for (let j = 1; j < nums.length; j++) {
    for (let i = 0; i < j; i++) {
      if (nums[i] < nums[j]) {
        let currentMaxLength = Math.max(lengths[j], lengths[i] + 1);
        lengths[j] = currentMaxLength;
      }
    }
  }

  return Math.max(...lengths);
};
