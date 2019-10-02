/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// error check: non-array, non-number
// edge case: empty array

// init maxLength, map, sum
// we setup our map with the k/v pair of 0: -1,
// the reason why we do this is because if we reach a point where
// our running sum - target === 0, we know we found a match, and we should account for zero-based indexing
// at each element, update the running sum,
// if the map[sum] exists, then we know that we have previously found this particular sum before and an earlier element,
// meaning that we should not update this value because the previously found element
// will have a greater index difference than any newly found matching sums
// if it does not,
// we should set the k/v pair in our map, with the index as the value (we are keeping track of the value where each particular sum is found)
// then, we should check to see if the difference between our current sum and our target exists in our map,
// if it exists, then we know that we can positively make our target sum and test to see if we should update our maxLength,
// in order to do so, we should check the max between our previous maxLength && the difference between our current index and the index at which the correct sum difference was found
// if the new length is greater than our previous maxLength, we should update our length
// we continue checking each element of the input array, updating our maxLength as necessary
// after we continue checking all elements, we can return our maxLength

var maxSubArrayLen = function(nums, k) {
  if (!Array.isArray(nums) || typeof k !== "number")
    throw new TypeError("Invalid input type");

  let sum = 0;
  let maxLength = 0;
  let map = { 0: -1 };

  nums.forEach((num, idx) => {
    sum += num;

    if (!map.hasOwnProperty(sum)) {
      map[sum] = idx;
    }

    if (map.hasOwnProperty(sum - k)) {
      maxLength = Math.max(maxLength, idx - map[sum - k]);
    }
  });

  return maxLength;
};
