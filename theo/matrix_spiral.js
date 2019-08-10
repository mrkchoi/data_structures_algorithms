var spiralOrder = function (matrix) {
  let ans = [];

  if (matrix.length < 1) {
    return ans;
  }

  matrix[0].forEach(el => {
    ans.push(el);
  });
  matrix.shift()

  if (matrix.length === 0) {
    return ans;
  }

  matrix.forEach(arr => {
    let el = arr.pop();
    if (el) { ans.push(el) }
  });

  if (matrix.length === 0) {
    return ans;
  }

  let lastArr = matrix[matrix.length - 1];
  for (let i = lastArr.length - 1; i >= 0; i--) {
    let el = lastArr[i];
    ans.push(el)
  }
  matrix.pop()

  if (matrix.length === 0) {
    return ans;
  }

  for (let i = matrix.length - 1; i >= 0; i--) {
    let arr = matrix[i];
    let el = arr.shift();
    if (el) { ans.push(el) }
  }

  if (matrix.length > 0) return ans.concat(spiralOrder(matrix));
};

let test = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

console.log(spiralOrder(test));

// [1,2,3,6,9,8,7,4,5]
// output should be this

let otherTest = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12]
]

console.log(spiralOrder(otherTest));

// [1,2,3,4,8,12,11,10,9,5,6,7]
// output should be this

let dumb = [[7], [9], [6]]

console.log(spiralOrder(dumb));
