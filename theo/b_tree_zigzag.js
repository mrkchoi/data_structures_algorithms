var zigzagLevelOrder = function (root) {
  if (!root) {
    return [];
  }
  let odd = true;
  let ans = [];
  let queue = [root];
  while (queue.length > 0) {
    let level = queue.slice();
    queue = [];
    let mini = [];
    level.forEach(node => {
      mini.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    })
    if (odd) {
      ans.push(mini);
      odd = false;
    } else {
      ans.push(mini.reverse());
      odd = true;
    }
  }
  return ans;
};