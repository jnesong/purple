const reverseString = require('./ReverseString');

test("empty string returns nothing", () => {
    expect(reverseString("")).toBe("");
  });
  
  test("single character returns character", () => {
    expect(reverseString("a")).toBe("a");
  }); 
  
  test("two character string", () => {
    expect(reverseString("ab")).toBe("ba");
  });
  
  test("three character string", () => {
    expect(reverseString("cat")).toBe("tac");
  });
  
  test("reverses long string", () => {
    expect(reverseString("wingardium-leviosa")).toBe("asoivel-muidragniw");
  });