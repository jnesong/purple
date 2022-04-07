/* 
I: string
O: all consecutive substrings within that string, of at least 1 character
C: input will have a length of 0 or more
E: if 0 or 1 character, just return input
Time Complexity: O(n²)
Space Complexity: O(n²)
*/
//use a prefix tree or double for loop
function consecutiveSubstrings(str) {
    let all = []
    if (str.length === 0){
        return []
      }
    else if (str.length < 2) {
        all.push(str)
    } else {
        let arr = str.split("")
        for (let i = 0; i < str.length; i++) {
            all.push(arr[i])
            for (let j = i+1; j < str.length; j++){
                all.push(all[all.length - 1] + arr[j])
            }
        } 
    }
    return all
}

// function helper ( arr ) {

//     console.log(arr)

// }

console.log(consecutiveSubstrings('abcde'))
console.log(consecutiveSubstrings('m'))
console.log(consecutiveSubstrings(''))


