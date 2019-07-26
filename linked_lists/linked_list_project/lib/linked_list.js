// ============================================================================
// Implementation Exercise: Singly Linked List
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Singly Linked List and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Linked List reading!
//
// -----------
// Let's Code!
// -----------

// TODO: Implement a Linked List Node class here
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }

}

// TODO: Implement a Singly Linked List class here
class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // TODO: Implement the addToTail method here
    addToTail(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            // let temp = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1
        return this;
    }

    // TODO: Implement the removeTail method here
    removeTail() {
        if (!this.head) return;
        let temp = this.tail;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            let i = 0
            let cur = this.head;
            while (i < this.length - 2) {
                cur = cur.next;
                i += 1;
            }
            this.tail = cur;
            this.tail.next = null;
        }

        this.length -= 1;
        return temp;
    }

    // TODO: Implement the addToHead method here
    addToHead(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            let temp = this.head;
            this.head = newNode;
            this.head.next = temp;
        }

        this.length += 1;
        return this;
    }

    // TODO: Implement the removeHead method here
    removeHead() {
        if (!this.head) return;
        let temp = this.head;
        if (this.head === this.tail) {
            this.head = null;
            this.tail = null;
        } else {
            temp = this.head;
            this.head = this.head.next;
        }

        this.length -= 1;
        return temp;
    }

    // TODO: Implement the contains method here
    contains(target) {
        if (!this.head) false;

        let i = 0;
        let cur = this.head;
        while (i < this.length) {
            if (cur.value === target) return true;
            cur = cur.next;
            i += 1;
        }
        return false;
    }

    // TODO: Implement the get method here
    get(index) {
        if (!this.head || index > this.length) return null;

        let cur = this.head;
        let i = 0;
        while (i < index) {
            cur = cur.next;
            i += 1;
        }
        return cur;
    }

    // TODO: Implement the set method here
    set(index, val) {
        if (index >= this.length) return false;
        let cur = this.head;
        let i = 0;
        while (i < index) {
            cur = cur.next;
            i += 1;
        }
        cur.value = val;
        return true;
    }

    // TODO: Implement the insert method here
    insert(index, val) {
        if (index >= this.length) return false;
        let newNode = new Node(val);

        let prev = this.head;
        let i = 0;
        while (i < index - 1) {
          prev = prev.next;
          i += 1;
        }

        let next = prev.next;
        prev.next = newNode;
        newNode.next = next;
        this.length += 1;
        return true;
    }

    // TODO: Implement the remove method here
    remove(index) {
        if (!this.head || index > this.length) return;
        let i = 0;
        let prev = this.head;
        while (i < index - 1) {
            prev = prev.next;
            i += 1;
        }

        let removed = prev.next;
        let next = prev.next.next;
        prev.next = next;
        
        this.length -= 1;
        return removed;
    }

    // TODO: Implement the size method here
    size() {
        return this.length;
    }
}

exports.Node = Node;
exports.LinkedList = LinkedList;
