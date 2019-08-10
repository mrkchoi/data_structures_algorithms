function pasc(num) {
  let ans = [];
  if (num === 0) {
    return ans;
  }
  ans.push([1])
  while (ans.length < num) {
    let prevArr = ans[ans.length - 1];
    let mini = [];
    for (let i = 0; i <= prevArr.length; i++) {
      let last;
      prevArr[i - 1] ? last = prevArr[i - 1] : last = 0;
      let curr = prevArr[i];
      if (i === 0) {
        last = 0;
      } else if (i >= prevArr.length) {
        curr = 0;
      }
      mini.push(last + curr)
    }
    ans.push(mini);
  }
  return ans;
}

console.log(pasc(5));
