describe("recSum", () => {
  it("returns 0 if the array is empty", () => {
    expect(recSum([])).toEqual(0);
  });
  
  it("works with an array of 1 element", () => {
    expect(recSum([25])).toEqual(25);
  });

  it("returns the sums of all elements in an array", () => {
    const arr = [1,2,3,4];
    expect(recSum(arr)).toEqual(10);
  });

  it("calls itself recursively", () => {
    const arr = [1,2,3,4]
    spyOn(window, 'recSum').and.callThrough();
    recSum(arr)
    expect(recSum.calls.count()).not.toBeLessThan(4);
  });
});
