describe("factors", () => {
  it("returns the factors of a number in ascending order", () => {
    expect(factors(10)).toEqual([1, 2, 5, 10]);
    expect(factors(21)).toEqual([1, 3, 7, 21]);
  });

  it("should handle 1 correctly", () => {
    expect(factors(1)).toEqual([1]);
  });
});
