// write a function that takes in n arguments, one for each invocation, and returns the sum of all of the arguments

function summer(n) {
  let args = [];

  return function _summer(arg) {
    args.push(arg);

    if (args.length < n) {
      return _summer;
    } else {
      return args.reduce((acc, el) => acc + el);
    }
  }
}

