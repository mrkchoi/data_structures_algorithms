/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// error check: !root
// edge case: !root.left && !root.right

// init count = 0
// create closure
// helper function dfs
// each node, increment count += 1
// return count

var countNodes = function(root) {
  if (!root) return 0;
  let count = 0;

  function dfs(node) {
    if (!node) return;
    count += 1;

    if (node.left) dfs(node.left);
    if (node.right) dfs(node.right);
  }

  dfs(root);
  return count;
};
