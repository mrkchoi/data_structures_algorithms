// What does this code return? 

var Foo = function (a) {
  this.bar = () => { 
    return a; 
  } 
  var baz = function () { 
    return a; 
  }; 
}; 

Foo.prototype = {
  biz: function() {
    return this.bar();
  },

  // the code below will result in undefined/no method found. 
  // arrow function will not set context, so `this` will refer to window
  // biz: () => {
  //   return this.bar();
  // }
}; 

var f = new Foo(7); 

//=> f.bar(); // 7
//=> f.baz(); // undefined
//=> f.biz(); // 













var X = function(someValue) {
  this.hello = function(){
    return someValue;
  };
};

X.prototype.test = function() {
  return this.someValue;
};

var x = new X("hi");

// ------ what will the following code return?
alert(x.hello()); // 'hi'
alert(x.test());  // undefined / someValue not a valid property


