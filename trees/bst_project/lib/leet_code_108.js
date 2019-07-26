// View the full problem and run the test cases at:
//  https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/


class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function sortedArrayToBST(nums) {
  if (!nums.length) return null;
  let midIdx = Math.floor(nums.length / 2);
  let rootVal = nums[midIdx];
  let root = new TreeNode(rootVal);

  root.left = sortedArrayToBST(nums.slice(0, midIdx));
  root.right = sortedArrayToBST(nums.slice(midIdx + 1));

  return root;
}