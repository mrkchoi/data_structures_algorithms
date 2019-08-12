describe('baseConverter', () => {
  it('converts a small number into base 2 (binary)', () => {
    expect(baseConverter(5, 2)).toEqual('101');
  });

  it('converts a large number into base 2 (binary)', () => {
    expect(baseConverter(1239449, 2)).toEqual('100101110100110011001');
  });

  it('converts a small number into base 16 (hexadecimal)', () => {
    expect(baseConverter(31, 16)).toEqual('1f');
  });

  it('converts a large number into base 16 (hexadecimal)', () => {
    expect(baseConverter(1239449, 16)).toEqual('12e999' || '12E999');
  });

  it("returns 0 if the number is 0, regardless of base", () => {
    expect(baseConverter(0, 16)).toEqual("0");
    expect(baseConverter(0, 2)).toEqual("0");
  });
});
