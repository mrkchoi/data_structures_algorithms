


// var trap = function(height) {
//   let totalWater = 0;
//   let leftMax;
//   let rightMax;
//   for (let i = 1; i < height.length - 1; i++) {
//     leftMax = Math.max(...height.slice(0, i));
//     rightMax = Math.max(...height.slice(i + 1));
//     totalWater +=
//       Math.min(leftMax, rightMax) - height[i] > 0
//         ? Math.min(leftMax, rightMax) - height[i]
//         : 0;
//   }
//   return totalWater;
// };







function trappingRain(arr) {
  if (!Array.isArray(arr)) throw new Error('Invalid input: input type must be array');
  
  let leftMax;
  let rightMax;
  let total = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    leftMax = Math.max(...arr.slice(0, i));
    rightMax = Math.max(...arr.slice(i + 1));

    let currentTrap = Math.min(leftMax, rightMax) - arr[i];

    if (currentTrap > 0) {
      total += currentTrap;
    }
  }

  return total;
}



// faster version w/ pointers
function trappingRain(arr) {
  if (!Array.isArray(arr))
    throw new Error("Invalid input: input type must be array");

  let leftMax;
  let rightMax;
  let total = 0;

  for (let i = 1; i < arr.length - 1; i++) {
    leftMax = Math.max(...arr.slice(0, i));
    rightMax = Math.max(...arr.slice(i + 1));

    let currentTrap = Math.min(leftMax, rightMax) - arr[i];

    if (currentTrap > 0) {
      total += currentTrap;
    }
  }

  return total;
}


