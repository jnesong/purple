function reverseString(str) {
    if (str.length <= 1) { return str }
    let newStr = [...str]
    let x = newStr.pop()
    newStr.join("")
    return x + reverseString(newStr)

}

console.log("Expecting: 'ih'");
console.log("=>", reverseString('hi'));

console.log("");

console.log("Expecting: 'ybabtac'");
console.log("=>", reverseString('catbaby'));


// function reverseString(str) {
//     for (let i=0; i<str.length/2; i++){
//         let a = str[i]
//         let b = str[str.length-i-1]
//         str[i] = b
//         str[str.length-i] = a
//         console.log(str, a, b)

//     }

//     return str
// }
