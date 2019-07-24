// ============================================================================
// Interview Problem: StackQueue
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement your preferred Stack implementation, including the methods:
//
//   - Push 
//   - Pop 
//   - Size
//
// Then, implement a Queue by instantiating two Stack instances for storage.
//
// The StackQueue implementation should include the following methods:
//
//   - Enqueue
//   - Dequeue
//   - Size
//
// -----------
// Let's code!
// -----------

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
        this.length = 0;
    }

}

class QueueStack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.inQueue = new Queue();
        this.outQueue = new Queue();
    }

    size() {
        return 
    }
}

exports.Node = Node;
exports.Stack = Stack;
exports.StackQueue = StackQueue;
