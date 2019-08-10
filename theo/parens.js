// input : 3
// output : [()()(), ()(()), (())(), (()()), ((()))]

function possibleParens(num) {
  let ans = build(['(', ')'], num - 1)
  let newy = [];
  ans.map(arr => {  
    return arr.map(el => {
      newy.push(el.join(''))
    })  
  })
  return [...new Set(newy)]
}

function build(paren, num) {
  if (num < 1) {
    return paren;
  }
  let ans = [];
  ans.push(build(paren.concat(['(', ')']), num - 1));
  ans.push(build(['(', ')'].concat(paren), num - 1));
  paren.unshift('(')
  paren.push(')')
  ans.push(build(paren, num - 1));
  return ans;
}

console.log(possibleParens(5));
