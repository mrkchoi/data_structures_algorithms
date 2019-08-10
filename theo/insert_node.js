var insertIntoBST = function (root, val) {
  if (insert(root, val)) {
    return root;
  }
  return null;
};

function insert(root, val) {
  if (val > root.val) {
    if (root.right) {
      return insert(root.right, val);
    } else {
      root.right = new TreeNode(val);
      return true;
    }
  } else {
    if (root.left) {
      return insert(root.left, val);
    } else {
      root.left = new TreeNode(val);
      return true;
    }
  }
  return false;
}

// insert a node into a BST