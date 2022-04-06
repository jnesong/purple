const reverseString = require('./ReverseString');

test("empty string returns nothing", () => {
    expect(reverseString("")).toEqual("");
  });
  
  test("single character returns character", () => {
    expect(reverseString("a")).toEqual("a");
  }); 
  
  test("two character string", () => {
    expect(reverseString("ab")).toEqual("ba");
  });
  
  test("three character string", () => {
    expect(reverseString("cat")).toEqual("tac");
  });
  
  test("reverses long string", () => {
    expect(reverseString("wingardium-leviosa")).toEqual("asoivel-muidragniw");
  });