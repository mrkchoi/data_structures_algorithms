

// Given two arrays, one with values, one with indices, mutate the input to reflect the new index positions.


// arr1 => [1,2,3,4,5,6]
// arr2 => [2,3,4,1,5,0]

// init obj
// iterate through arr1,
// set arr2[i] as key, arr1[i] as value
// loop through arr1 and replace values with k/v pair from obj

function updateIndices(arr1, arr2) {
  if (arr1.length !== arr2.length) return null;
  let obj = {};

  for (let i = 0; i < arr1.length; i++) {
    obj[arr2[i]] = arr1[i];
  }

  for (let i = 0; i < arr1.length; i++) {
    arr1[i] = obj[i]
  }

  return arr1;
}

let arr1 = [1,2,3,4,5,6];
let arr2 = [2,3,4,1,5,0];
updateIndices(arr1, arr2);

