

// Write a flatten function both iteratively & recursively.


// [1,2,[3,[4,[5]]]] => [1,2,3,4,5]
// [] => []
// [1] => [1]
// [[1]] => [1]

// 
function flattenIter(arr) {
  let output = [];

  let stack = [arr.shift()];
  while (stack.length) {
    let cur = stack.pop();

    if (cur instanceof Array) {

    } else {
      output.push(cur);
    }
  }
}










// init output arr
// iterate through each element
// check if instanceof Array,
// if true,
// recursively call flattenReur, and concat with output (remember to reassign output)
// else, 
// push el to output
// return output

function flattenRecur(arr) {
  let output = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] instanceof Array) {
      output = output.concat(flattenRecur(arr[i]));
    } else {
      output.push(arr[i]);
    }
  }

  return output;
}``
`