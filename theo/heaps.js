// Given K sorted arrays, create a master array

// Input:

// [
//   [4, 6, 7],
//   [1, 2, 4],
//   [6, 8, 9]
// ]

function sortSortedArrays(arr) {
  let heap = new BinaryHeap();
  let ans = []

  for (let i = 0; i < arr.length; i++) {
    let val = arr[i].shift();
    let node = new Node(i, val);
    heap.insert(node)
  }

  while (heap.length > 0) {
    let getNode = heap.extract();
    ans.push(getNode.val)

    let fromIndex = getNode.index();
    if (arr[fromIndex].length > 0) {
      let node = new Node(fromIndex, arr[fromIndex].shift());
      heap.insert(node)
    }
  }

  return ans;
};

