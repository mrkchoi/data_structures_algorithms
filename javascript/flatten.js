

// Write a flatten function both iteratively & recursively.


// [1,2,[3,[4,[5]]]] => [1,2,3,4,5]
// [] => []
// [1] => [1]
// [[1]] => [1]

// init stack with first element shifted off
// init output array
// go through until stack.empty
// if !cur instanceof Array,
// add to output 
// else,
// add 
function flattenIter(arr) {
  let output = [];

  while (arr.length) {
    let current = arr.shift();
    if (current instanceof Array) {
      output = output.concat(current);
    } else {
      output.push(current);
    }
  }

  return output;
}

flattenIter([1,2,3,4,5]);
flattenIter([1, 2, [3, [4, [5]]]]);


// init i = 0,
// error checking, if not array, return arr
// iterate through arr while i < arr.length
// if arr[i] is an array, 
// splice from curIdx, 1 element, spread arr[i]
// i is not incremented in this case, which allows us to verify that arr[i] is now not an instance of array.
// if arr[i] is still an array, we continue to splice
// once arr[i] is not an array, we increment i
// continue through all indices of arr
// return arr

function flatten(arr) {
  if (!arr instanceof Array) return;

  let i = 0;

  while (i < arr.length) {
    if (arr[i] instanceof Array) {
      arr.splice(i, 1, ...arr[i]);
    } else {
      i += 1;
    }
  }

  return arr;
}

flatten([[[[[1]]]], 2, [3, [4, [5]]]]);


arr = [1, 2, 3, 4, 5];



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
}