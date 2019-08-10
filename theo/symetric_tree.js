var isSymmetric = function (root) {
  if (root) {
    if (root.left && root.right) {
      return checkSymetry(root.left, root.right)
    } else if (!root.left && !root.right) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

function checkSymetry(node1, node2) {
  if (node1 && node2) {
    if (node1.val === node2.val) {
      if (node1.val === null) {
        return true;
      } else {
        if (checkSymetry(node1.left, node2.right) && checkSymetry(node1.right, node2.left)) {
          return true;
        } else {
          return false;
        }
      }
    } else {
      return false;
    }
  } else if (!node1 && !node2) {
    return true;
  } else {
    return false;
  }
}