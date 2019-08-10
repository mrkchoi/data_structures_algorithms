var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  }

  if (n === 1) {
    return x;
  }

  if (n < 0) {
    return (1 / myPow(x, -n));
  }

  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  } else {
    return x * myPow(x * x, Math.floor(n / 2));
  }
};

console.log(myPow(1.00001, 123456));
