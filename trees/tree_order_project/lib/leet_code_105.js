// View the full problem and run the test cases at:
//  https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/

const { TreeNode } = require('./tree_node.js');

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const buildTree = function(preorder, inorder) {
  if (!inorder.length) return null;

  let val = preorder.shift();
  let node = new TreeNode(val);
  let idx = inorder.indexOf(val);

  node.left = buildTree(preorder, inorder.slice(0, idx));
  node.right = buildTree(preorder, inorder.slice(idx + 1));

  return node;
};
