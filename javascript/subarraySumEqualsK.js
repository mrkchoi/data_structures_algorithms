

// given an input array and a target value, K,
// return the count of all the continuous subarrays that sum to K

// init count, map, sum
// make sure to init map with 0: 1
  // this ensures that if we have a match, and the difference between our running sum and the target value === 0, we have a match, so we should increment our count by V: 1
// at each iteration, 
// keep running sum starting from idx0
// if the difference between sum - k exists in our map, this means that one or more of our previous subarray sums exist in an earlier subarray in our input array
// in this case, increment the count by the value of map.get(sum- k)
// then, we should update map.get(sum), so we have an accurate and updated count of the running sum up to that point
// if !map.get(sum), then this is the first time that we have run into this particular sum, and so we should map.set(sum, 1),
// if map.get(sum), then we have previously counted another subarray that sums to our current sum, and we should keep a count by increment the value at map.get(sum) by 1
// continue iterating through each element of our input array and return the total count of occurrences at the end

function subarraySumEqualsK(nums, K) {
  let count = 0;
  let sum = 0;
  let map = new Map();
  map.set(0,1);

  for (let n of nums) {
    sum += n;

    let diffExists = map.get(sum - k);

    if (diffExists) {
      count += map.get(diffExists);
    }

    if (map.get(sum)) {
      map.set(sum, map.get(sum) + 1);
    } else {
      map.set(sum, 1);
    }
  }

  return count;
}