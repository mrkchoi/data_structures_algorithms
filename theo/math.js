// - [ ] You are given four numbers (type int), and have four 
// basic  math operators at your disposal (+, -, x, /). 
// Given arbitrary ways to group the numbers and using any of 
// the operators, determine if you can make the number 24 from 
// the four numbers. The numbers must be processed in the order 
// they appear.


// function find24 (arr) {
//   let first = arr.shift();
  
//   if (first + helper(arr, (24 - first))) {
//     return true;
//   } else if (first - helper(arr, (24 + first))) {
//     return true;
//   } else if (helper(arr, ()))
// }

// function helper(arr, target) {
//   if (arr.length > 2) {
//     return find24(arr);
//   } 

//   if (Math.sum(arr[0], arr[1]) === target) {
//     return true;
//   } else if (arr[0] - arr[1] === target) {
//     return true;
//   } else if (arr[1] - arr[0] === target) {
//     return true;
//   } else if (arr[0] * arr[1] === target) {
//     return true;
//   } else if (arr[0] / arr[1] === target) {
//     return true;
//   } else if (arr[1] / arr[0] === target) {
//     return true;
//   }
//   return false;
// }