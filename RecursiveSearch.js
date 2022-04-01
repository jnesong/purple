//I: array of values, target
//O: true, if target is in array; false if not
//C: use recursion
//E:
//Time complexity: O(n)
//Space complexity: O(1)

function recursiveSearch(array, target) {
    // console.log(array)
    if (array.length === 0) {
        return false
    } else if (array[array.length-1] === target) {
        return true
    } else {
        array.pop()
        return recursiveSearch(array, target)
    }
}

console.log(recursiveSearch([0, 1, 23, 4], 1) === true)
console.log(recursiveSearch([3, 2, 1], 4) === false)
console.log(recursiveSearch([0, 1, 23, 4], 2) === false)
console.log(recursiveSearch([1, 2, 3], 2) === true)