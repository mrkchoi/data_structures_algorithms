
var fourSum = function(nums, target) {
    let ans = [];
    arr = nums.sort((a, b) => a - b);
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            let sum = arr[i] + arr[j];
            let tar;
            if (sum < target) {
                tar = Math.abs(target - sum);
            } else {
                tar = target - sum;
            }
            let start = j + 1;
            let end = arr.length - 1;
            while (start < end) {
                if (arr[start] + arr[end] === tar) {
                    ans.push([arr[i], arr[j], arr[start], arr[end]]);
                    end -= 1;
                    start += 1;
                } else if (arr[start] + arr[end] > tar) {
                    end -= 1;
                } else {
                    start += 1;
                }
            }
        }
    }
    return ans;
};
