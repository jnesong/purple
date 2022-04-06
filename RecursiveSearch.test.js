const recursiveSearch = require('./RecursiveSearch');

test("empty array returns false", () => {
    expect(recursiveSearch([], 2)).toBe(false);
});

test("array with target returns true", () => {
    expect(recursiveSearch([0, 1, 23, 4], 1)).toBe(true)
    expect(recursiveSearch([1, 2, 3], 2)).toBe(true)
});

test ("array without target returns false", () => {
    expect(recursiveSearch([3, 2, 1], 4)).toBe(false)
    expect(recursiveSearch([0, 1, 23, 4], 2)).toBe(false)
})

