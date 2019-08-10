function kthMostFrequent(nums, k) {
  let hash = {};
  for (let i = 0; i < nums.length; i ++) {
    if (hash[nums[i]]) {
      hash[nums[i]] += 1;
    } else {
      hash[nums[i]] = 1;
    }
  }

  let heap = new MaxHeap();
  for (key in hash) {
    heap.insert(new Node(key, hash[key]));
    // console.log(key, " : ", hash[key])
  }

  let ans = [];
  for (let i = 0; i < k; i++) {
    let el = heap.extract();
    ans.push(el.val);
  }
  return ans;
}

// O(n) time complexity

console.log(kthMostFrequent([1, 1, 1, 2, 2, 3], 2))