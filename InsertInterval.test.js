const insert = require('./InsertInterval')

test ('input new interval that merges with two inner intervals', () => {
    expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1,2], [3,10], [12,16]])
})

test('input new interval that extends one original interval', () => {
    expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1,5], [6,9]])
    expect(insert([[1, 5]], [5, 7])).toEqual([[1,7]])
    expect(insert([[1, 5]], [0, 3])).toEqual([[0,5]])

})

test('input new interval to empty array', () => {
    expect(insert([], [2, 5])).toEqual([[2,5]])
})

test('input new interval that is contained within original intervals', () => {
    expect(insert([[1, 5]], [2, 3])).toEqual([[1,5]])
})

test ('input new interval that is outside the range of the original intervals', () => {
    expect(insert([[1, 5]], [6, 8])).toEqual([[1,5], [6,8]])
})

