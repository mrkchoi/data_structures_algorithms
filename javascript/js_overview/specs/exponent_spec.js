describe("exponent", () => {
  beforeEach(() => {
    spyOn(Math, 'pow').and.callThrough();
  });

  afterEach(() => {
    expect(Math.pow).not.toHaveBeenCalled();
  });
  
  it("correctly handles positive powers", () => {
    expect(exponent(5, 3)).toEqual(125);
  });

  it("correctly handles negative powers", () => {
    expect(exponent(2, -3)).toEqual(1/8.0);
  });

  it("correctly handles 0", () => {
    expect(exponent(2, 0)).toEqual(1);
  });

  it("calculates the exponent recursively", () => {
    spyOn(window, "exponent").and.callThrough();
    exponent(5, 3);
    expect(exponent.calls.count()).not.toBeLessThan(3);
  });
});
