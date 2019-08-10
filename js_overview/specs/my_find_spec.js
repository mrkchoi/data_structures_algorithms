describe("myFind", () => {
  let arr, spy;
  beforeEach(() => {
    arr = [1, 2, 3];
    spy = {
      callback: (el) => false
    };

    spyOn(Array.prototype, 'find');
  });

  afterEach(() => {
    expect(Array.prototype.find).not.toHaveBeenCalled();
  });

  it("calls the callback passed to it", () => {
    spyOn(spy, "callback");

    myFind(arr, spy.callback);

    expect(spy.callback).toHaveBeenCalled();
  });

  it("returns an element for which the callback is true", () => {
    expect(myFind([1,2,3], el => el > 2)).toEqual(3);
  });

  it("returns undefined if the callback never returns true", () => {
    expect(myFind([1,2,3], el => el > 4)).toEqual(undefined);
  });

  it("returns the only the first applicable element", () => {
    expect(myFind([1,2,3], el => el > 1)).toEqual(2);
  });
});
