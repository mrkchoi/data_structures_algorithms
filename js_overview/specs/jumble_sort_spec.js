describe("jumbleSort", () => {
  beforeEach(() => {
    spyOn(Array.prototype, "sort").and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.sort).not.toHaveBeenCalled();
  });
  
  it("defaults to alphabetical order", () => {
    expect(jumbleSort("hello")).toEqual("ehllo");
  });

  it("takes an alphabet array and sorts by that order", () => {
    const alphabet = 'helo'.split('');
    expect(jumbleSort("hello", alphabet)).toEqual("hello");
  });

  it("sorts by a reversed alphabet", () => {
    const reverseAlpha = 'abcdefghijklmnopqrstuvwxyz'.split('').reverse().join('');
    expect(jumbleSort("hello", reverseAlpha)).toEqual("ollhe");
  });
});
