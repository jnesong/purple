const reverseString = (str) => {
    let newStr = []
    for (i = str.length - 1; i >= 0; i--) {
        let x = str[i]
        newStr.push(x)
    }

    return newStr.join("")
}

/*
reverseString() takes in a string and outputs the characters in reverse order
first declare an empty array, then loop through the string backwards, one character at a time
push each character into the new array
return the new array with its characters joined, without extra characters/spacing using .join("")
*/
// console.log(reverseString("good bye"))

const findFirstDuplicate = (arr) => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            return arr[i]
        } else { obj[arr[i]] = 1 }
    }
    return -1
}
/*
findFirstDuplicate() takes in an array and outputs the first repeated element
first declare an empty object to use as a hash map
loop through the array, one element at a time
first check if the element already exist as a key in the map
if it does, its a dupe, so return it
if not, then add it as a key to the array with a truthy value
so as the loop continues it will have easy access to check for pre-visited elements in the array, via the map/first if(obj[arr[i]])
if there are no dupes, the for loop will end and -1 will be returned to indicate no dupes
*/

// console.log(findFirstDuplicate([4,6,9,1,3,6]))
// console.log(findFirstDuplicate([]))

const fibonacci = (num) => {
    let myFibonacci = [0, 1]
    for (let i = 2; i < num + 1; i++) {
        let x = myFibonacci.length - 1
        let y = myFibonacci.length - 2
        let z = myFibonacci[x] + myFibonacci[y]
        myFibonacci.push(z)
    }

    let w = myFibonacci.length - 1
    return myFibonacci[w]
}

/*
fibonacci() takes in a number and returns that number element in the fibonacci sequence, a sequence where each element is the sum of the two elements before it
first declare an array with the first two elements in the fibonacci sequence, 0 and 1
then begin constructing the sequence by starting at i=2, since we already have the first two elements, up until the num given
we construct one element at a time by pushing the sum of the last two elements in the fibonacci onto the same fibonacci array
finally, we return the last element in the array which will be the position num
because javascript arrays start at index 0, this would be the array.length-1
I like this method because it clearly/simply also works for edge cases where the input is 0 or 1
this can be refactored to have no variables w, x, y, z also
*/

// console.log(fibonacci(10))
// console.log(fibonacci(0))


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                console.log(arr)
            }
        }
    }
    return arr
}

/*
selectionSort() is an inefficient sorting algo that uses two nested for loops, so O(n^2) time complexity to compare 
it checks whether each element after the i element is smaller than the i element and if so, swaps it
so on the first nested loop, 2 is swapped with 4 for index 0, only to be swapped with -3 for index 0, then finally with -4 for index 0
since nothing after -4 is smaller than -4, the outer loop is incremented to index 1, which is now 4
and the same process repeats except for index 1 not 0 
and so on
after both loops are complete, the sorted array is returned
*/

// console.log(selectionSort([4, 2, -3, 0, 5, -4]))

const findShortestString = (arr) => {
    return arr.reduce((shortest, b) => shortest.length <= b.length ? shortest : b)
}

const shortestString = (arr) => {
    let shortest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i]
        }
    }
    return shortest
}

/*
findShortestString() takes in an array of strings and returns the string with the shortest length
.reduce() is an iterative method that starts with the first element of the array assigned to the first parameter, shortest
then it iterates through, comparing via ternary expression,
where the boolean condition is whether the "shortest" length is shorter than the current element
the ternary with .reduce() here will return the shortest as the shortest if it is true
.reduce((previousValue, currentValue) => {function whose return becomes the previous value}, optional initial value)
but return the current element as the shortest if it is false
*/

// console.log(findShortestString(["hi", "bye", "hello", "a"]))
// console.log(findShortestString(["hi", "bye", "hello"]))
// console.log(shortestString(["hi", "bye", "hello", "a"]))
// console.log(shortestString(["hi", "bye", "hello"]))

// const useReduce = (arr) => {
//     let initial = 0
//     return arr.reduce((prev, current) => prev + current, initial)
// }

// console.log(useReduce([4, 5, 10]))

const recursiveSearch = (arr, target) => {
    if (arr.length === 0) { return false }
    if (arr[arr.length - 1] === target) {
        return true
    } else {
        // arr.pop()
        let newArr = arr.slice(0, arr.length - 1)
        return recursiveSearch(newArr, target)
    }
}

/* 
recursiveSearch() takes in an array and a target element and returns true if the target is an element in the array and false if not
first catch the edge case/end the recursion if the array has no elements, in which case it is impossible for the target to be in the array so return false
then check if the last element in the array is the target, if it is, return true
if it is not, remove the last element and call the recursion on the new array (without the last element) and the same target
the recursion will end when the array has no elements left to check/pop off thus if it reaches that point return false because the target was not found by the end
recursive runtime is O(branches^depth) so here, O(1^n)?
 */

// console.log(recursiveSearch([0, 1, 23, 4], 1) === true)
// console.log(recursiveSearch([3, 2, 1], 4) === false)
// console.log(recursiveSearch([0, 1, 23, 4], 2) === false)
// console.log(recursiveSearch([1, 2, 3], 2) === true)
// console.log(recursiveSearch([], 2) === false)

const balancingParentheses = (s) => {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i])
        }
        else if (s[i] === ")" && stack.pop() !== "(") {
            return false
        }
        else if (s[i] === "]" && stack.pop() !== "[") {
            return false
        }
        else if (s[i] === "}" && stack.pop() !== "{") {
            return false
        }
    }
    return stack.length === 0
}

/*
balancingParentheses() takes a string of only () {} or [] characters and returns whether it each opening parentheses is appropriately closed
first declare an empty stack to store left parentheses
loop forward through the string, one character at a time
if it is left/opening parentheses push it on the stack to await to be matched
if not an opening, check the remaining right/closing options
for the right does not match the top of the stack, return false
if it does it will be removed via the stack.pop() and the for loop will continue
at the end of the string, all openings should be closed to be valid, thus the length of the stack would need to be 0
if it is not 0, there are some unclosed openings, therefore return false 
 */

// console.log(balancingParentheses("[[{()}]]{}") === true)
// console.log(balancingParentheses("({[}])")===false)
// console.log(balancingParentheses("[]}()")===false)
// console.log(balancingParentheses("")===true)

const isUnique = ( arr ) => {
    let map = {}
    for (let i=0; i<arr.length; i++){
        if (map[arr[i]]) { return false }
        else {
            map[arr[i]] = 1
        }
    }

    return true
}

/*
isUnique() takes in an array or string and returns true if each element or character is unique, returns false if not
first declare an obj to use as a map
then loop forward through the array, one element at time
if the element exist as a key in the map, there is a repeat, therefore return false
if the element does not, save the element as a key for the map to be checked against the remainder of the array
if the loop finishes and no repeats are found, return true, every element in the array is unique
*/

console.log(isUnique([5, 9, 10, 3, 44, 55, 9]) === false)
console.log(isUnique([5, 9, 10, 3, 44, 55]) === true)
console.log(isUnique([]) === true)