// animal shelter

// dogs, cats 
// users can choose a dog or a cat or the oldest of either 

// enqueue 
// dequeueAny 
// dequeueDog 
// dequeueCat

// animal object w/ dog or cat variable 
// no limit to animal shelter 

// step 1) create class
// step 2) in constructor create queues for dogs and cats

// enqueue 
  // 1) check the type 
  // 2) insert animal into appropriate queue 

// dequeueAny 
  // 1) determine which is older 
  // 2) call dequeueDog or cat 

// dequeueDog/Cat
  // 1) remove from it's list 
  // 2) return it

// let dogs = []
// let cats = []

class AnimalShelter {
  constructor() {
    this.dogQueue = [];
    this.catQueue = [];
  }

  enqueue(animal) {
    animal.entryTime = new Date();
    if (animal.type === 'dog') {
      this.dogQueue.push(animal);
    } else if (animal.type === 'cat') {
      this.catQueue.push(animal);
    } else {
      new Error('cant put that here!')
    }
  }

  dequeueAny() {
    if (this.dogQueue[0].entryTime < this.catQueue[0].entryTime) {
      return this.dequeueDog();      
    } else {
      return this.dequeueCat();
    }
  }

  dequeueCat() {
    let kitty = this.catQueue.shift();
    return kitty;
  }

  dequeueDog() {
    let dog = this.dogQueue.shift();
    return dog;
  }
}

class Animal {
  constructor(name, type, entryTime) {
    this.name = name;
    this.type = type;
    this.entryTime = entryTime;
  }
}

// class Dog extends Animal {
  
// }

// -------------------

// sort a stack so the smallest items are on top
// you can use another stack 
// you can not use another data structure
// stack supports: push, pop, peek, and isEmpty

// [4, 2, 3, 1] ==> [4, 3, 2, 1]

// check if stack is <= 1 el 
// [9, 8, 5, 3, 2]
// [2, 3, 5, 8, 9]
// var = 5 

function sortAStack(stack) {
  let helperStack = [];
  let holder;
  let sorted = false; 
  while (!sorted) {
    while (!stack.isEmpty()) {
      let temp = stack.pop();
      if (!holder) {
        if (temp < stack.peek()) {
          helperStack.push(temp);
        } else {
          holder = temp;
        }
      } else {
        if (temp < holder) {
          helperStack.push(temp);
        } else {
          helperStack.push(holder);
          holder = temp;
        }
      }
    }
    sorted = true;
    while (!helperStack.isEmpty()) {
      let next = helperStack.pop()
      if (!stack.isEmpty && stack.peek() < next) {
        sorted = false;
      }
      stack.push(next);
    }
  }
  return stack;
}

// implementing w array methods to test 

function sortAStackChanged(stack) {
  let helperStack = [];
  let holder;
  let sorted = false;
  while (!sorted) {
    while (stack.length > 0) {
      let temp = stack.pop();
      if (!holder) {
        if (temp < stack[stack.length - 1]) {
          helperStack.push(temp);
        } else {
          holder = temp;
        }
      } else {
        if (temp < holder) {
          helperStack.push(temp);
        } else {
          helperStack.push(holder);
          holder = temp;
        }
      }
    }
    sorted = true;
    stack.push(holder);
    while (helperStack.length > 0) {
      let next = helperStack.pop()
      if (stack.length > 0 && stack[stack.length - 1] < next) {
        sorted = false;
      }
      stack.push(next);
    }
  }
  return stack;
}

let test = [9, 8, 6, 5, 4, 3, 10, 1]
console.log(sortAStackChanged(test));
