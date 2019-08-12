// Write a recursive function that returns all of the permutations of an array
// (A permutation is a possible ordering of the elements in an array)
// e.g. permutations([1,2]) => [[1,2], [2,1]]
// e.g. permutations([1,2,3]) => [[1,2,3], [1,3,2], [2,1,3], 
//                                [2,3,1], [3,1,2], [3,2,1]]
function permutations(array) {
  if (array.length <= 1) {
    return [array];
  }
  const result = [];
  const first = array.pop();
  const prevPerms = permutations(array);

  prevPerms.forEach(perm => {
    for (let i = 0; i <= perm.length; i++) {
      let nextPerm = perm.slice(0, i).concat([first]).concat(perm.slice(i));
      result.push(nextPerm);
    }
  });

  return result;
}
