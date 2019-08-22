

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
