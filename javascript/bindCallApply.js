



// implement myBind
Function.prototype.myBind = function(context) {
  let that = this;
  let bindArgs = Array.from(arguments).slice(1);
  return function() {
    let callArgs = Array.from(arguments).slice(0);
    let args = [...bindArgs, ...callArgs];
    return that.apply(context, args);
  }
}

// implement myCurry
Function.prototype.myCurry = function(numArgs) {
  let that = this;
  let args = [];
  return function _myCurry(newArg) {
    args.push(newArg);
    if (args.length < numArgs) {
      return _myCurry;
    } else {
      return that(...args);
    }
  }
}


function add3(a,b,c) {
  return a + b + c;
}


add3.myCurry(3)(10)(100)(1000)

// implement myApply

Function.prototype.myApply = function(context) {
  let bindArgs = Array.from(arguments).slice(1);
  let that = this;
  return function() {
    let callArgs = Array.from(arguments).slice(0);
    return that.bind(context)(...bindArgs, ...callArgs);
  }
}


function comment(args) {
  let total = 0;
  Array.from(arguments).slice(0).forEach(arg => total += arg);
  console.log(this);
  console.log(`total: ${total}`);
}

// implement myCall


Function.prototype.myCall = function(context) {
  let bindArgs = Array.from(arguments).slice(1);
  let that = this;

  return function() {
    let callArgs = Array.from(arguments).slice(0);
    return that.bind(context)(...bindArgs, ...callArgs);
  }
}




































































































// Function.prototype.myBind = function(context) {
//   let that = this;
//   let bindArgs = Array.from(arguments).slice(1);
//   return function() {
//     let callArgs = Array.from(arguments);
//     return that.apply(context, bindArgs.concat(callArgs));
//   }
// }

// // Function.call(this, ...args)
// Function.prototype.myCall = function(context) {
//   return this.bind(context)(...Array.from(arguments).slice(1));
// }

// // Function.apply(this, [args])
// Function.prototype.myApply = function(context, args) {
//   return this.bind(context)(...args);
// }


// // Function.bind(context);
// function myBind(func, context) {
//   return function(args) {
//     return func.call(context, ...args);
//   }
// }