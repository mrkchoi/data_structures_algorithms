/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

// error check: non-string
// edge case: empty string 'J' || 'S'

// init count, map
// iterate through J, adding elements to map, init to 0
// iterate through S,
// for each char, if (map[S[i]] >= 0),
// map[S[i]] += 1
// return Object.values(map).reduce();

var numJewelsInStones = function(J, S) {
  if (typeof J !== "string" || typeof S !== "string")
    throw new TypeError("Invalid input");
  if (J === "" || S === "") return 0;

  let count = 0;
  let map = {};

  for (let i = 0; i < J.length; i++) {
    map[J[i]] = true;
  }

  for (let i = 0; i < S.length; i++) {
    if (map[S[i]]) count += 1;
  }

  return count;
};
