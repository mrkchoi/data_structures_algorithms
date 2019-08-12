describe("Array.prototype.myFlatten", () => {
  it('Does not alter an empty array', () => {
    const array = [];
    expect(array.myFlatten()).toEqual([]);
  });

  it('Does not alter a one-dimensional array', () => {
    const array = [1,2,3];
    expect(array.myFlatten()).toEqual([1,2,3]);
  });

  it('Flattens arrays correctly', () => {
    const array = [1, 2, 3, [4, [5, 6]], [[[7]], 8]];
    expect(array.myFlatten()).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });
});
