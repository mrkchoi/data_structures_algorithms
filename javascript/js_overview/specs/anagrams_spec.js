describe('anagrams', () => {
  beforeEach(() => {
    spyOn(Array.prototype, 'sort').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.sort).not.toHaveBeenCalled();
  });
  
  it('returns true if words are anagrams', () => {
    expect(anagrams('abc', 'cba')).toBe(true);
  });

  it('returns false if words are not anagrams', () => {
    expect(anagrams('abc', 'aba')).toBe(false);
  });

  it('does not count words with same letters but varying lengths as anagrams', () => {
    expect(anagrams('abc', 'cbaa')).toBe(false);
  });

  it('can handle large words with letters extremely scrambled', () => {
    expect(anagrams('aiuwehfxzxcvmneowieurahsde', 'nsewceaerihfawzueouxdihmxv')).toBe(true);
    expect(anagrams('aiuwehfxzxcvmneowieurahsde', 'nsewceaerihfawzueouxdihmxw')).toBe(false);
  });
});
