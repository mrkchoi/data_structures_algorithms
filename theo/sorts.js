// // quicksort in place

// function quicksortInPlace(arr) {
//   let pivot = Math.floor(Math.random() * arr.length); 
//   if (arr.length <= 1) {
//     return arr;
//   }
//   [arr[pivot], arr[0]] = [arr[0], arr[pivot]]
//   pivot = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[0]) {
//       [arr[i], arr[pivot + 1]] = [arr[pivot + 1], arr[i]]
//       pivot += 1;
//     }
//   }

//   [arr[0], arr[pivot] = arr[pivot], arr[0]]
//   quicksortInPlace(arr.slice(1, pivot));
//   quicksortInPlace(arr.slice(pivot + 1));
//   return arr;
// };

// let test = [9, 2, 8, 3, 7, 4, 6, 1, 5];

// console.log(quicksortInPlace(test));

// // function quicksort(arr) {
// //   if (arr.length < 2) {
// //     return arr;
// //   }

// //   let pivot = Math.floor(Math.random() * arr.length); 
// //   let left = arr.filter((el) => el < arr[pivot])
// //   let right = arr.filter((el) => el > arr[pivot])

// //   return quicksort(left).concat([arr[pivot]]).concat(quicksort(right))

// // }

// // let test = [9, 2, 8, 3, 7, 4, 6, 1, 5];

// // console.log(quicksort(test));

// function post(node) {
//   if (node.null) {
//     return [];
//   }

//   let left = post(node.left);
//   let right = post(node.right);

//   return left.concat(right).push(node);
// };

// function dfs(node, target) {
//   if (node.value === target) {
//     return node;
//   }

//   dfs(node.left);
//   dfs(node.right);
// }

// var longestPalindrome = function (s) {
//   let longest = 0;
//   let ans = null;
//   let arr = s.split('');  
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       let section = arr.splice(i, j);
//       let rev = section.reverse();
//       if (section === rev) {
//         if (section.length > longest) {
//           longest = section.length;
//           ans = section.join('')
//         }
//       }
//     }
//   }
//   return ans;
// };

// console.log(longestPalindrome('abacdabba'));

// function bfs(node, target) {
//   let queue = [node];
//   while (queue.length > 0) {
//     let current = queue.shift();
//     if (current.value === target) {
//       return current;
//     }
//     current.visited = true;
//     current.outEdges.forEach(node => {
//       if (!node.visited) {
//         queue.push(node);
//       }
//     })
//   }
//   return null;
// }

// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let midIdx = Math.floor(arr.length/2)
//   let left = mergeSort(arr.slice(0, midIdx))
//   let right = mergeSort(arr.slice(midIdx))
//   return merge(left, right)
// };

// function merge(left, right) {
//   let ans = [];
//   while (left.length > 0 && right.length > 0) {
//     if (left[0] > right[0]) {
//       ans.push(right.shift());
//     } else if (left[0] < right[0]) {
//       ans.push(left.shift());
//     } 
//   }
//   if (left.length === 0) {
//     ans = ans.concat(right);
//   } else if (right.length === 0) {
//     ans = ans.concat(left);
//   }
//   return ans;
// };

// let test = [9, 1, 8, 2, 7, 3, 6, 4, 5]
// console.log(mergeSort(test));

// function quicksort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let mid = arr[Math.floor(arr.length/2)];
//   let right = arr.filter((el) => mid < el)
//   let left = arr.filter((el) => mid > el)
//   return quicksort(left).concat([mid]).concat(quicksort(right));
// };

// console.log(quicksort(test));

// function bubbleSort(arr) {
//   arr.forEach(times => {
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//       }      
//     }
//   })
//   return arr;
// }

// console.log(bubbleSort(test));

