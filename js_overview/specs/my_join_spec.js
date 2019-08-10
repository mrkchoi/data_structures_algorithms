describe("myJoin", () => {
  beforeEach(() => {
    spyOn(Array.prototype, 'join').and.callThrough();
  });

  afterEach(() => {
    expect(Array.prototype.join).not.toHaveBeenCalled();
  });

  it("returns an empty string for an empty array", () => {
    const empty = [];
    expect(empty.myJoin()).toEqual("");
  });

  it("joins an array with an empty string if no argument is passed", () => {
    const a = ['a', 'b', 'c', 'd'];
    expect(a.myJoin()).toEqual("abcd");
  });

  it("joins an array with argument if an argument is passed", () => {
    const a = ['a', 'b', 'c', 'd'];
    expect(a.myJoin("$")).toEqual("a$b$c$d");
  });
});
