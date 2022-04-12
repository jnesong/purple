/* 
I: string
O: true or false
C: string lenth is at least 1 character, only consists of '() [] {}' type characters
E: starts with right side, ends with left side, other type in between
Time Complexity: O(n)
Space Complexity: O(n)
*/

// will use stacks
function validParentheses(s) {
    let stack = []
    for (let i=0; i<s.length; i++){
        if (s[i]==="(" || s[i]==="[" || s[i]==="{"){
            stack.push(s[i])
        }
        else if (stack.length===0){
            return false
        }
        else if (s[i]===")" && stack.pop()!=="("){
            return false
        }
        else if (s[i]==="]" && stack.pop()!=="["){
            return false
        }
        else if (s[i]==="}" && stack.pop()!=="{"){
            return false
        }
        console.log(stack)
    }
    return stack.length===0
}

// console.log(validParentheses("[]{}()")===true)
console.log(validParentheses("[[{()}]]{}")===true)
// console.log(validParentheses("[]}()")===false)


