// Write an `Array.prototype.myFlatten()` method which flattens a
// multi-dimensional array into a one-dimensional array.
// Example:
// [["a"], "b", ["c", "d", ["e"]]].myFlatten() => ["a", "b", "c", "d", "e"]
Array.prototype.myFlatten = function () {
  let flattened = [];

  this.forEach((el) => {
    if (el instanceof Array) {
      flattened = flattened.concat(el.myFlatten());
    } else {
      flattened.push(el);
    }
  });

  return flattened;
};
