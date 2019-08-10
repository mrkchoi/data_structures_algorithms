// given an arr of ints, return an arr where i is the product of arr except for i
// input = [2, 3, 4, 5]
// output = [60, 40, 30, 24]

// note: division is not allowed
// note: do this in linear time

function productFind(arr) {
 
  // iterate over once to product all elements to the left and insert them

  let ans = [];
  let leftProduct = 1;
  for (let i = 0; i < arr.length; i++) {
    ans.push(leftProduct);
    leftProduct = arr[i] * leftProduct;
  }
  let rightProduct = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    ans[i] = ans[i] * rightProduct;
    rightProduct *= arr[i]
  }

  return ans;
  // iterate over again to product all els to right and product them

  // inp = [1, 2, 3, 4]
  // ans = [];

  // out = [24, 12, 8, 6]

}

console.log(productFind([1, 2, 3, 4]));