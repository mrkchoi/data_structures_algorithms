describe("transpose", () => {
  it("should transpose a small square matrix", () => {
    const smallArr = [
      [1, 2],
      [3, 4]
    ];

    expect(transpose(smallArr)).toEqual([
      [1, 3],
      [2, 4]
    ]);
  });

  it("should transpose a larger square matrix", () => {
    const arr = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    expect(transpose(arr)).toEqual([
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9]
    ]);
  });


  it("should transpose a horizontal rectangular matrix", () => {
    const rectArr = [
      [1, 2, 3],
      [4, 5, 6]
    ];

    expect(transpose(rectArr)).toEqual([
      [1, 4],
      [2, 5],
      [3, 6]
    ]);
  });

  it("should transpose a vertical rectangular matrix", () => {
    const rectArr = [
      [1, 2],
      [3, 4],
      [5, 6]
    ];

    expect(transpose(rectArr)).toEqual([
      [1, 3, 5],
      [2, 4, 6]
    ]);
  });

  it("should not modify the original array", () => {
    const arr = [
      [1, 2],
      [3, 4]
    ];

    transpose(arr);
    expect(arr).toEqual([
      [1, 2],
      [3, 4]
    ]);
  });
});
