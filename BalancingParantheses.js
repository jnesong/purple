/* 
I: string containing only parentheses
O: number of additional parentheses needed for the string to be considered balanced
C: input string will have a min length of 1
E: only left or only right parentheses; start with right; ends with left
Time Complexity: O(n)
Space Complexity: O(n)
*/

function balancingParentheses ( string ){
    let arr = string.split("")
    let stackL = []
    let stackR = []
    for (let i=0; i<arr.length; i++){
        if (arr[i]==="("){
            stackL.push(arr[i])
        } else if ( arr[i]===")" && stackL.length>0){
            stackL.pop()
        } else {
            stackR.push(arr[i])
        }
    }
    return (stackL.length + stackR.length)
}


console.log(balancingParentheses('(()())') === 0);
console.log(balancingParentheses('()))') === 2);
console.log(balancingParentheses(')') === 1);
console.log(balancingParentheses('(((') === 3);
console.log(balancingParentheses(')((((()))((())))()(()))(') === 2);




