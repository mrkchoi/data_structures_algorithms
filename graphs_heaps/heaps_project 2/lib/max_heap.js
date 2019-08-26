// [null, 50, 24, 27, 20, 19, 26, 21]

class MaxHeap {
    constructor() {
        this.array = [null];
    }

    getParent(idx) {
        return Math.floor(idx / 2);
    }

    getLeftChild(idx) {
        return idx * 2;
    }
    
    getRightChild(idx) {
        return (idx * 2) + 1;
    }

    insert(val) {
        // insert val at end of array
        // check val with parent val,
        // if greater than parent val, swap places and set new pointer to parentIdx,
        // recursively call this.siftUp
        // base case: idx === 1
        this.array.push(val);
        let nodeIdx = this.array.length - 1;
        this.siftUp(nodeIdx);
    }

    siftUp(idx) {
        if (idx === 1) return;

        let parentIdx = this.getParent(idx);

        if (this.array[parentIdx] < this.array[idx]) {
            [this.array[parentIdx], this.array[idx]] = [
                this.array[idx],
                this.array[parentIdx]
            ];
        }
        this.siftUp(parentIdx);
    }

    deleteMax() {
        // swap last element of array (leaf node) with parent
        // sift down parent until at resting position

        if (this.array.length === 2) return this.array.pop();
        if (this.array.length === 1) return null;

        let lastIdx = this.array.length - 1;
        [this.array[1], this.array[lastIdx]] = [
          this.array[lastIdx],
          this.array[1]
        ];

        let oldMax = this.array.pop();

        this.siftDown(1);
        return oldMax;
    }

    siftDown(idx) {

        let array = this.array;
        let leftIdx = this.getLeftChild(idx);
        let rightIdx = this.getRightChild(idx);
        let leftVal = array[leftIdx];
        let rightVal = array[rightIdx];

        if (leftVal === undefined) leftVal = -Infinity;
        if (rightVal === undefined) rightVal = -Infinity;

        if (array[idx] > leftVal && array[idx] > rightVal) return;

        let swapIdx;
        if (leftVal > rightVal) {
            swapIdx = leftIdx;
        } else {
            swapIdx = rightIdx;
        }

        [array[idx], array[swapIdx]] = [array[swapIdx], array[idx]];

        this.siftDown(swapIdx);
    }
}

module.exports = {
    MaxHeap
};