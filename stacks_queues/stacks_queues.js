
// Implement a stack


class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.top || !this.bottom) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      let temp = this.top;
      this.top = newNode;
      this.top.next = temp;
    }
    return this.length += 1;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    let temp = this.top;
    if (this.top === this.bottom) {
      this.bottom = null;
    }

    this.top = this.top.next;
    this.length -= 1;

    return temp.value;
  }

  size() {
    return this.length;
  }
}














// Implement a queue


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

  enqueue(val) {
    let newNode = new Node(val);
    // if empty
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      // if not empty
      this.back.next = newNode;
      this.back = newNode;
    }
    return this.length += 1;
  }

  dequeue() {
    if (!this.front) {
      return null;
    }
    let temp = this.front;
    if (this.front === this.back) {
      this.back = null;
    }
    this.front = this.front.next;
    this.length -= 1;
    return temp.value;
  }

  size() {
    return this.length;
  }
}










