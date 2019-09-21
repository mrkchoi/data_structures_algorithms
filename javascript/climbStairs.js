/**
 * @param {number} n
 * @return {number}
*/

// error check: non-number, less than 0

// base cases: n === 0, n === 1, n === 2
// we can use a fibonacci approach to solve this problem
// if we look at the pattern, we can see that all of the possible combinations for a given set of stairs can be found by taking the sum of the previous two sets of stairs
// we can solve this recursively, then attempt to solve the problem by storing all of the previous computations into an array and return the result at the index n
// without storing the previous computations, we encounter a timeout. so, we must take a dynamic programming approach
// 


var climbStairs = function(n) {
  let ways = new Array(n + 1).fill(0);
  ways[0] = 0
  ways[1] = 1
  ways[2] = 2;
  
  for (let i = 3; i <= n; i++) {
    let newWay = ways[i - 1] + ways[i - 2];
    ways[i] = newWay;
  }
  
  return ways[n];
};












/**
 * @param {number} n
 * @return {number}
 */

// version #1
// helper function to climbStep,
// create closure around count = 0;
// inside helper function, take either one or two steps,
// if one step + count <= n, increment step and recursively call step again with new count
// if two step + count <= n, increment step by 2 and recursively call step again with new count
// keep track of total combinations that reach n,
// make sure to increment total each time step === n
// return total

var climbStairs = function(n) {
  let totalCount = 0;

  function climb(currentStep, n) {
    if (currentStep === n) totalCount += 1;
    if (currentStep > n) return;

    if (currentStep + 1 <= n) {
      climb(currentStep + 1, n);
    }

    if (currentStep + 2 <= n) {
      climb(currentStep + 2, n);
    }
  }

  climb(0,n);
  return totalCount;
};

// // version #2:

// // we know that if n === 0, we have 0 ways to step
// // if n === 1, we have exactly one way to step
// // if n === 2, we have two ways to step,
// // if we check the pattern moving forward, we can see that the current ways is the sum of the previous two smaller number's ways (ie step[3] = step[1] + step[2]).
// // we init our base cases
// // we can store the values for each step inside of an array,
// // iterate through from idx 2 up to 'n',
// // at each iteration, set the value in the array at the given index to be the sum of the previous two steps
// // continue until we reach n,
// // then, we know that the number of ways available to us is stored in the array at idx n - 1
// // return array[n - 1];

function climbStairs(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 2;

  let combos = [0,1,2];

  for (let i = 3; i <= n; i++) {
    combos[i] = combos[i - 1] + combos[i - 2];
  }

  return combos[n];
}
