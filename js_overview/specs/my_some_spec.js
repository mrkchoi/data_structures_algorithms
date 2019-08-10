describe('Array.prototype.mySome', () => {
  let a;
  const spy = {
    callback: x => x > 1
  }

  beforeEach(() => {
    a = [1, 2, 3];
    spyOn(Array.prototype, 'forEach').and.callThrough();
    spyOn(Array.prototype, "some").and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.forEach).not.toHaveBeenCalled();
    expect(Array.prototype.some).not.toHaveBeenCalled();
  });

  it("returns true if any element matches the callback", () => {
    expect(a.mySome(spy.callback)).toBe(true);
  });

  it("returns false if no elements match the callback", () => {
    const callback = x => x === 4;
    expect(a.mySome(callback)).toBe(false);
  });

  it("calls the Array.prototype.myEach method", () => {
    spyOn(a, "myEach");
    a.mySome(spy.callback);
    expect(a.myEach).toHaveBeenCalled();
  });
});
