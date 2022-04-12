/* 
I: string
O: true or false
C: string lenth is at least 1 character, only consists of '() [] {}' type characters
E: starts with right side, ends with left side, other type in between
Time Complexity: 
Space Complexity: 
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
    }
    return stack.length===0
}

console.log(validParentheses("[]{}()")===true)

