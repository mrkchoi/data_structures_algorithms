


Function.prototype.myBind = function(context) {
  let that = this;
  let bindArgs = Array.from(arguments).slice(1);
  return function() {
    let callArgs = Array.from(arguments);
    return that.apply(context, bindArgs.concat(callArgs));
  }
}

// Function.call(this, ...args)
Function.prototype.myCall = function(context) {
  return this.bind(context)(...Array.from(arguments).slice(1));
}

// Function.apply(this, [args])
Function.prototype.myApply = function(context, args) {
  return this.bind(context)(...args);
}


// Function.bind(context);
function myBind(func, context) {
  return function(args) {
    return func.call(context, ...args);
  }
}