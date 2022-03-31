const findFirstDuplicate = require('./FindFirstDuplicate')

test ('empty array returns -1', () => {
    expect(findFirstDuplicate([])).toBe(-1)
})