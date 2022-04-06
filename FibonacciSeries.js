/* 
I: number n
O: the nth element in the Fibonacci sequence (every value is the sum of the two values preceding it)
C: 0-indexing, sequence starts at 0, followed by 1
E: n of 0; n of 1
Time Complexity: O(n)
Space Complexity: O(1)
*/

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(n) {
    if (Number.isInteger(n) === false) {
        return null
    }
    else {
        let fib = [0, 1, 1]
        if (n > 2) {
            for (i = 2; i < n; i++) {
                let next = fib[i] + fib[i - 1]
                fib.push(next)
            }
        }
        return fib[n]
    }

}

console.log(fibonacci(0) === 0)
console.log(fibonacci(1) === 1)
console.log(fibonacci(2) === 1)
console.log(fibonacci(3) === 2)
console.log(fibonacci(10) === 55)
console.log(fibonacci(11) === 89)
console.log(fibonacci("a") === null)
console.log(fibonacci("-4") === null)



module.exports = fibonacci




