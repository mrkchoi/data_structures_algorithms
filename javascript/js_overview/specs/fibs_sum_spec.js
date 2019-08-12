describe('fibsSum', () => {
  it('returns the sum of the first fibonacci number', () => {
    expect(fibsSum(1)).toEqual(1);
  });

  it('returns the sum of the first 2 fibonacci numbers', () => {
    expect(fibsSum(2)).toEqual(2);
  });

  it('returns the sum of the first 6 fibonacci numbers', () => {
    expect(fibsSum(6)).toEqual(20);
  });

  it("calls itself recursively", () => {
    spyOn(window, "fibsSum").and.callThrough();
    fibsSum(6);
    expect(fibsSum.calls.count()).not.toBeLessThan(6);
  });
});
