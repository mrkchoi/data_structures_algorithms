function operators(nums, target) {
  if (nums.length === 2) {
    if (nums[0] + nums[1] === target) { return true }
    if (nums[0] - nums[1] === target) { return true}
    if (nums[0] * nums[1] === target) { return true }
    if (nums[0] / nums[1] === target) { return true }
  }

  if (nums.length > 2) {
    let first = nums.shift();
    let second = nums.shift();
    let add = [first + second].concat(nums);
    let sub = [first - second].concat(nums);
    let div = [first / second].concat(nums);
    let mult = [first * second].concat(nums);
    if (operators(add, target)) { return true }
    if (operators(sub, target)) { return true }
    if (operators(div, target)) { return true }
    if (operators(mult, target)) { return true }
  }
  return false;
}

// goal is to have a func that given an arr and a target tells if 
// there is a way using (+, -, *, /) in any order, to make the target
// from the Array.

let test = [1, 1, 1, 1];
target = 24; // 1 + 2 === 3, 3 + 3 === 6, 6 * 4 === 24

console.log(operators(test, target));
