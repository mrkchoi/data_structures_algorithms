describe("Array.prototype.quickSort", () => {
  beforeEach(() => {
    spyOn(Array.prototype, 'sort').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.sort).not.toHaveBeenCalled();
  });
  
  it("works with an empty array", () => {
    expect([].quickSort()).toEqual([]);
  });

  it("works with an array of 1 number", () => {
    expect([5].quickSort()).toEqual([5]);
  });
  
  it("sorts an array of numbers with no duplicates", () => {
    const a = [ 2, 1, 3, 5, 0, 8, 4, 7, 6];
    const sorted = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    expect(a.quickSort()).toEqual(sorted);
  });

  it("sorts an array of numbers with duplicates", () => {
    const a = [3, 1, 2, 3, 9, 17, 10, 432, 10];
    const sorted = [1, 2, 3, 3, 9, 10, 10, 17, 432];
    expect(a.quickSort()).toEqual(sorted);
  });

  it("sorts according to the callback passed in", () => {
    const a = [ 2, 1, 3, 5, 0, 8, 4, 7, 6];
    const sorted = [8, 7, 6, 5, 4, 3, 2, 1, 0];
    const callback = (x, y) => {
      if (y < x) return - 1;
      return 1;
    };

    expect(a.quickSort(callback)).toEqual(sorted);
  });
});
