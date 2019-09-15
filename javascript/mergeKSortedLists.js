
// merge K sorted linked lists
// input: array of lists
// output: head of singly linked list in sorted order


// error check: non-array, lists.length === 0, return empty ListNode, one list, return the single list

// helper function to merge two lists together
// while lists.length > 1, take first two lists, unshift then merge together into a single list,
// push list to end of input arr, 'lists'
// after all lists have been reduced to single list, return single list (lists[0])


// error check: empty list
// while list1 && list2
// compare first two elements, less one goes first, move pointer to next
// check again, set head.next = smaller element
// continue until one or both of the lists is empty
// append the rest of the non-empty list to the single list
// return single list
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

var mergeTwoLists = function(l1, l2) {
  let list = new ListNode();
  let head = list;
  
//   if (!list1 && !list2) return;
//   if (!list1) return list2;
//   if (!list2) return list1;
  

  while (l1 || l2) {
    if (l1 === null) {
      list.next = l2;
      l2 = l2.next;
    } else if (l2 === null) {
      list.next = l1;
      l1 = l1.next;
    } else if (l1.val < l2.val) {
      list.next = l1;
      l1 = l1.next;
    } else {
      list.next = l2;
      l2 = l2.next;
    }
    list = list.next;
  }

  return head.next;
};


var mergeKLists = function(lists) {
  if (!Array.isArray(lists)) throw new TypeError('Invalid type: input must be array');
  if (lists.length === 0) return null;
  if (lists.length === 1) return lists[0];

  while (lists.length > 1) {
    let list1 = lists.shift();
    let list2 = lists.shift();

    let mergedList = mergeTwoLists(list1, list2);

    lists.push(mergedList);
  }

  return lists[0];
};























































































// function mergeLists(a, b) {
//   const dummy = new ListNode(0);
//   let temp = dummy;
//   while (a !== null && b !== null) {
//     if (a.val < b.val) {
//       temp.next = a;
//       a = a.next;
//     } else {
//       temp.next = b;
//       b = b.next;
//     }
//     temp = temp.next;
//   }
//   if (a !== null) {
//     temp.next = a;
//   }
//   if (b !== null) {
//     temp.next = b;
//   }
//   return dummy.next;
// }

// var mergeKLists = function(lists) {
//   if (lists.length === 0) {
//     return null;
//   }
//   // two two
//   // priority queue
//   while (lists.length > 1) {
//     let a = lists.shift(); // the head will contains the "less" length list
//     let b = lists.shift(); // acturally, we can use the linkedlist to replace it, the while loop will be the while( list.header.next !== null || lists.length > 0)
//     const h = mergeLists(a, b);
//     lists.push(h);
//   }
//   return lists[0];
// };

// // /**
// //  * Definition for singly-linked list.
// //  * function ListNode(val) {
// //  *     this.val = val;
// //  *     this.next = null;
// //  * }
// //  */
// // /**
// //  * @param {ListNode[]} lists
// //  * @return {ListNode}
// //  */

// var mergeKLists = function(lists) {
//   if (lists.length === 0) return null; // []
//   if (!Array.isArray(lists)) throw new TypeError('Invalid input: input type must be array');

//   let heap = new MinHeap();

//   lists.forEach(node => {
//     while(node) {
//       heap.insert(node);
//       node = node.next;
//     }
//   });

//   let node = new ListNode(null);
//   let output = node;

//   while (heap.keys.length > 1) {
//     node.next = heap.deleteMin();
//     node = node.next;
//   }

//   node.next = null;
//   return output.next;
// };

// class MinHeap {
//   constructor() {
//     this.keys = [null];
//   }

//   getParentIdx(idx) {
//     return Math.floor(idx / 2);
//   }

//   getLeftChildIdx(idx) {
//     return (idx * 2);
//   }

//   getRightChildIdx(idx) {
//     return (idx * 2) + 1;
//   }

//   insert(node) {
//     this.keys.push(node);
//     this.siftUp(this.keys.length - 1);
//   }

//   siftUp(idx) {
//     if (idx <= 1) return;
//     let parentIdx = this.getParentIdx(idx);

//     if (this.keys[idx].val < this.keys[parentIdx].val) {
//       [this.keys[idx], this.keys[parentIdx]] =
//       [this.keys[parentIdx], this.keys[idx]];

//       this.siftUp(parentIdx);
//     }
//   }

//   deleteMin() {
//     if (this.keys.length === 1) return;
//     if (this.keys.length === 2) return this.keys.pop();

//     [this.keys[1],this.keys[this.keys.length - 1]] =
//     [this.keys[this.keys.length - 1],this.keys[1]]

//     let min = this.keys.pop();
//     this.siftDown(1);
//     return min;
//   }

//   siftDown(idx) {
//     let leftIdx = this.getLeftChildIdx(idx);
//     let rightIdx = this.getRightChildIdx(idx);

//     if (leftIdx >= this.keys.length && rightIdx >= this.keys.length) return;

//     let leftVal = leftIdx < this.keys.length ? this.keys[leftIdx].val : Infinity;
//     let rightVal = rightIdx < this.keys.length ? this.keys[rightIdx].val : Infinity;

//     let swapIdx = leftVal < rightVal ? leftIdx : rightIdx;

//     if (this.keys[idx].val > this.keys[swapIdx].val) {
//       [this.keys[idx],this.keys[swapIdx]] =
//       [this.keys[swapIdx],this.keys[idx]];

//       this.siftDown(swapIdx);
//     }
//   }
// }
