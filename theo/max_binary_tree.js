function TreeNode(val) {
 this.val = val;
 this.left = this.right = null;
}

var constructMaximumBinaryTree = function (nums) {
  if (nums.length < 1) {
    return null;
  }
  let max = nums[0];
  let maxInd = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
      maxInd = i;
    }
  }
  let head = new TreeNode(max);

  let lft = [];
  let rt = [];

  for (let i = 0; i < nums.length; i++) {
    if (i < maxInd) {
      lft.push(nums[i]);
    } else if (i > maxInd) {
      rt.push(nums[i]);
    }
  }

  head.left = constructMaximumBinaryTree(lft);
  head.right = constructMaximumBinaryTree(rt);
  return head;
};

let inp = [3, 2, 1, 6, 0, 5]
console.log(constructMaximumBinaryTree(inp));