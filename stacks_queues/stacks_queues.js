
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
    if (!this.bottom) {
      return null;
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