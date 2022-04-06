const recursiveSearch = require('./RecursiveSearch');

test("empty array returns false", () => {
    expect(recursiveSearch([], 2)).toEqual(false);
});

test("array with target returns true", () => {
    expect(recursiveSearch([0, 1, 23, 4], 1)).toEqual(true)
    expect(recursiveSearch([1, 2, 3], 2)).toEqual(true)
});

test ("array without target returns false", () => {
    expect(recursiveSearch([3, 2, 1], 4)).toEqual(false)
    expect(recursiveSearch([0, 1, 23, 4], 2)).toEqual(false)
})

