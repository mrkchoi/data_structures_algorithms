// LC 143. Reorder List

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
*/



// error check: empty list, list of length 1

// init array,
// iterate through nodes of list, adding ref to each node and pushing into array
// set pointers to start && end of list,
// init list = new ListNode();
// set list.next = start, list.next = end;
// start += 1, end -= 1;
// iterate through array while start < end;
// check at end if arr length is odd,
// if true, add last middle node to end of list, and set next to null
// return single list

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

let l = new ListNode(1);
let h = l;
l.next = new ListNode(2);
l = l.next;
l.next = new ListNode(3);
l = l.next;
l.next = new ListNode(4);
l = l.next;

var reorderList = function(head) {
  if (head === null || head.next === null) return;
  
  let arr = [];
  let node = head;
  while (node) {
    arr.push(node);
    node = node.next;
  }
  
  let list = new ListNode();

  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    list.next = arr[start];
    list = list.next;
    list.next = arr[end];
    list = list.next;
    start += 1;
    end -= 1;
  }

  if (arr.length % 2 != 0) {
    list.next = arr[start];
    list = list.next;
  }
  list.next = null;
};

