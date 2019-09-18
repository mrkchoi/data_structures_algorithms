/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

// error check: !root
// init output arr (null), stack arr
// level order traversal (bfs),
// for each node, if node === null, push to output,
// else if node, add to output arr,
// check if left || right child,
// if exists, push to queue
// continue iterating through all nodes of tree,
// return output JSON.strinify(arr)

function serialize(root) {
  let res = [];
  let queue = root ? [root] : [];

  while (queue.length) {
    let node = queue.shift();
    if (node === null) {
      res.push(null);
    } else {
      res.push(node.val);
      queue.push(node.left || null);
      queue.push(node.right || null);
    }
  }

  while (res[res.length - 1] === null) res.pop();

  return JSON.stringify(res);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */

// error check: non-string, JSON.parse(data).length === 1 => return null
// convert data to array
// map through array, if null, leave as null, if integer, convert into Node instance
// create helper class TreeData,
// getLeftChild, getRightChild
// iterate through each element of data, starting from idx1
// if null, skip,
// if node, call getLeftChildIdx and set as node.left
// call getRightChildIdx and set as node.right
// continue through all elements of input array
// return idx1 of TreeData.data

function deserialize(data) {
  data = JSON.parse(data);
  if (data.length === 0) return null;

  let root = new TreeNode(data.shift());
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();
    let val;
    node.left = (val = data.shift()) || val === 0 ? new TreeNode(val) : null;
    node.right = (val = data.shift()) || val === 0 ? new TreeNode(val) : null;
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  return root;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
