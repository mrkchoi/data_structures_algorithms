describe("factorialsRec", () => {
  it("returns first factorial number", () => {
    expect(factorialsRec(1)).toEqual([1]);
  });

  it("returns first two factorial numbers", () => {
    expect(factorialsRec(2)).toEqual([1, 1]);
  });

  it("returns many factorials numbers", () => {
    expect(factorialsRec(6)).toEqual([1, 1, 2, 6, 24, 120]);
  });

  it("calls itself recursively", () => {
    spyOn(window, "factorialsRec").and.callThrough();
    factorialsRec(6);
    expect(factorialsRec).toHaveBeenCalledTimes(6);
  });
});
