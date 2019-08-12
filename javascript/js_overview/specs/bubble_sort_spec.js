describe("Array.prototype.bubbleSort", () => {
  let array;

  // it does not call sort (setup)
  beforeEach(() => {
    array = [3, 1, 2, 5, 4];
    spyOn(Array.prototype, 'sort').and.callThrough();
  });

  // it does not call sort (verification)
  afterEach(() => {
    expect(Array.prototype.sort).not.toHaveBeenCalled();
  });

  it("works with an empty array", () => {
    expect([].bubbleSort()).toEqual([]);
  });

  it("works with an array of one item", () => {
    expect([1].bubbleSort()).toEqual([1]);
  });

  it("sorts numbers", () => {
    const sortedArray = [1, 2, 3, 4, 5];
    expect(array.bubbleSort()).toEqual(sortedArray);
  });

  it("will use callback if given", () => {
    const reversedArray = [5, 4, 3, 2, 1];
    const sorted = array.bubbleSort((num1, num2) => {
      // order numbers based on descending sort of their squares
      const square1 = Math.pow(num1, 2);
      const square2 = Math.pow(num2, 2);
      if (square2 < square1) {
        return -1;
      } else if (square2 === square1) {
        return 0;
      } else {
        return 1;
      }
    });

    expect(sorted).toEqual(reversedArray);
  });

  it("does not modify the original array", () => {
    const dupedArray = array.slice();
    dupedArray.bubbleSort();
    expect(dupedArray).toEqual(array);
  });
});
