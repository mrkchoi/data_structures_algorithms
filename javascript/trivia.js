

// what will the following output to the console?

(function() {
  let a = b = 3;
})();

console.log(a);
console.log(b);




// what will the following output to the console and why?
var myObject = {
  foo: "bar",
  func: function() {
    var self = this;
    console.log("outer func:  this.foo = " + this.foo);
    console.log("outer func:  self.foo = " + self.foo);
    (function() {
      console.log("inner func:  this.foo = " + this.foo);
      console.log("inner func:  self.foo = " + self.foo);
    })();
  }
};

myObject.func();


// what will be the output of the following code?

let a = 21;

const girl = () => {
  console.log(a);
  let a = 20;
}
girl();


// Consider the following code. What will the output be, and why?
(function () {
    try {
        throw new Error();
    } catch (x) {
        var x = 1, y = 2;
        console.log(x);
    }
    console.log(x);
    console.log(y);
})();





// Consider the following code. What will the output be, and why?
var length = 10;
function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn = fn.bind(this);
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);



// write a function, where given a DOM element, will visit that element and all descendant elements, passing each to a given callback function

function visitAllChildren(element, callback) {
  let stack = [element];

  while (stack.length) {
    let node = stack.pop();
    callback(node);

    [...node.children].forEach(child => {
      stack.push(child);
    });
  }
}

let body = document.querySelector('body');
let callback = function(node) {
  console.log(node);
}
visitAllChildren(body, callback);





// what is the output?
console.log(
  (function f(n) {
    return n > 1 ? n * f(n - 1) : n;
  })(10)
);


// what is the output?

var a = {};
var b = {
  key: 'b'
}
var c = {
  key: 'c'
}

a[b] = 123;
a[c] = 456;

console.log(a[b]);

a = {
  '[object Object]': 456
}


// what will the following output?

console.log("0 || 1 = " + (0 || 1));
console.log("1 || 2 = " + (1 || 2));
console.log("0 && 1 = " + (0 && 1));
console.log("1 && 2 = " + (1 && 2));


// what will be the output? why?

for (var i = 0; i < 10; i++) {
  (function(i) {
    setTimeout(() => {
      console.log(i);
    }, 1000);
  })(i);
}


// fix the following code
var list = readHugeList();

var nextListItem = function() {
  if (list.length <= 0) return;
  var item = list.pop();

  if (item) {
    // process the list item...
    nextListItem();
  }
};


var arr1 = [j,o,h,n];
var arr2 = [n,h,o,j];
var arr3 = [j,o,n,e,s]
arr2.push(arr3);
arr2 = [n, h, o, j, [j,o,n,e,s]];


function sum(num1, num2) {
  if (num1 && num2) return num1 + num2;

  return function(finalNum) {
    return num1 + finalNum;
  }
}


function isInteger(x) {
  return !!Number(x);
}


// what is the significance/benefits of including 'use strict' at the beginning of a JavaScript file?

// enforce stricter syntax / error handling, no global variables, no support for newer ES features, disallows duplicate parameter values/names, throws error in case of null/undefined 'this' keyword, will throw error on 



// write a function that caches results

function cacheFn(fn) {
  let cache = {};

  return function(arg) {
    if (cache[arg]) {
      return cache[arg];
    } else {
      cache[arg] = fn(arg);
      return cache[arg];
    }
  }
}

