// in a row of trees, the i - th tree produces fruit with type tree[i].

// You start at any tree of your choice, then repeatedly perform the following steps:

// Add one piece of fruit from this tree to your baskets.If you cannot, stop.
// Move to the next tree to the right of the current tree.If there is no tree to the right, stop.
// Note that you do not have any choice after the initial choice of starting tree: you must perform step 1, then step 2, then back to step 1, then step 2, and so on until you stop.

// You have two baskets, and each basket can carry any quantity of fruit, but you want each basket to only carry one type of fruit each.

// What is the total amount of fruit you can collect with this procedure ?

// input: [1, 2, 1]
// output: 3

// [1, 2, 2, 3, 4, 4, 4, 2, 1, 1]

// {'a': 2, 'b': 1}

function fruitBasket(arr) {
  let startIdx = 0;
  let store = {};
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (store[el]) {
      store[el] += 1;
    } else {
      store[el] = 1;
    }
  
    let sum = 1;
    let length = 0;
    for (let key in store) {
      length += 1;
      sum += store[key]
    }

    if (length > 2) {
      store[arr[startIdx]] -= 1;
      startIdx += 1;
    }

    if (length <= 2) {
      if (ans < sum) {
        ans = sum;
      }
    }
  }
  return ans;
}

test = [3, 3, 3, 1, 2, 1, 2, 3, 3, 4]
console.log(fruitBasket(test));