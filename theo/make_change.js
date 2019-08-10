// You are given coins of different denominations and a 
// total amount of money.Write a function to compute the 
// number of combinations that make up that amount.You may 
// assume that you have infinite number of each kind of coin.


var change = function (amount, coins) {
  let count = 0;
  
  coins.forEach(coin => {
    if (amount === coin) {
      count += 1;
    } else if (amount >= coin) {
      let rem = amount - coin;
      let num = change(rem, coins);
      count += num;
    }
  })

  return count;
};

let coins = [1, 2, 5]
console.log(change(5, coins));

11111
122
1112
2111
212
221
5
