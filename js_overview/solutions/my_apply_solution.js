// Write a `Function.prototype.myApply(context, argsArr)` method that accepts an 
// object and an array of additional arguments. It should call the function with 
// thepassed-in object as `this`, also passing the arguments array. Do NOT use the
// the built-in `Function.prototype.apply` or `Function.prototype.call` methods 
// in your implementation.
Function.prototype.myApply = function (context, args = []) {
  return this.bind(context)(...args);
};

// Also works (passing arguments at bind-time vs call-time)
Function.prototype.myApply = function (context, args = []) {
  return this.bind(context, ...args)();
};
