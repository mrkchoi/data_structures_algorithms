// Write an `Array.prototype.myEvery(callback)` method that returns true
// if the callback returns true for every element in the array, and otherwise 
// returns false. Use the `Array.prototype.myEach` method you defined above. Do 
// NOT call the built-in `Array.prototype.every` or `Array.prototype.forEach` 
// methods.
Array.prototype.myEvery = function (callback) {
  let every = true
  
  this.myEach(el => {
    if (!callback(el)) every = false;
  });

  return every;
};
