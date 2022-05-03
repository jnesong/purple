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
// console.log(reverseString("good bye"))

const findFirstDuplicate = ( arr ) => {
    let obj = {}
    for (let i=0; i<arr.length; i++){
        if(obj[arr[i]]) {
            return arr[i]
        } else { obj[arr[i]] = 1}
    }
    return -1
}
/*
findFirstDuplicate() takes in an array and outputs the first repeated element
first declare an empty object to use as a hash map
loop through the array, one element at a time
first check if the element already exist as a key in the map
if it does, its a dupe, so return it
if not, then add it as a key to the array with a truthy value
so as the loop continues it will have easy access to check for pre-visited elements in the array, via the map/first if(obj[arr[i]])
if there are no dupes, the for loop will end and -1 will be returned to indicate no dupes
*/

// console.log(findFirstDuplicate([4,6,9,1,3,6]))
// console.log(findFirstDuplicate([]))

const fibonacci = (num) => {
    let myFibonacci = [0, 1]
    for (let i=2; i<num+1; i++) {
        let x = myFibonacci.length-1
        let y = myFibonacci.length-2
        let z = myFibonacci[x] + myFibonacci[y]
        myFibonacci.push(z)
    }

    let w = myFibonacci.length-1
    return myFibonacci[w]
}

/*
fibonacci() takes in a number and returns that number element in the fibonacci sequence, a sequence where each element is the sum of the two elements before it
first declare an array with the first two elements in the fibonacci sequence, 0 and 1
then begin constructing the sequence by starting at i=2, since we already have the first two elements, up until the num given
we construct one element at a time by pushing the sum of the last two elements in the fibonacci onto the same fibonacci array
finally, we return the last element in the array which will be the position num
because javascript arrays start at index 0, this would be the array.length-1
I like this method because it clearly/simply also works for edge cases where the input is 0 or 1
*/

// console.log(fibonacci(10))
// console.log(fibonacci(0))


