// implement a maxHeap class
// it should have the following methods: insert(val), deleteMax()
// feel free to implement any helper methods


class Maxheap {
  constructor() {
    this.array = [null];
  }

  insert(val) {
    // add new val to end of array
    // call siftup on the node at last idx of array
    this.array.push(val);
    this.siftUp(this.array[this.array.length - 1]);
  }

  siftUp(idx) {
    // if idx === 1, cannot sift up any more, so return
    if (idx === 1) return;
    // check curVal with parent Val,
    let parentIdx = this.getParentIdx(idx);
    // if greater than parent val, swap places and recursively call siftUp on parentIdx
    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [
        this.array[parentIdx],
        this.array[idx]
      ];
    }

    this.siftUp(parentIdx);
  }

  deleteMax() {
    // check if arr length === 2, then pop off last element and return
    // if arr length === 1, return
    if (this.array.length === 2) return this.array.pop();
    if (this.array.length === 1) return;

    let max = this.array[1];
    // save pointer to max element (idx === 1)
    // pop off the last element from the array and set as idx 1
    this.array[1] = this.array.pop();

    // call siftDown on idx1
    this.siftDown(1);

    // return the max node value
    return max;
  }

  siftDown(idx) {
    let val = this.array[idx];
    let leftChildIdx = this.getLeftChildIdx(idx);
    let rightChildIdx = this.getRightChildIdx(idx);
    let leftVal = this.array[leftChildIdx];
    let rightVal = this.array[rightChildIdx];
    
    // save variables for each of the left + right children + indices
    // check if left or right children do not exist, if they do not exist then set them to be -Infinity
    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    let swapIdx;
    // check value is less than child values
    if (val < leftVal && val < rightVal) {
      if (leftVal > rightVal) {
        swapIdx = leftChildIdx;
      } else {
        swapIdx = rightChildIdx;
      }
    }
    // if less, check which side is greater of two children,
    [this.array[idx], this.array[swapIdx]] = [
      this.array[swapIdx],
      this.array[idx]
    ];
    // set the greater child to swapIdx
    // swap parent & child
    // recursively call siftDown on the childIdx
    this.siftDown(swapIdx);
  }

  getParentIdx(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChildIdx(idx) {
    return idx * 2;
  }

  getRightChildIdx(idx) {
    return (idx * 2) + 1;
  }
}
