// given n, how many unique BST's could a range of 1...n make

var numTrees = function (n) {
  let range = [];
  let count = 1;
  while (count <= n) {
    range.push(count);
    count++;
  }
  let sum = 0;
  for (let i = 0; i < range.length; i++) {
    let dup = range.slice();
    dup.splice(i, 1);
    sum += makeTree(range[i], dup);
  }
  return sum;
};

function makeTree(root, arr) {
  if (arr.length === 1) {
    return 1;
  }
  let count = 1;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    let thing = arr.splice(i, 1);
    console.log(Math.max(thing))
    // console.log(thing);
    // if (thing.length <= 2) {
    if (thing.reduce(function (a, b) { return Math.max(a, b); }) < el) {
      console.log('hi')
      return 1;
    }
    // }
    count += makeTree(el, thing);
  }
  return count;
}

console.log(numTrees(3))