/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if (!root) {
        return null;
    }
    let right;
    if (root.right) {
        right = root.right;
    }
    if (root.left) {
        root.right = flatten(root.left);
    } else {
        root.right = flatten(right);
        return root;
    }
    root.left = null;
    let explorer = root;
    while (explorer.right) {
        explorer = explorer.right;
    }
    if (right) {
        explorer.right = flatten(right);
    }
    return root;
};
