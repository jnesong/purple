/* 
I: a string
O: true or false
C: convert all uppercase to lowercase, remove all non-alphanumeric characters (letters and numbers), ASCII characters
E: single character, empty string
Time Complexity: 
Space Complexity: 
*/

function isPalindrome ( s ) {
    for (let [i, j]=[0, s.length-1]; i<j;i++,j--){
        if(/\W|_/.test(s[i])){
            i++
        } else if (/\W|_/.test(s[j])){
            j--
        } else {
            console.log(s[i])
            console.log(s[j])
            if (s[i].toLowerCase()!==s[j].toLowerCase()){
                return false
            }
        }
    } return true
}

console.log(isPalindrome("RA_ce car"))
