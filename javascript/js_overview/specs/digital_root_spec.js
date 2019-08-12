describe("digitalRoot", () => {
  it("calculates the digital root of a single-digit number", () => {
    expect(digitalRoot(9)).toEqual(9);
  });

  it("calculates the digital root of a larger number", () => {
    expect(digitalRoot(44322)).toEqual(6);
  });
  
  it("does not call Number#toString on the argument", () => {
    spyOn(Number.prototype, 'toString').and.callThrough();
    digitalRoot(4322);
    expect(Number.prototype.toString).not.toHaveBeenCalled();
  });
});
