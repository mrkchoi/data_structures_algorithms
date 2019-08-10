class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.length = 0
    this.hash = {};
    this.head = null;
    this.tail = null;
  }

  get(key) {
    let resp = this.hash[key];
    
    let node = this.hash[key]
    if (node.prev) {
      node.prev.next = node.next;
    }
    if (node.next) {
      node.next.prev = node.prev;
    }
    node.next = null;
    node.prev = this.tail;
    this.tail = node;

    return resp;
  }

  put(key, val) {
    this.checkCapacityAndDrop();
    let node = new ListNode(val);
    if (this.length === 0) {
      this.head = node;
    } else if (this.length === 1) {
      this.tail = node;       
      this.head.next = node;
      node.prev = this.head;
    } else {
      node.prev = this.tail;
      this.tail = node;
    }
    this.length += 1;
    this.hash[key] = node;
  }

  checkCapacityAndDrop() {
    if (this.length >= this.capacity - 1) {
      this.head = this.head.next;
      this.head.prev = null;
      this.length -= 1;
    }
  }
}

let LRU = new LRUCache(5);
// set its capacity at 5
LRU.put(4, 'hello world');
LRU.put(5, 'does this work')
LRU.put(6, 'testing 3')
LRU.put(7, 'testing 4')
LRU.put(8, 'testing 5')
// LRU.put(9, 'this should kick out hello world')

// console.log(LRU.head, ' is the head');

// console.log(LRU.tail, ' is the tail')

console.log(LRU.get(5));
