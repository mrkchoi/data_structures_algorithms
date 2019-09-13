// 49. Group Anagrams
// Medium

// 2002

// 129

// Favorite

// Share
// Given an array of strings, group anagrams together.

// Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
// Output:
// [
//   ["ate","eat","tea"],
//   ["nat","tan"],
//   ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.



/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// error checking: valid array, empty array => [[]]
// init map
// iterate through each element,
// split, sort, join,
// check if key exists in map,
// if exists,
// push el into value array
// map sure to save value into array, mutate, then reassign
// if !exists,
// set key && [el] in map
// return map.values();

var groupAnagrams = function(strs) {
  if (!Array.isArray(strs))
    throw new Error("Invalid input: input type must be array");
  if (strs.length === 0) return [[]];

  let map = new Map();

  strs.forEach(el => {
    let sorted = el
      .split("")
      .sort()
      .join("");

    if (map.get(sorted)) {
      let temp = map.get(sorted);
      temp.push(el);
      map.set(sorted, temp);
    } else {
      map.set(sorted, [el]);
    }
  });

  return [...map.values()];
};
