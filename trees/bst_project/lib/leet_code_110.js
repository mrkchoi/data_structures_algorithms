// View the full problem and run the test cases at:
//  https://leetcode.com/problems/balanced-binary-tree/


function isBalanced(root) {
  if (!root) return true;
  let heights = [];

  let height = 0;
  let queue = [root];
  while (queue.length) {
    let node = queue.shift();
    if (!root.left && !root.right) heights.push(height);
    if (root.left || root.right) height += 1;
  }
  let min = Math.min(...heights);
  let max = Math.max(...heights);

  if (max - min > 1) {
    return false;
  } else {
    return true;
  }
}