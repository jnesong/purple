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

    return true
}

// function isAnagram( s, t ) {
//     let f1 = [];
//     let f2 = [];
//     for (let i = 0; i < 26; i++) {
//         f1[i] = 0;
//         f2[i] = 0;
//     }
//     for (let i = 0; i < s.length; i++) {
        
//         f1[s.charCodeAt(i) - 97]++;
//     }
//     for (let i = 0; i < t.length; i++) {
        
//         f2[t.charCodeAt(i) - 97]++;
//     }
//     for (let i = 0; i < 26; i++) {
//         if (f1[i] !== f2[i]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(isAnagram("a", "a")===true)
// console.log(isAnagram("anagram", "nagaralm")===false)
// console.log(isAnagram("anagram", "nagabrm")===false)
// console.log(isAnagram("anagram", "margaan")===true)
console.log(isAnagram("pizza", "zzaip"))

/*
97 is the numeric value of the character 'a', 
so if you subtract 97 from a character between 'a' and 'z', 
you are mapping that character to an index of your array between 0 and 25.
*/