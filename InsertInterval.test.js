const insert = require('./InsertInterval')

test ('input new interval that merges with two inner intervals', () => {
    expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1,2], [3,10], [12,16]])
})

// test ('input 1', () => {
//     expect(fibonacci(1)).toEqual(1)
// })

// test('input 2', () => {
//     expect(fibonacci(2)).toEqual(1)
// })

// test('input 10', () => {
//     expect(fibonacci(10)).toEqual(55)
// })

// test('input negative or not an integer', () => {
//     expect(fibonacci("a")).toEqual(null)
// })

// console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
// console.log("[[1,2], [3,10], [12,16]]")
// console.log(insert([[1, 3], [6, 9]], [2, 5]))
// console.log("[[]]")
// console.log(insert([], [2, 5]))
// console.log(insert([[1, 5]], [2, 3]))
// console.log(insert([[1, 5]], [5, 7]))
// console.log(insert([[1, 5]], [6, 8]))
// console.log(insert([[1, 5]], [0, 3]))