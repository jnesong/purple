//I: array of values, target
//O: true, if target is in array; false if not
//C: use recursion
//E:
//Time complexity:
//Space complexity:

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
console.log(recursiveSearch([0, 1, 23, 4], 2) === false)