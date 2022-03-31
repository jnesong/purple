//I: n
//O: the nth element in the Fibonacci series (every value is the sum of the two values preceding it)
//C: zero-indexing, sequence starts at 0, followed by 1
//E: n of 0 or n of 1
//Time complexity:
// Space complexity: 

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34

function fibonacci(n){
    if (n === 0) {
        return 0
    } 
    else if (n === 1 || n === 2) {
        return 1
    } else {
        let fib = [0, 1, 1]
        for (i = 2; i < n; i++) {
            let next = fib[i] + fib[i-1]
            fib.push(next)
        }
        return fib[n]
    }

}

console.log(fibonacci(0)=== 0)
console.log(fibonacci(1)=== 1)
console.log(fibonacci(2)=== 1)
console.log(fibonacci(3)=== 2)
console.log(fibonacci(3))



