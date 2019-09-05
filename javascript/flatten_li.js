// Write an iterator that, given a (potentially nested) collection will iterate over the contents of the collections in order.
//Thus, given a collection containing [[1, 3, 5], [4, 7, 3], [[2, 3], 4], 0] the deep iterator should return [1, 3, 5, 4, 7, 3, 2, 3, 4, 0]
//                                      0

// [[[1], 3, 5], [4, 7, 3], [[2, 3], 4], 0]
// [1, 3, 5, 4, 7, 3, 2, 3, 4, 0]
//                             i
// error checking / validate input
// init i = 0
// while (i < arr.length)
// check each element instanceof Array
// if array, splice and spread
// once arr[i] not array
// increment counter (i)

function deepFlatten(arr) {
  // if (!arr instanceof Array) return;
  if (!arr instanceof Array)
    throw new Error("Invalid argument: argument type is not Array");
  // Array.isArray(arr)

  let i = 0;
  while (i < arr.length) {
    let current = arr[i];

    if (current instanceof Array) {
      arr.splice(i, 1, ...arr[i]);
    } else {
      i += 1;
    }
  }

  // arr.reduce((acc, el) => {
  // return acc.concat(el);
  // }, [])

  return arr;
}
