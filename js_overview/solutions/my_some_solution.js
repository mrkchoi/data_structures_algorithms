// Write an `Array.prototype.mySome(callback)` method which takes a callback
// and returns true if the callback returns true for ANY element in the array. 
// Otherwise, return false. 
// Use the `Array.prototype.myEach` method you defined above. Do NOT call the
// built-in `Array.prototype.some` or `Array.prototype.forEach` methods.
Array.prototype.mySome = function (callback) {
  let some = false;

  this.myEach(el => {
    if (callback(el)) some = true;
  });

  return some;
};
