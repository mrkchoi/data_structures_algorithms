/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
*/

// LC 230. Kth Smallest Element in a BST

// option #1:
// take advantage of BST properties: left < node < right
// do a recursive in-order traversal, add each element to an output array
// at each call, check that the current node !== null && arr.length <= k
// this ensures that we are only adding valid nodes to our stack calls + output, and also ensure that we can stop adding to the call stack once we have collected enough elements to return correctly
// then, key into our output array at [k - 1], because array will be sorted
// return arr[k - 1];


const kthSmallest = function(root, k) {
  if (!root) return;
  
  let res = [];
  inOrder(root);
  return res[k - 1];

  function inOrder(node) {
    if (node) {
      inOrder(node.left);
      res.push(node.val);
      inOrder(node.right);
    }
  }
}



















// option #2:
// use heap and deleteMin 'k' times. return kth smallest


var kthSmallest = function(root, k) {
  if (!root.left && !root.right) return root.val;

  let heap = new MinHeap();
  let queue = [root];

  while (queue.length) {
    let node = queue.shift();

    heap.insert(node.val);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }

  // console.log(heap.keys);

  let kth;
  let i = 0;
  while (i < k) {
    kth = heap.deleteMin();
    i += 1;
  }

  return kth;
};

class MinHeap {
  constructor() {
    this.keys = [null];
  }

  parentIdx(idx) {
    return Math.floor(idx / 2);
  }

  leftChildIdx(idx) {
    return (idx * 2);
  }

  rightChildIdx(idx) {
    return (idx * 2) + 1;
  }

  insert(val) {
    this.keys.push(val);
    let lastIdx = this.keys.length - 1;
    this.siftUp(lastIdx);
  }

  siftUp(idx) {
    if (idx <= 1) return;
    let parentIdx = this.parentIdx(idx);

    if (this.keys[parentIdx] > this.keys[idx]) {
      [this.keys[parentIdx], this.keys[idx]] = [
        this.keys[idx],
        this.keys[parentIdx]
      ];
      this.siftUp(parentIdx);
    }
  }

  deleteMin() {
    if (this.keys.length === 1) return;
    if (this.keys.length === 2) return this.keys.pop();

    let lastIdx = this.keys.length - 1;
    [this.keys[lastIdx], this.keys[1]] = [this.keys[1], this.keys[lastIdx]];

    let min = this.keys.pop();
    this.siftDown(1);
    // console.log(min);
    return min;
  }

  siftDown(idx) {
    let leftIdx = this.leftChildIdx(idx);
    let rightIdx = this.rightChildIdx(idx);

    if (leftIdx >= this.keys.length && rightIdx >= this.keys.length) return;

    let leftVal = leftIdx < this.keys.length ? this.keys[leftIdx] : Infinity;
    let rightVal = rightIdx < this.keys.length ? this.keys[rightIdx] : Infinity;

    let swapIdx = leftVal < rightVal ? leftIdx : rightIdx;
    // console.log(swapIdx);

    if (this.keys[swapIdx] < this.keys[idx]) {
      [this.keys[swapIdx], this.keys[idx]] = [
        this.keys[idx],
        this.keys[swapIdx]
      ];
      console.log(this.keys);
      this.siftDown(swapIdx);
    }
  }
}
