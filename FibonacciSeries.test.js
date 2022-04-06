const fibonacci = require('./FibonacciSeries')

test ('input 0', () => {
    expect(fibonacci(0)).toEqual(0)
})

test ('input 1', () => {
    expect(fibonacci(1)).toEqual(1)
})

test('input 2', () => {
    expect(fibonacci(2)).toEqual(1)
})

test('input 10', () => {
    expect(fibonacci(10)).toEqual(55)
})

test('input negative or not an integer', () => {
    expect(fibonacci("a")).toEqual(null)
})