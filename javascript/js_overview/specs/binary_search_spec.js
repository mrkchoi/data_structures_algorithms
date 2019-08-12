describe("binarySearch", () => {
  let searchArr;

  beforeEach(() => {
    searchArr = [1, 2, 3, 4, 5, 6, 7];
    spyOn(Array.prototype, 'indexOf').and.callThrough();
    spyOn(Array.prototype, 'includes').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.indexOf).not.toHaveBeenCalled();
    expect(Array.prototype.includes).not.toHaveBeenCalled();
  });

  it("should find an element in the right side of the array", () => {
    expect(binarySearch(searchArr, 7)).toEqual(6);
  });

  it("should find an element in the left side of the array", () => {
    expect(binarySearch(searchArr, 1)).toEqual(0);
  });

  it("should return -1 when an element is not present", () => {
    expect(binarySearch(searchArr, 8)).toEqual(-1);
  });

  it("should recursively search the correct half of the array", () => {
    spyOn(window, "binarySearch").and.callThrough();
    expect(binarySearch(searchArr, 6)).toEqual(5);
    expect(binarySearch).toHaveBeenCalledWith([5, 6, 7], 6);
  });
});
