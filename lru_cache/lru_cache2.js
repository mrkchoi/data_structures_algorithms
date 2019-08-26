// implement an lru cache with get(key) & put(key, val) in O(1)

// use a list to keep track of element ordering
// use a new Map()/object to have constant time access to nodes in list

class Node {
  constructor(val) {
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();

    this.head = {};
    this.tail = {};
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key) {
    // check if exists in map,
    // if does not exist, return -1
    if (this.map.has(key)) {
      // if exists,
      let node = this.map.get(key);
      // remove node from position
      // rewire pointers from prev + next
      node.prev.next = node.next;
      node.next.prev = node.prev;
      // move to tail
      this.tail.prev.next = node;
      node.prev = this.tail.prev;
      node.next = this.tail;
      this.tail.prev = node;
      // return value of node
      return node.val;
    } else {
      return -1;
    }
  }

  put(key, val) {
    // call this.get(key),
    // if !== -1, then already exists and has been moved to end of list
    // then, update val of this.tail.prev
    if (this.get(key) !== -1) {
      this.tail.prev.val = val;
    } else {
      // create new node
      let newNode = {
        key,
        val
      };

      // if at capacity,
      // remove node from map
      // remove node from head
      if (this.capacity === this.map.size) {
        this.map.delete(this.head.next.key);
        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;
      }
      // insert newNode at tail
      // insert node into map
      // key is key, val is the actual newNode!
      this.map.set(key, newNode);
      this.tail.prev.next = newNode;
      newNode.prev = this.tail.prev;
      newNode.next = this.tail;
      this.tail.prev = newNode;
    }
  }
}
