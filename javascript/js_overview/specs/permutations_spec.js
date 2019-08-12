describe("permutations", () => {
  it("correctly nests the result for an empty array", () => {
    expect(permutations([])).toEqual([[]]);
  });

  it("correctly nests the result for a single element array", () => {
    expect(permutations([1])).toEqual([[1]]);
  });

  it("returns all permutations of an array", () => {
    const allPermutations = [
      [1, 2, 3], [1, 3, 2], [2, 1, 3],
      [2, 3, 1], [3, 1, 2], [3, 2, 1]
    ];
  
    permutations([1,2,3]).forEach((perm) => {
      expect(allPermutations).toContain(perm);
    });
  });

  it("calls itself recursively", () => {
    spyOn(window, "permutations").and.callThrough();
    permutations([1,2,3]);
    expect(permutations.calls.count()).not.toBeLessThan(3);
  });
});
