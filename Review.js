const reverseString = ( str ) => { 
    let newStr = []
    for (i=str.length-1; i>=0; i--){
        let x = str[i]
        newStr.push(x)
    }

    return newStr.join("")
}

/* reverseString() takes in a string and outputs the characters in reverse order
first declare an empty array, then loop through the string backwards, one character at a time
push each character into the new array
return the new array with its characters joined, without extra characters/spacing using .join("")
*/
console.log(reverseString("good bye"))
