describe('Array.prototype.myEvery', () => {
  let arr;
  const spy = {
    callback: x => x % 2 === 0
  }

  beforeEach(() => {
    arr = [2, 4, 6];
    spyOn(Array.prototype, 'forEach').and.callThrough();
    spyOn(Array.prototype, 'every').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.forEach).not.toHaveBeenCalled();
    expect(Array.prototype.every).not.toHaveBeenCalled();
  });

  it("returns true if all elements match the block", () => {
    expect(arr.myEvery(spy.callback)).toBe(true);
  });

  it("returns false if not all elements match the block", () => {
    const callback = x => x % 3 === 0;
    expect(arr.myEvery(callback)).toBe(false);
  });

  it("calls the Array.prototype.myEach method", () => {
    spyOn(arr, "myEach");
    arr.myEvery(spy.callback);
    expect(arr.myEach).toHaveBeenCalled();
  });
});
