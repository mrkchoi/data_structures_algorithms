// [null, 50, 24, 27, 20, 19, 26, 21]




// class MaxHeap {
//   constructor() {
//     this.array = [null];
//   }

//   insert(val) {
//     // add new val to end of array
//     // call siftup on the node at last idx of array
//     this.array.push(val);
//     this.siftUp(this.array.length - 1);
//   }

//   siftUp(idx) {
//     // if idx === 1, cannot sift up any more, so return
//     if (idx === 1) return;
//     // check curVal with parent Val,
//     let parentIdx = this.getParent(idx);
//     // if greater than parent val, swap places and recursively call siftUp on parentIdx
//     if (this.array[idx] > this.array[parentIdx]) {
//       [this.array[idx], this.array[parentIdx]] = [
//         this.array[parentIdx],
//         this.array[idx]
//       ];
//     }

//     this.siftUp(parentIdx);
//   }

//   deleteMax() {
//     // check if arr length === 2, then pop off last element and return
//     // if arr length === 1, return
//     if (this.array.length === 2) return this.array.pop();
//     if (this.array.length === 1) return null;

//     let lastIdx = this.array.length - 1;
//     [this.array[1], this.array[lastIdx]] = [this.array[lastIdx], this.array[1]];
//     let oldMax = this.array.pop();
//     // call siftDown on idx1
//     this.siftDown(1);

//     // return the max node value
//     return oldMax;
//   }

//   siftDown(idx) {
//     let val = this.array[idx];
//     let leftChildIdx = this.getLeftChild(idx);
//     let rightChildIdx = this.getRightChild(idx);
//     let leftVal = this.array[leftChildIdx];
//     let rightVal = this.array[rightChildIdx];

//     // save variables for each of the left + right children + indices
//     // check if left or right children do not exist, if they do not exist then set them to be -Infinity
//     if (leftVal === undefined) leftVal = -Infinity;
//     if (rightVal === undefined) rightVal = -Infinity;

//     let swapIdx;
//     // check value is less than child values
//     if (val > leftVal && val > rightVal) return;

//     if (leftVal > rightVal) {
//         swapIdx = leftChildIdx;
//     } else {
//         swapIdx = rightChildIdx;
//     }

//     // if less, check which side is greater of two children,
//     [this.array[idx], this.array[swapIdx]] = [
//       this.array[swapIdx],
//       this.array[idx]
//     ];
//     // set the greater child to swapIdx
//     // swap parent & child
//     // recursively call siftDown on the childIdx
//     this.siftDown(swapIdx);
//   }

//   getParent(idx) {
//     return Math.floor(idx / 2);
//   }

//   getLeftChild(idx) {
//     return idx * 2;
//   }

//   getRightChild(idx) {
//     return idx * 2 + 1;
//   }
// }





// class MaxHeap {
//     constructor() {
//         this.array = [null];
//     }

//     getParent(idx) {
//         return Math.floor(idx / 2);
//     }

//     getLeftChild(idx) {
//         return idx * 2;
//     }
    
//     getRightChild(idx) {
//         return (idx * 2) + 1;
//     }

//     insert(val) {
//         // insert val at end of array
//         // check val with parent val,
//         // if greater than parent val, swap places and set new pointer to parentIdx,
//         // recursively call this.siftUp
//         // base case: idx === 1
//         this.array.push(val);
//         let nodeIdx = this.array.length - 1;
//         this.siftUp(nodeIdx);
//     }

//     siftUp(idx) {
//         if (idx === 1) return;

//         let parentIdx = this.getParent(idx);

//         if (this.array[parentIdx] < this.array[idx]) {
//             [this.array[parentIdx], this.array[idx]] = [
//                 this.array[idx],
//                 this.array[parentIdx]
//             ];
//         }
//         this.siftUp(parentIdx);
//     }

//     deleteMax() {
//         // swap last element of array (leaf node) with parent
//         // sift down parent until at resting position

//         if (this.array.length === 2) return this.array.pop();
//         if (this.array.length === 1) return null;

//         let lastIdx = this.array.length - 1;
//         [this.array[1], this.array[lastIdx]] = [
//           this.array[lastIdx],
//           this.array[1]
//         ];

//         let oldMax = this.array.pop();

//         this.siftDown(1);
//         return oldMax;
//     }

//     siftDown(idx) {

//         let array = this.array;
//         let leftIdx = this.getLeftChild(idx);
//         let rightIdx = this.getRightChild(idx);
//         let leftVal = array[leftIdx];
//         let rightVal = array[rightIdx];

//         if (leftVal === undefined) leftVal = -Infinity;
//         if (rightVal === undefined) rightVal = -Infinity;

//         if (array[idx] > leftVal && array[idx] > rightVal) return;

//         let swapIdx;
//         if (leftVal > rightVal) {
//             swapIdx = leftIdx;
//         } else {
//             swapIdx = rightIdx;
//         }

//         [array[idx], array[swapIdx]] = [array[swapIdx], array[idx]];

//         this.siftDown(swapIdx);
//     }
// }



// implement a MaxHeap class
// insert, deleteMax, getParent, getLeftChild, getRightChild, siftUp, siftDown

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
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftUp(idx) {
    if (idx === 1) return;
    let parentIdx = this.getParent(idx);

    if (this.array[idx] > this.array[parentIdx]) {
      [this.array[idx], this.array[parentIdx]] = [
        this.array[parentIdx],
        this.array[idx]
      ];
      this.siftUp(parentIdx);
    } else {
      return;
    }
    
  }

  deleteMax() {
    if (this.array.length === 2) return this.array.pop();
    if (this.array.length === 1) return null;

    [this.array[1], this.array[this.array.length - 1]] = [
      this.array[this.array.length - 1],
      this.array[1]
    ];

    let max = this.array.pop();
    this.siftDown(1);

    return max;
  }

  siftDown(idx) {
    let val = this.array[idx];
    let leftIdx = this.getLeftChild(idx);
    let rightIdx = this.getRightChild(idx);
    let leftVal = this.array[leftIdx];
    let rightVal = this.array[rightIdx];

    if (leftVal === undefined) leftVal = -Infinity;
    if (rightVal === undefined) rightVal = -Infinity;

    if (val > leftVal && val > rightVal) return;

    let swapIdx;
    if (leftVal > rightVal) {
      swapIdx = leftIdx;
    } else {
      swapIdx = rightIdx;
    }

    [this.array[idx], this.array[swapIdx]] = [
      this.array[swapIdx],
      this.array[idx]
    ];

    this.siftDown(swapIdx);
  }
}




module.exports = {
    MaxHeap
};