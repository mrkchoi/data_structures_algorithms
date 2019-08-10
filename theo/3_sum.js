// given an arr of ints, tell what 3 will sum to 0

// function threeSum(arr, x) {
//   let ans = [];
//   for (let i = 0; i < arr.length; i++) {
//     let start = i + 1;
//     let end = arr.length - 1;
//     while (start < end) {
//       let sum = arr[i] + arr[start] + arr[end];
//       if (sum === x) {
//         ans.push([i, start, end])
//         break;
//       } else if (sum < x) {
//         start += 1;
//       } else {
//         end -= 1;
//       }
//     }
//   }
//   return ans;
// }

var threeSum = function (nums) {
  let ans = [];
  let arr = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    let start = i + 1;
    let end = nums.length - 1;
    while (start < end) {
      let sum = arr[i] + arr[start] + arr[end];
      if (sum === 0) {
        ans.push([arr[i], arr[start], arr[end]]);
        break;
      } else if (sum < 0) {
        start += 1;
      } else {
        end -= 1;
      }
    }
  }
  return ans;
};

let test = [-1, 0, 1, 2, -1, -4];

[ -4, -1, -1, 0, 1, 2]



// ans = [0, 2, 3]

console.log(threeSum(test));
