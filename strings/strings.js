// 4. Median of Two Sorted Arrays
// Hard

// 4751

// 672

// Favorite

// Share
// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// You may assume nums1 and nums2 cannot be both empty.

// Example 1:

// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:

// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5

// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
var findMedianSortedArrays = function(nums1, nums2) {
  let output = [];
  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      output.push(nums1.shift());
    } else {
      output.push(nums2.shift());
    }
  }

  if (nums1.length === 0) {
    output = output.concat(nums2);
  } else {
    output = output.concat(nums1);
  }

  if (output.length % 2 === 0) {
    let mid1 = output.length / 2 - 1;
    let mid2 = output.length / 2;
    return (output[mid1] + output[mid2]) / 2;
  } else {
    let mid = Math.floor(output.length / 2);
    return output[mid];
  }
};

// [1,2,3,4] => 4 => (((length / 2) - 1) + (length / 2)) / 2
//











// 5. Longest Palindromic Substring
// Medium
// 4048
// 375
// Favorite
// Share

// Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.

// Example 1:

// Input: "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: "cbbd"
// Output: "bb"
let longestPalindrome = function(s) {
  let max = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 0; j < 2; j++) {
      let left = i;
      let right = i + j;
      while (s[left] && s[left] === s[right]) {
        left--;
        right++;
      }
      if (right - left - 1 > max.length) {
        max = s.substring(left + 1, right);
      }
    }
  }
  return max;
};
