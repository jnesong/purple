const findFirstDuplicate = require('./FindFirstDuplicate')

test ('empty array returns -1', () => {
    expect(findFirstDuplicate([])).toEqual(-1)
})

test ('single character array returns -1', () => {
    expect(findFirstDuplicate([2])).toEqual(-1)
})

test('mix of numbers and strings', () => {
    expect(findFirstDuplicate([2, 1, 3, "hello", "hi", "hello", 1])).toEqual("hello")
})

test('no duplicates', () => {
    expect(findFirstDuplicate([1, 2, 3, 4])).toEqual(-1)
})

test('just numbers, two duplicates, returns first', () => {
    expect(findFirstDuplicate([1, 2, 3, 4, 3, 5, 9, 1])).toEqual(3)
})