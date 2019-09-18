/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
*/

// LC 235. Lowest Common Ancestor of BST

// given a BST and two nodes, return the lowest common ancestor of the two nodes

//     6
//    / \
//   2   8
//  / \ / \
// 0  4 7  9
//   / \
//  3   5

// p = 2, q = 8 
// lca = 6

// p = 0, q = 5
// lca = 2

// error check: empty root
// starting from root, check value is between p && q,
// if greater than q, recursively call LCA(root.left, p, q),
// if less than p, recursively call LCA(root.right, p, q),
// if p.val <= root.val < q.val,
// return root;
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return;

  if (root.val < p.val && root.val < q.val) {
    return lowestCommonAncestor(root.right, p, q);
  } else if (root.val > q.val && root.val > p.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return root;
  }
};