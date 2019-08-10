// SET: non-ordered, completely unique, array-like, can hold any data
// type that isn't a duplicate

let arr = [1, 1, 2, 2, 2, 3, 5, 5, 4];
let unique = [...new Set(arr)];
console.log(unique);

let strArr = [1, 'hi', 'j', 'hi'];
let checkMatchingStrings = [...new Set(strArr)];
console.log(checkMatchingStrings);

// what does a set look like? This: 

// Set { 1, 'hi, 'j'}

console.log(new Set(strArr));

// runtime: Sets check for inclusion when they insert so it's O(n)
// deletion is also O(n) :( 
// an INT set is a set that only allows ints. Duh. 