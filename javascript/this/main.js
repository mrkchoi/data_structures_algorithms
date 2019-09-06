
// // understanding the difference between the 'this' keyword in arrow functions vs standard function declarations


// let a = {'a': "'this' is the object 'a'"};

// a.b = function() {
//   console.log(this);
// }

// a.b();

// // what will the above code output?




// function newThisFunction() {
//   let c = {'c': "'this' is the object 'c'"};
//   c.d = () => {
//     console.log(this);
//   }
//   c.d();
// }
// newThisFunction();

// // what will the above code output?






// (function() {
//   let e = {'e': 'this is e'};

//   e.f = function() {
//     console.log(this);
//   }

//   e.f();
// })();

// // what will the above code output?



////////////////////////////////////////////////
// for callbacks to eventHandlers
////////////////////////////////////////////////

// (function() {
//   const btn1 = document.querySelector("#button1");
//   const btn2 = document.querySelector("#button2");
  
//   btn1.addEventListener('click', () => {
//     console.log(this);
//   })
  
//   // what will the above code output?
  
//   btn2.addEventListener('click', function() {
//     console.log(this);
//   })
// })();

// // what will the above code output?


// let a = [1];

// a.forEach(el => {
//   console.log(this);
// })

// console.log('----------------');

// a.forEach(function(el) {
//   console.log(this);
// })


// // what will the above code output?




/////////////////////////////////////////////
// methods defined inside an object
/////////////////////////////////////////////

// let a = {
//   count: 1,

//   addArrow: (x) => {
//     return this.count + x;
//   }
// };

// a.addArrow(1);




// var test = {
//   prop: 42,
//   func: function() {
//     return this.prop;
//   }
// };

// console.log(test.func());

// // what is the expected output?



// // In web browsers, the window object is also the global object:
// console.log(this === window);

// a = 37;
// console.log(window.a); 

// this.b = "MDN";
// console.log(window.b)  
// console.log(b)         


// what will the following code return?
function f1() {
  console.log(this);
  return this;
}

f1() === window; 



function f2() {
  'use strict'; //
  console.log(this);
  return this;
}

f2() === undefined; // 



// An object can be passed as the first argument to call or apply and this will be bound to it.
var obj = {a: 'Custom'};

// This property is
var a = 'Global';

function whatsThis() {
  return this.a;  // 
}

whatsThis();          // 
whatsThis.call(obj);  // 
whatsThis.apply(obj); // 








function add(c, d) {
  return this.a + this.b + c + d;
}

var o = {a: 1, b: 3};

add.call(o, 5, 7);

add.apply(o, [10, 20]);










function bar() {
  console.log(Object.prototype.toString.call(this));
}

bar.call(7);     
bar.call('foo'); 











function f() {
  return this.a;
}

var g = f.bind({a: 'azerty'});
console.log(g()); 

var h = g.bind({a: 'yoo'}); // bind only works once!!
console.log(h()); 

var o = {a: 37, f: f, g: g, h: h};
console.log(o.a, o.f(), o.g(), o.h()); 




// 'azerty'
// 'azerty'

// 37, 37, 'azerty', 'azerty'







var globalObject = this;
var foo = (() => this);
console.log(foo() === globalObject);

// true



var obj = {func: foo};
console.log(obj.func() === globalObject);

// 

console.log(foo.call(obj) === globalObject);

//

foo = foo.bind(obj);
console.log(foo() === globalObject);

// 
