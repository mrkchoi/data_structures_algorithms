// Write a recursive function `primeFactorization(num)` that returns the prime
// factorization of a given number. Assume num > 1
//
// primeFactorization(12) => [2,2,3]
function primeFactorization(num) {
  // Base case - 1 is not a prime so we return an empty array here
  if (num === 1) return [];

  // initialize i to 2, since it is the first prime
  let i = 2;

  // increment i until we find a prime factor
  while (!(isPrime(i) && num % i === 0)) {
    i++;
  }

  // Add i to prime factors and make recursive call to find rest
  return [i].concat(primeFactorization(num / i));
}

function isPrime(num) {
  if (num < 2) return false;
  let i = 2;

  while (i < num) {
    if (num % i === 0) return false;
    i++;
  }

  return true;
}

// Alternative - optimized solution

// Only iterating up to the square root of num is an optimization, so that we
// don't check the same numbers again. This is because any factor greater than 
// the square root would have a complementary factor below the square root.

// Example: The square root of 144 is 12. Factors of 144 below 12 include
// [1, 2, 3, 6].The only factors greater than 12, are the complements of these
// factors => [144, 72, 48, 24].Therefore it is not necessary to iterate past
// the square root, since if a factor existed we would have already found it by
// then.

// We also do not need to explicitly check that the factor is prime, because
// by starting at 2, we ensure that the first factor we find is prime. Any factor
// that is not prime, will itself have factors that are also factors of the
// number we are evaluating. This will continue to be true until we in fact reach
// the prime factors.
function primeFactorization(num) {
  if (num === 1) return [];
  const upperRange = Math.ceil(Math.sqrt(num));

  for (let i = 2; i <= upperRange; i++) {
    if (num % i === 0) {
      let factors = [i].concat(primeFactorization(Math.floor(num / i)));
      return factors;
    }
  }

  return [num];
}
