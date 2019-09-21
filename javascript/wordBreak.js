/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
*/

// round #1
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */


// round #1

// error check: empty dictionary, dictionary of length 1, check if equal
// init queue with an empty string
// iterate through while queue.length,
// we are going to take the first element from the queue (initially empty string)
// then, we iterate through each word of the dictionary
// for each word,
// concat the currentWord with each word in the dictionary
// if the input string starts with the combination string, then we know that we have an initial match
// this match may not end up being the final match, so we should continue iterating through all other words in the dictionary, checking to see whether there are any other matches
// for each match, if the string is an exact match to the combination string, then return true,
// else, if the input string does in fact start with the current combination string, and if it does not exist inside of our map, then add it to the map, and push the combination string to the queue
// by checking if the combination string already exists inside of our map, this ensures that we do not double check the same words that have already been added to the queue and processed
// once we complete iterating through all the elements and our queue is empty, we can return false;
// the true condition will occur either during our initial edge case check, or inside of the while loop, when we check that the string is an exact match to the combination string

var wordBreak = function(s, wordDict) {
  if (wordDict.length === 0) return false;
  if (wordDict.length === 1) return s === wordDict[0];
  
  let queue = [''];
  let map = new Map();
  
  while (queue.length) {
    let current = queue.shift();
    
    for (let word of wordDict) {
      let comboString = `${current}${word}`;  
      let startsWithMatch = s.indexOf(comboString) === 0;
      
      if (s === comboString) return true;
      
      if (startsWithMatch && !map.has(comboString)) {
        map.set(comboString, true);
        queue.push(comboString);
      }
    }
  }
  return false;
}












// // round #2
// var wordBreak = function(s, wordDict) {

// }

































// var wordBreak = function(s, wordDict) {
//   if (wordDict.length === 0) return false;
//   if (wordDict.length === 1) return s === wordDict[0];

//   let queue = [""];
//   let memo = new Map();

//   while (queue.length > 0) {
//     const val = queue.shift();

//     for (let word of wordDict) {
//       const searchWord = `${val}${word}`;
//       const startsWith = s.indexOf(searchWord) === 0;

//       if (searchWord === s) return true;
//       else if (!memo.has(searchWord) && startsWith) {
//         memo.set(searchWord, true);
//         queue.push(searchWord);
//       }
//     }
//   }

//   return false;
// };


