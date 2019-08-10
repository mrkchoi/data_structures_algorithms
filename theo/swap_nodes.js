var swapPairs = function (head) {
  if (!head) { return null; }
  let finalHead = head;
  let node = head;
  if (node.next) {
    finalHead = head.next;
    let child = node.next;
    node.next = swapPairs(node.next.next);
    child.next = node;
  }
  node = node.next;
  return finalHead;
};

// i'm not coding out nodes for this but just trust me it works - verified by leetcode.