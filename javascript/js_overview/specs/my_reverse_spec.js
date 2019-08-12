describe("myReverse", () => {
  beforeEach(() => {
    spyOn(Array.prototype, 'reverse').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.reverse).not.toHaveBeenCalled();
  });

  it("Works on an empty array", () => {
    expect(myReverse([])).toEqual([]);
  });

  it("Works on a single element array", () => {
    expect(myReverse(["a"])).toEqual(["a"]);
  });

  it("Reverses an array", () => {
    const a = ["a", "b", "c"];
    expect(myReverse(a)).toEqual(["c", "b", "a"]);
  });

  it("Doesn't mutate the original array", () => {
    const a = ["a", "b", "c"];
    myReverse(a);
    expect(a).toEqual(["a","b","c"]);
  });
});
