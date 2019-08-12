// Write a function, `digitalRoot(num)`. It should sum the digits of a positive
// integer. If the result is greater than 10, sum the digits of the resulting number.
// Keep repeating until there is only one digit in the result, called the
// "digital root". **Do not use string conversion within your method.**
// For further explanation on the digital root concept, refer here: https://en.wikipedia.org/wiki/Digital_root
//
// You may wish to use a helper function, `digitalRootStep(num)` which performs
// one step of the process.
function digitalRoot(num) {
  while (num > 10) {
    num = digitalRootStep(num);
  }

  return num;
}

function digitalRootStep(num) {
  let root = 0;

  while (num > 0) {
    root += num % 10;
    num = Math.floor(num/10);
  }

  return root;
}

// Alternate Solution
function digitalRoot(num) {
  const digits = [];

  while (num > 0) {
    digits.push(num % 10);
    num = Math.floor(num/10);
  }

  const digitSum = digits.reduce((sum, digit) => sum + digit);

  return digitSum > 10 ? digitalRoot(digitSum) : digitSum;
}

// Magical one - line solution
function digitalRoot(num) {
  return num < 10 ? num : digitalRoot(digitalRoot(Math.floor(num / 10)) + (num % 10));
}
