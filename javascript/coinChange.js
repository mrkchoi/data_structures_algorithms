/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// error check: non-array, amount < 0
// init an array that we will use to store all possible
// minimum coin combinations for coins starting with amt === 0
// we can init the change array[0] = 0 (we know that for the amt of 0, we need 0 coins to make up total)
// while change.length <= amount (we know that we need to continue building up the
// array until the length of the array is equal to amt + 1),
// init currentMin = Infinity,
// iterate through each of the coins in the coins array,
// we check to see if the length of the change array - value of current coin < 0,
// if this is true, then the current coin that we are on is too large to make up our current total, so continue on to the next coin. This also ensures that if coins are not ascending / not ordered, we will still check every single coin
// if the current coin is a valid coin,
// we want to update the currentMin (the minimum number of coins needed in order to make up the total)
// we take the length of the array (which represents the amount that we are currently trying to calculate for)
// subtract the value of the current coin, key into the array at this index,
// add one to this value (the difference between the index that we just keyed into is the value of the coin, which we can represent as 1 (because we are concerned with the total count of coins needed in order to make a valid total))
// compare this currentMin with the previous currentMin and set the new currentMin
// continue iterating through each of the coins in the coins array and checking to resetting the minimum count of coins to make the current total as necessary
// after we have iterated through all of the coins in the coins array, then we can push the currentMin into the array, as we know that this count is the lowest possible count of coins to make the given total
// we continue doing these operations to fill up the dp array, until the length of the DP array is greater than amt
// then, we can key into the dp array at the final index (or arr[amt]), and return this value.
// this value represents the smallest count of coins needed in order to make up the total

var coinChange = function(coins, amount) {
  if (!Array.isArray(coins))
    throw new TypeError("Invalid input: input type must be array");
  if (amount < 0) return -1;

  let change = [0];

  while (change.length <= amount) {
    let currentMin = Infinity;
    for (let i = 0; i < coins.length; i++) {
      if (change.length - coins[i] < 0) continue;
      currentMin = Math.min(currentMin, change[change.length - coins[i]] + 1);
    }
    change.push(currentMin);
  }
  return change[amount] === Infinity ? -1 : change[amount];
};
