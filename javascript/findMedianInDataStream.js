// var MedianFinder = function() {
//   this.ary = [];
// };

// /**
//  * @param {number} num
//  * @return {void}
//  */
// MedianFinder.prototype.addNum = function(num) {
//   var low = 0;
//   var high = this.ary.length - 1;

//   while (low <= high) {
//     var mid = Math.floor((high + low) / 2);

//     if (this.ary[mid] < num) {
//       low = mid + 1;
//     } else {
//       high = mid - 1;
//     }
//   }

//   // insert at  location trick for javascript array.
//   this.ary.splice(low, 0, num);
// };

// /**
//  * @return {number}
//  */
// MedianFinder.prototype.findMedian = function() {
//   if (this.ary.length % 2 == 0) {
//     var mid = this.ary.length / 2;
//     return (this.ary[mid] + this.ary[mid - 1]) / 2;
//   } else {
//     var mid = Math.floor(this.ary.length / 2);
//     return this.ary[mid];
//   }
// };

/**
 * initialize your data structure here.
 */

// init an array of data
// as we add elements to the data stream, we run a binary search to see where the new element should be inserted
// once we find the idx where the element belongs, we can splice the array and insert the new element into our MedianFinder
// When we call findMedian,
// we check to see if the length of the array is odd or even,
// if odd, find the midpoint and return the value in the middle of the array
// if even, find the two elements are that represent the midpoint,
// take the average of the two elements and return the element

// class MedianFinder {
//   constructor() {
//     this.data = [];
//   }

//   /**
//    * @param {number} num
//    * @return {void}
//    */
//   addNum(num) {
//     let left = 0;
//     let right = this.data.length - 1;

//     while (left <= right) {
//       let midIdx = Math.floor((right + left) / 2);

//       if (num > this.data[midIdx]) {
//         left = midIdx + 1;
//       } else {
//         right = midIdx - 1;
//       }
//     }
//     this.data.splice(left, 0, num);
//   }

//   /**
//    * @return {number}
//    */
//   findMedian() {
//     // console.log(this.data);
//     if (this.data.length % 2 !== 0) {
//       let midIdx = Math.floor(this.data.length / 2);
//       return this.data[midIdx];
//     } else {
//       let mid = this.data.length / 2;
//       let avgOfMedian = (this.data[mid] + this.data[mid - 1]) / 2;
//       return avgOfMedian;
//     }
//   }

//   /**
//    * Your MedianFinder object will be instantiated and called as such:
//    * var obj = new MedianFinder()
//    * obj.addNum(num)
//    * var param_2 = obj.findMedian()
//    */
// }





// round #2

// we initialize an instance of our MedianFinder class with an empty array
// when we call insert on the array,
// we run a binary search to check where the element should be placed in the array
// init left && right pointers
// while (left <= right),
// find the midIdx,
// compare the current number with the number at the midpoint of the array,
// if num < this.array[midIdx],
// this means that we should move the right pointer to be mid - 1,
// recalculate the midIdx and continue until left > right,
// if num >= this.array[midIdx], the move left pointer to be mid + 1,
// we cam group the > && === together because if we have found match, we can still continue to increment the left side to mid + 1,
// this will allow us to insert/splice the new element after the existing matching element in the array
// once we get to the point where we have cut down on the original input array to the point where we have isolated a single element and left is no longer less than right, then we know we can insert the new element at the index following the midpoint
// we splice the new element

// for median lookup,
// we check to see if the length of the array is odd or even,
// if odd, then we can find the single midpoint of the array and return its value
// if even, then we know that there are two elements that are sharing the midpoint, so we can add them together and take the average value between the two elements

class MedianFinder {
  constructor() {
    this.data = [];
  }

  addNum(num) {
    let left = 0;
    let right = this.data.length - 1;

    while (left <= right) {
      let midIdx = Math.floor((left + right) / 2);
      if (num > this.data[midIdx]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    this.data.splice(left, 0, num);
  }

  findMedian() {
    if (this.data.length % 2 === 0) {
      let midIdx = this.data.length / 2;
      return (this.data[midIdx] + this.data[midIdx - 1]) / 2;
    } else {
      let midIdx = Math.floor(this.data.length / 2);
      return this.data[midIdx];
    }
  }
}
