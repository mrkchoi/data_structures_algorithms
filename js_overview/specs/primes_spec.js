describe("primes", () => {
  it("returns an empty array when asked for zero primes", () => {
    expect(primes(0)).toEqual([]);
  });

  it("returns an array with the first prime when asked for one prime", () => {
    expect(primes(1)).toEqual([2]);
  });
  
  it("returns first five primes in order", () => {
    expect(primes(5)).toEqual([2, 3, 5, 7, 11]);
  });
});
