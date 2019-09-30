/**
 * // Definition for a Node.
 * function Node(val,next,random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
/**
 * @param {Node} head
 * @return {Node}
**/

// A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

// Return a deep copy of the list.

// Input:
// {"$id":"1","next":{"$id":"2","next":null,"random":{"$ref":"2"},"val":2},"random":{"$ref":"2"},"val":1}

// Explanation:
// Node 1's value is 1, both of its next and random pointer points to Node 2.
// Node 2's value is 2, its next pointer points to null and its random pointer points to itself.


// error check: !Node
// edge case: empty head

// init map
// starting from head,
// use helper function to copy given node into map,
// if the !node, return
// if !map[node.val],
// add node to map.
// set node val,
// set node next,
// for random pointer, recursively check to see if exists in map,
// if exists in map, use map value,
// if does not exist, add to map
// continue until all nodes have been added to map
// return map[head.val]


var copyRandomList = function(head) {
  if (!head) return null;

  let map = {};

  function clone(node) {
    if (!node) return null;

    if (!map[node.val]) {
      map[node.val] = new Node(node.val);
      map[node.val].next = clone(node.next);
      map[node.val].random = clone(node.random);        
    }

    return map[node.val];
  }

  return clone(head);

  // return map[head.val];
};



