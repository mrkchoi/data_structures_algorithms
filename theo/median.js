// find median of two sorted arrays

// [2, |4, 6, 8]
// [1, |3, 5]

// [1, 2, 3, 4, 5, 6, 8]

function median(arr1, arr2) {
  let length = arr1.length + arr2.length;
  let medianIdx = Math.floor(length/2);
  let even = (length % 2 === 0);
  let count = 1;
  let arr1Pointer = 0;
  let arr2Pointer = 0;
  while (count < medianIdx) {
    if (arr1[arr1Pointer] === null) {
      arr2Pointer++;
    } else if (arr2[arr2Pointer] === null) {
      arr1Pointer++;
    } else if (arr1[arr1Pointer] < arr2[arr2Pointer]) {
      arr1Pointer++;
    } else {
      arr2Pointer++;
    }
    count++;
  }
  if (even) {
    let arp1 = arr1[arr1Pointer];
    let arp2 = arr2[arr2Pointer];
    if (!arp1) {
      arp1 = arr2[arr2Pointer - 1];
    } 
    if (!arp2) {
      arp2 = arr1[arr1Pointer - 1];
    }
    return ((arp1 + arp2) / 2)
  }

  return Math.max(arr1[arr1Pointer], arr2[arr2Pointer])
}

let a = [1, 2, 3, 4, 10]
let b = [5, 6, 7, 8, 9, 10]

console.log(median(a,b));
