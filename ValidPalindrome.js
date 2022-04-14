/* 
I: a string
O: true or false
C: convert all uppercase to lowercase, remove all non-alphanumeric characters (letters and numbers), ASCII characters
E: single character, empty string
Time Complexity: O(n)
Space Complexity: O(1)
*/

function isPalindrome(s) {
    for (let [i, j] = [0, s.length - 1]; i < j;) {
        if (/\W|_/.test(s[i])) { i++ }
        else if (/\W|_/.test(s[j])) { j-- }
        else {
            if (s[i].toLowerCase() !== s[j].toLowerCase()) { return false }
            i++
            j--
        }
    } return true
}

// function isPalindrome() {
//     s = s.toLowerCase().replace(/\W|_/gi, '');
//     for (let i = 0, j = s.length - 1; i <= j; i++, j--) {
//         if (s.charAt(i) !== s.charAt(j)) return false;
//     }
//     return true;
// }

console.log(isPalindrome("RA_ce car"))

