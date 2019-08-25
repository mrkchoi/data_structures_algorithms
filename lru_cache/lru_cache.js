// // init Node class
// // attributes: val, key, next, prev

// // init LinkedList class
// // attributes: head, tail, length
// // methods: insert, remove, moveToTail

// // implement LRUCache
// // attributes: LRUkey, map, linkedList
// // methods: get(key), put(key, value);


// /**
//  * @param {number} capacity
//  */
// var LRUCache = function(capacity) {};

// /**
//  * @param {number} key
//  * @return {number}
//  */
// LRUCache.prototype.get = function(key) {};

// /**
//  * @param {number} key
//  * @param {number} value
//  * @return {void}
//  */
// LRUCache.prototype.put = function(key, value) {};

// /**
//  * Your LRUCache object will be instantiated and called as such:
//  * var obj = new LRUCache(capacity)
//  * var param_1 = obj.get(key)
//  * obj.put(key,value)
//  */


// init node class. keep track of val, key, prev, next
// init LRUCache class,
// keep track of LRUKey, list, head, tail, length, 
// methods for get(key), put(key, val)
// for get(key),
  // if !cache[key], return -1
  // else, return value and move node to moveToTail
// for set(key, val),
  // if exists, update position
  // if !exists, check if cache is full,
    // if full, move head pointer for list, delete from cache object
    // if not full, add node to tail and in object
  

class Node {
  constructor(key, val) {
    this.val = val;
    this.key = key;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = {};
    this.list = null;
    this.tail = null;
    this.head = null;
    this.length = 0;
  }

  get(key) {
    if (!this.cache[key]) return -1;

    // move to tail and return node value
    this.moveToTail(this.cache[key]);
    return this.cache[key].val;
  }

  put(key, val) {
    // if cache is empty
    if (!this.list) {
      let node = new Node(key, val);
      this.list = node;
      this.head = node;
      this.tail = node;
      this.cache[key] = node;
      this.length += 1;
      return;
    }

    let node = new Node(key, val);

    // if already exists
    // update node value
    // moveToTail(cache[key])
    if (this.cache[key]) {
      this.cache[key].val = val;
      this.moveToTail(this.cache[key]);
    } else if (this.full()){
      // if does not already exist && cache is full
      this.removeFromHead();
      this.addToTail(node);
    } else if (!this.full()) {
      // if does not already exist && cache is not full
      this.addToTail(node);
    }
  }

  full() {
    return this.length >= this.capacity;
  }

  removeFromHead() {
    // remove node
    // decrement length
    // remove node k/v from cache
    let node = this.head;
    delete this.cache[node.key];
    if (!node.next) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    };
    this.length -= 1;
  }

  addToTail(node) {
    // update tail
    // increment length
    // add to cache object
    if (!this.tail) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail.next.prev = this.tail;
    }
    this.cache[node.key] = node;
    this.length += 1;
  }

  moveToTail(node) {
    if (node === this.tail) return;
    if (node === this.head) {
      this.tail.next = node;
      this.tail.next.prev = this.tail;
      this.tail = this.tail.next;
      this.head = this.head.next;
      this.head.prev = null;
    }
  }
}



























/*******************
* LRU Cache = two data structures to manage the elements. 
* Map: used to store elements in the list
* Double Linked List: used to keep track of the ordering when performing operations
* A doubly-linked list and a map gives us the following:
* Time complexity: O(1)
* Space complexity: O(n)
* This is achieved by having the doubly-linked list manage when we have to rearrange the elements while the map gives us direct 
* access to the resource. Look-up in a map is O(1) by providing the key. 
* We introduce the concept of 
* - the “head”, which is the least recently used entry, 
* - the “tail”, which is the most recently used entry, 
* to keep track of the order when elements are retrieved or added. 
* There are two pointers per node which is relatively low cost to manage the ordering.
*******************/
var LRUCache = function(capacity) {
  this.capacity = capacity; 
  this.map = new Map(); //this stores the whole array

  //boundaries for double LL
  this.head = {}; 
  this.tail = {};
  this.head.next = this.tail; //initialize double LL
  this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if(this.map.has(key)){
    //remove elem from current position
    let c = this.map.get(key);
    c.prev.next = c.next;
    c.next.prev = c.prev;

    
    this.tail.prev.next = c; //insert it after the last element (elem before tail) since we just used it
    c.prev = this.tail.prev; //update c.prev and next pointer
    c.next = this.tail;
    this.tail.prev = c; //update last element as tail
    return c.value;
  } else {
    return -1; //element does not exist
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if(this.get(key) !== -1){ //key does not exist, update last element value 
    this.tail.prev.value = value; 
  } else {
    //need to check if map size is at capacity
    if(this.map.size === this.capacity) { 
      //delete item both from map and DLL
      this.map.delete(this.head.next.key); //delete first element of list
      this.head.next = this.head.next.next; //update first element as next element
      this.head.next.prev = this.head; 
    }

    let newNode = {
      value, 
      key
    }; //each node is a hashtable that stores key and value 
    
    
    //When adding a new node, we need to update both map and DLL
    this.map.set(key, newNode); //add current node to map 
    this.tail.prev.next = newNode; //add node to end of the list
    newNode.prev = this.tail.prev; //update prev and next pointers of newNode
    newNode.next = this.tail;
    this.tail.prev = newNode; //update last element
  }
};








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
    if (this.map.has(key)) {
      let node = this.map.get(key);
      node.prev.next = node.next;
      node.next.prev = node.prev;

      this.tail.prev.next = node;
      node.prev = this.tail.prev;
      node.next = this.tail;
      this.tail.prev = node;
      return node.value;
    } else {
      return -1;
    }
  }

  put(key, value) {
    if (this.get(key) !== -1) {
      this.tail.prev.value = value;
    } else {
      if (this.map.size === this.capacity) {
        this.map.delete(this.head.next.key);
        this.head.next = this.head.next.next;
        this.head.next.prev = this.head;
      }

      let newNode = {
        key,
        value
      };

      this.map.set(key, newNode);
      this.tail.prev.next = newNode;
      newNode.prev = this.tail.prev;
      newNode.next = this.tail;
      this.tail.prev = newNode;
    }
  }
}