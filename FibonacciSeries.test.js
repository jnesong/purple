const fibonacci = require('./FibonacciSeries')

test ('input 0', () => {
    expect(fibonacci(0)).toBe(0)
})

test ('input 1', () => {
    expect(fibonacci(1)).toBe(1)
})

test('input 2', () => {
    expect(fibonacci(2)).toBe(1)
})

test('input 10', () => {
    expect(fibonacci(10)).toBe(55)
})

test('input negative or not an integer', () => {
    expect(fibonacci("a")).toBe(null)
})