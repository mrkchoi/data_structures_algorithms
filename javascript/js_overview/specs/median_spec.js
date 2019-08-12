describe("median", () => {
  it("returns null for the empty array", () => {
    expect([].median()).toBe(null);
  });

  it("returns the element for an array of length 1", () => {
    expect([1].median()).toEqual(1);
  });

  it("returns the median of an odd-length array", () => {
    expect([3, 2, 6, 7, 1].median()).toEqual(3);
  });

  it("returns the median of an even-length array", () => {
    expect([3, 2, 6, 7].median()).toEqual(4.5);
  });
});
