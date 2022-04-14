/* 
I: a string
O: true or false
C: convert all uppercase to lowercase, remove all non-alphanumeric characters (letters and numbers), ASCII characters
E: single character, empty string
Time Complexity: 
Space Complexity: 
*/

function isPalindrome ( s ) {
    let reverse = []
    let string = [...s]
    for (let i=0; i<s.length; i++){
        x = string.pop()
        reverse.push(x)
    }
    console.log(reverse)
    return reverse.join("")===s
}

console.log(isPalindrome("pizza"))
