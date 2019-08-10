var canJump = function(nums) {
    if (nums.length <= 1) {
        return true;
    }
    if (nums[0] === 0) {
        console.log('it did return false')
        return false;
    }
    let first = nums.shift();
    let counter = 0;
    while (counter < first) {
      console.log('first is ' + first + ' and nums is ' + nums);
        if (canJump(nums)) {
            return true;
        }
        nums.shift();
        counter += 1;
    }
    return false;
};

console.log(canJump([2, 3, 1, 1, 4]) + ' should be true');
console.log(canJump([3, 2, 1, 0, 4]) + ' should be false');
console.log(canJump([2, 0, 0]) + ' should be true');
