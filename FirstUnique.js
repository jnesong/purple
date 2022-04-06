/* 
I: array of strings
O: index of first unique string, 1-indexing
C: strings will be at least one character, English alphabet
E: if no unique strings, return -1
Time Complexity: O(n)
Space Complexity: O(n)
*/

function FirstUnique(arr) {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            map[arr[i]] = 2
        } else {
            map[arr[i]] = 1
        }
    }
    
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]] === 1) {
            return arr.indexOf(arr[i])+1
        } 
    } 

    return -1

}


console.log(FirstUnique(["abc", "c", "c", "dog", "abc"]) === 4)
console.log(FirstUnique([]) === -1)
console.log(FirstUnique(["abc", "c", "dog", "abc", "abc", "c", "dog", "abc"]) === -1)

