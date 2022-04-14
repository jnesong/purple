/* 
I: two strings, s and t
O: true or false
C: both strings are at least one character and less than 50,000 characters, all English and lowercase letters
E: single character
Time Complexity: O(n)
Space Complexity: O(n)
*/

function isAnagram( s, t ) {
    if (s===t) {return true}
    if(s.length!==t.length){return false}
    let map = {}
    for (let i=0; i<s.length; i++){
        if (map[s[i]]){
            map[s[i]]++
        } else {
            map[s[i]] = 1
        }
    }
    
    for (let j=0; j<t.length; j++){
        if (!map[t[j]]) {
            return false
        } else {
            map[t[j]]--
        }
    }

    console.log(map)

    return true
}

console.log(isAnagram("a", "a")===true)
console.log(isAnagram("anagram", "nagaralm")===false)
console.log(isAnagram("anagram", "nagabrm")===false)