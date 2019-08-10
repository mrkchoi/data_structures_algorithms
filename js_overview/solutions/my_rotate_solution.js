// Write an `Array.prototype.rotate(times)` method which rotates the array by
// the given argument. If no argument is given, rotate the array by one position. 
// ex.
// ["a", "b", "c", "d"].myRotate() => ["b", "c", "d", "a"]
// ["a", "b", "c", "d"].myRotate(2) => ["c", "d", "a", "b"]
// ["a", "b", "c", "d"].myRotate(-1) => ["d", "a", "b", "c"]
Array.prototype.myRotate = function (times = 1) {
  let rotations;
  const rotated = this.slice(0);

  if (times < 0) {
    rotations = this.length + (times % this.length);
  } else {
    rotations = times % this.length;
  }

  for (let i = 0; i < rotations; i++) {
    rotated.push(rotated.shift());
  }

  return rotated;
};
