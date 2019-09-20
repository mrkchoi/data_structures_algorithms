// LC 347. Top K Frequent Elements

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// Given a non-empty array of integers, return the k most frequent elements.

// Example 1:

// Input: nums = [1,1,1,2,2,3], k = 2
// Output: [1,2]
// Example 2:

// Input: nums = [1], k = 1
// Output: [1]

// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

// error check: nom-array
// create frequency table of all elements in nums + their counts O(n)
// init maxHeap, interate through each element inside of the frequency table
// the elements inside of the maxHeap should be stored by count frequency [el, freq]
// call deleteMax k times, and store the values of the max frequency elements
// return the array of the maximum frequency elemnts of size k

function topKFrequent(nums, k) {
  if (!Array.isArray(nums))
    throw new TypeError("Invalid input: input type must be array");

  let freqTable = {};
  let maxHeap = new MaxHeap();

  nums.forEach(num => {
    if (freqTable[num] === undefined) {
      freqTable[num] = 1;
    } else {
      freqTable[num] += 1;
    }
  });

  Object.keys(freqTable).forEach(key => {
    maxHeap.insert([key, freqTable[key]]);
  });

  let mostFrequentElements = [];

  let i = 0;
  while (i < k) {
    mostFrequentElements.push(maxHeap.deleteMax());
    i += 1;
  }

  return mostFrequentElements;
}

// data format => [key, freq]

class MaxHeap {
  constructor() {
    this.data = [null];
  }

  getParentIdx(idx) {
    return Math.floor(idx / 2);
  }

  getLeftChildIdx(idx) {
    return idx * 2;
  }

  getRightChildIdx(idx) {
    return idx * 2 + 1;
  }

  insert(data) {
    this.data.push(data);
    let lastIdx = this.data.length - 1;
    this.siftUp(lastIdx);
  }

  siftUp(idx) {
    if (idx <= 1) return;

    let parentIdx = this.getParentIdx(idx);

    if (this.data[idx][1] > this.data[parentIdx][1]) {
      [this.data[idx], this.data[parentIdx]] = [
        this.data[parentIdx],
        this.data[idx]
      ];
      this.siftUp(parentIdx);
    }
  }

  deleteMax() {
    if (this.data.length <= 1) return;
    if (this.data.length === 2) return this.data.pop()[0];

    let lastIdx = this.data.length - 1;
    [this.data[1], this.data[lastIdx]] = [this.data[lastIdx], this.data[1]];
    let max = this.data.pop()[0];
    this.siftDown(1);
    return max;
  }

  siftDown(idx) {
    let leftChildIdx = this.getLeftChildIdx(idx);
    let rightChildIdx = this.getRightChildIdx(idx);

    if (!this.data[leftChildIdx] && !this.data[rightChildIdx]) return;

    let leftVal = this.data[leftChildIdx]
      ? this.data[leftChildIdx]
      : [0, -Infinity];
    let rightVal = this.data[rightChildIdx]
      ? this.data[rightChildIdx]
      : [0, -Infinity];

    let swapIdx;

    if (leftVal[1] > rightVal[1]) {
      swapIdx = leftChildIdx;
    } else {
      swapIdx = rightChildIdx;
    }

    if (this.data[swapIdx][1] > this.data[idx][1]) {
      [this.data[swapIdx], this.data[idx]] = [
        this.data[idx],
        this.data[swapIdx]
      ];
      this.siftDown(swapIdx);
    }
  }
}
