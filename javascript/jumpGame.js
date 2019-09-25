// LC 55. Jump Game
/**
 * @param {number[]} nums
 * @return {boolean}
*/

// Given an array of non-negative integers, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Determine if you are able to reach the last index.

// Example 1:

// Input: [2,3,1,1,4]
// Output: true
// Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
// Example 2:

// Input: [3,2,1,0,4]
// Output: false
// Explanation: You will always arrive at index 3 no matter what. Its maximum
//              jump length is 0, which makes it impossible to reach the last index.



// error check: non-array
// edge cases: if empty array, return true, array.length === 1, return true
// iterate through each element of the input
// for each element (except for last),
// if idx === 0 && nums[i] === 0, return false
// set max at each element to be the current element + idx
// after iterating through all elements,
// find the max
// return max >= nums.length - 1

//  0 1 2 3 4
// [2,3,1,1,4]
// [2,]

// var canJump = function(nums) {
//   if (!Array.isArray(nums)) throw new TypeError('Invalid input: input type must be array');
//   if (nums.length === 0 || nums.length === 1) return true;
//   if (nums[0] === 0) return false;
//   let max = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//     if (max < i) return false;
//     max = Math.max(nums[i] + i, max);
//   }

//   return true;
// };

// canJump([2,3,1,1,4]);
// canJump([3,2,1,0,4]);





// error check: non-array
// edge case: array length 0 || 1

// set the current maximum distance as the first element of the array
// iterate through each element of the array starting from idx 1
// at each element, check if we can make it to the current element,
// we can achieve this by checking whether the maximum element is less than the current index. this checks that we are able to make it to curIdx
// if we cannot make it to the current idx, return false
// if we can, then we should reset the max based on the new element that we are currently iterating through
// the new max will be the greater of either the old max, or the current element + current index

var canJump = function(nums) {
  if (!Array.isArray(nums)) throw new TypeError("Invalid input: input type must by array");
  if (nums.length === 0 || nums.length === 1) return true;

  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (max < i) return false;
    max = Math.max(max, nums[i] + i);
  }

  return true;
}

canJump([0,0,0,1]);
canJump([3,2,1,0,0,1]);
canJump([5,4,3,0,2,0]);





/**
 * @param {number[]} nums
 * @return {boolean}
*/

// error check: non-array
// edge case: empty array, arr.length === 1

// init max = nums[0]
// iterate through each element
// if max < i, return false
// check Math.max(i + nums[i], max)
// if max >= nums.length - 1, return true
// return false

// [2,3,1,1,4]
 // 0 1 2 3 4 

var canJump = function(nums) {
  if (!Array.isArray(nums)) throw new TypeError("Invalid input: input type must be array");
  if (nums.length === 0 || nums.length === 1) return true;
  
  let max = nums[0];
  
  for (let i = 0; i < nums.length - 1; i++) {
    if (max < i) return false;
    let newMax = nums[i] + i;
    max = Math.max(max, newMax);
    if (max >= nums.length - 1) return true;
  }
  
  return false;
};

  