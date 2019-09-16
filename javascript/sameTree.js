/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
*/

// LC 100. Same Tree
// return boolean indicating whether two trees are the same or not

// check that p.val === q.val, if not, return false
// check children are same, if not, return false,
// recursively check each children's children

var isSameTree = function(p, q) {
  if (!p && !q) return true;
  if ((p && !q) || (!p && q)) return false;

  // if (p && q && p.val === q.val) {
  //   return true;
  // }

  return isSameTree(q.left, p.left) && isSameTree(q.right, p.right);
};
