// Write a function `primes(num)`, which returns an array of the first "num" primes.
// You may wish to use an `isPrime(num)` helper function.
function primes(count) {
  const primeNums = [];
  let i = 2;
  
  while (primeNums.length < count) {
    if (isPrime(i)) primeNums.push(i);
    i += 1;
  }
  
  return primeNums;
}

function isPrime (num) {
  for (let j = 2; j < num; j++) {
    if (num % j === 0) return false;
  }

  return true;
};
