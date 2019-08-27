

// find the kth largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element

// [3,2,1,5,6,4], k = 2 // => 5
// [3,2,3,1,2,4,5,5,6], k = 4 // => 4

// possible strategies:
  // sort the array, and then find the kth item from the end
  // create a heap, deleteMax() element k - 1 times, and return maxHeap.array[1]

// strategy #1
const findKthLargest = function(nums, k) {
  return nums.sort((a,b) => a - b)[nums.length - k]
}

// strategy #2


class MaxHeap {
  constructor() {
    this.array = [null];
  }

  insert(val) {
    // add to end of array
    this.array.push(val);
    // call siftUp on last idx
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    // if idx === 1, return
    if (idx === 1) return;
    // check value of element w/ parent element
    let parentIdx = this.getParent(idx);
    // if larger than parent, swap places
    if (this.array[parentIdx] < this.array[idx]) {
      [this.array[parentIdx], this.array[idx]] = [
        this.array[idx],
        this.array[parentIdx]
      ];
      this.siftUp(parentIdx);
    } else {
      return;
    }
    // call this siftUp on parentIdx
  }

  deleteMax() {
    // if this.array.length === 2, return this.array.pop()
    // if this.array.length === 1, return null;

    if (this.array.length === 2) return this.array.pop();
    if (this.array.length === 1) return;
    // swap first and last elements
    [this.array[1], this.array[this.array.length - 1]] = [
      this.array[this.array.length - 1],
      this.array[1]
    ];
    // pop off last element, save as max
    let max = this.array.pop();
    // call this.siftDown until final position
    this.siftDown(1);
    // return max
    return max;
  }

  siftDown(idx) {
    // save current val
    // save leftIdx, rightIdx, leftVal, rightVal
    let val = this.array[idx];
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftVal = this.array[leftIdx];
    let rightVal = this.array[rightIdx];
    // if leftVal || rightVal === undefined, set to -Infinity (means we are at a leaf node and should not sift down any further)
    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;
    // check if val > both left and right, if true, return
    if (val > leftVal && val > rightVal) return;
    // check if left > right.
    // then set left to swapIdx,
    let swapIdx;
    if (leftVal > rightVal) {
      swapIdx = leftIdx;
      // else, set right to swapIdx
    } else {
      swapIdx = rightIdx;
    }
    // swap parent + child values
    [this.array[idx], this.array[swapIdx]] = [
      this.array[swapIdx],
      this.array[idx]
    ];
    // call siftDown on swapIdx
    this.siftDown(swapIdx);
  }

  getParent(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChild(idx) {
    return idx * 2;
  }

  getRightChild(idx) {
    return idx * 2 + 1;
  }
}

function findKthLargest(nums, k) {
  // create MaxHeap with all elements in nums
  // set count = 1
  let heap = new MaxHeap();
  let count = 1;
  nums.forEach(num => heap.insert(num));

  // while count < k, deleteMax()
  while (count < k) {
    heap.deleteMax();
  }
  // return heap.array[1];
  return heap.array[1];
}
