const findFirstDuplicate = require('./FindFirstDuplicate')

test ('empty array returns -1', () => {
    expect(findFirstDuplicate([])).toBe(-1)
})

test ('single character array returns -1', () => {
    expect(findFirstDuplicate([2])).toBe(-1)
})