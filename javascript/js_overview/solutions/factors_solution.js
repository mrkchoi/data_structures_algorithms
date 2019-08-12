// Write a function, `factors(num)`, that returns an array containing the factors
// of a number in ascending order.
function factors(num) {
  // Generates an array of numbers from 1 up to num
  const facts = Array.from(Array(num)).map( (el, idx) => idx + 1);
  // Filter array for only those numbers which are factors
  return facts.filter(el => num % el === 0);
}
