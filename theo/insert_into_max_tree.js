var insertIntoMaxTree = function (root, val) {
  if (val < root.val) {
    if (!root.left) {
      let node = new TreeNode(val);
      root.left = node;
      return root;
    } else if (!root.right) {
      let node = new TreeNode(val);
      root.right = node;
      return root;
    }
    let bigger = Math.max(root.left.val, root.right.val);
    if (root.left.val === bigger) {
      root.left = insertIntoMaxTree(root.left, val);
    } else {
      root.right = insertIntoMaxTree(root.right, val);
    }
    return root;
  } else {
    let node = new TreeNode(val);
    node.left = root;
    return node;
  }
};