describe('Array.prototype.myReject', () => {
  let a;
  const spy = {
    callback: x => x > 1
  }

  beforeEach(() => {
    a = [1, 2, 3];
    spyOn(Array.prototype, 'forEach').and.callThrough();
    spyOn(Array.prototype, 'filter').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.forEach).not.toHaveBeenCalled();
    expect(Array.prototype.filter).not.toHaveBeenCalled();
  });

  it('returns elements that do not match the passed in block', () => {
    expect(a.myReject(spy.callback)).toEqual([1]);
  });

  it('returns all elements if no elements match the block', () => {
    const callback = x => x === 4;
    expect(a.myReject(callback)).toEqual([1, 2, 3]);
  });

  it('returns an empty array if all elements match the block', () => {
    const callback = x => x < 4;
    expect(a.myReject(callback)).toEqual([]);
  });

  it("calls the Array.prototype.myEach method", () => {
    spyOn(a, "myEach");
    a.myReject(spy.callback);
    expect(a.myEach).toHaveBeenCalled();
  });
});
