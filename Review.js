const reverseString = (str) => {
    let newStr = []
    for (i = str.length - 1; i >= 0; i--) {
        let x = str[i]
        newStr.push(x)
    }

    return newStr.join("")
}

/*
reverseString() takes in a string and outputs the characters in reverse order
first declare an empty array, then loop through the string backwards, one character at a time
push each character into the new array
return the new array with its characters joined, without extra characters/spacing using .join("")
*/
// console.log(reverseString("good bye"))

const findFirstDuplicate = (arr) => {
    let obj = {}
    for (let i = 0; i < arr.length; i++) {
        if (obj[arr[i]]) {
            return arr[i]
        } else { obj[arr[i]] = 1 }
    }
    return -1
}
/*
findFirstDuplicate() takes in an array and outputs the first repeated element
first declare an empty object to use as a hash map
loop through the array, one element at a time
first check if the element already exist as a key in the map
if it does, it's a dupe, so return it
if not, then add it as a key to the array with a truthy value
so as the loop continues it will have easy access to check for pre-visited elements in the array, via the map/first if(obj[arr[i]])
if there are no dupes, the for loop will end and -1 will be returned to indicate no dupes
*/

// console.log(findFirstDuplicate([4,6,9,1,3,6]))
// console.log(findFirstDuplicate([]))

const fibonacci = (num) => {
    let myFibonacci = [0, 1]
    for (let i = 2; i < num + 1; i++) {
        let x = myFibonacci.length - 1
        let y = myFibonacci.length - 2
        let z = myFibonacci[x] + myFibonacci[y]
        myFibonacci.push(z)
    }

    let w = myFibonacci.length - 1
    return myFibonacci[w]
}

/*
fibonacci() takes in a number and returns that number element in the fibonacci sequence,
a sequence where each element is the sum of the two elements before it
first declare an array with the first two elements in the fibonacci sequence, 0 and 1
then begin constructing the sequence by starting at i=2, since we already have the first two elements, up until the num given
we construct one element at a time by pushing the sum of the last two elements in the fibonacci onto the same fibonacci array
finally, we return the last element in the array which will be the position num
because javascript arrays start at index 0, this would be the array.length-1
I like this method because it clearly/simply also works for edge cases where the input is 0 or 1
this can be refactored to have no variables w, x, y, z also
*/

// console.log(fibonacci(10))
// console.log(fibonacci(0))


const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                console.log(arr)
            }
        }
    }
    return arr
}

/*
selectionSort() is an inefficient sorting algo that uses two nested for loops, so O(n^2) time complexity to compare 
it checks whether each element after the i element is smaller than the i element and if so, swaps it
so on the first nested loop, 2 is swapped with 4 for index 0, only to be swapped with -3 for index 0, then finally with -4 for index 0
since nothing after -4 is smaller than -4, the outer loop is incremented to index 1, which is now 4
and the same process repeats except for index 1 not 0 
and so on
after both loops are complete, the sorted array is returned
*/

// console.log(selectionSort([4, 2, -3, 0, 5, -4]))

const findShortestString = (arr) => {
    return arr.reduce((shortest, b) => shortest.length <= b.length ? shortest : b)
}

const shortestString = (arr) => {
    let shortest = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length < shortest.length) {
            shortest = arr[i]
        }
    }
    return shortest
}

/*
findShortestString() takes in an array of strings and returns the string with the shortest length
.reduce() is an iterative method that starts with the first element of the array assigned to the first parameter, shortest
then it iterates through, comparing via ternary expression,
where the boolean condition is whether the "shortest" length is shorter than the current element
the ternary with .reduce() here will return the shortest as the shortest if it is true
.reduce((previousValue, currentValue) => {function whose return becomes the previous value}, optional initial value)
but return the current element as the shortest if it is false
*/

// console.log(findShortestString(["hi", "bye", "hello", "a"]))
// console.log(findShortestString(["hi", "bye", "hello"]))
// console.log(shortestString(["hi", "bye", "hello", "a"]))
// console.log(shortestString(["hi", "bye", "hello"]))

// const useReduce = (arr) => {
//     let initial = 0
//     return arr.reduce((prev, current) => prev + current, initial)
// }

// console.log(useReduce([4, 5, 10]))

const recursiveSearch = (arr, target) => {
    if (arr.length === 0) { return false }
    if (arr[arr.length - 1] === target) {
        return true
    } else {
        // arr.pop()
        let newArr = arr.slice(0, arr.length - 1)
        return recursiveSearch(newArr, target)
    }
}

/* 
recursiveSearch() takes in an array and a target element and returns true if the target is an element in the array and false if not
first catch the edge case/end the recursion if the array has no elements, in which case it is impossible for the target to be in the array so return false
then check if the last element in the array is the target, if it is, return true
if it is not, remove the last element and call the recursion on the new array (without the last element) and the same target
the recursion will end when the array has no elements left to check/pop off thus if it reaches that point return false because the target was not found by the end
recursive runtime is O(branches^depth) so here, O(1^n)?
 */

// console.log(recursiveSearch([0, 1, 23, 4], 1) === true)
// console.log(recursiveSearch([3, 2, 1], 4) === false)
// console.log(recursiveSearch([0, 1, 23, 4], 2) === false)
// console.log(recursiveSearch([1, 2, 3], 2) === true)
// console.log(recursiveSearch([], 2) === false)

const balancingParentheses = (s) => {
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
            stack.push(s[i])
        }
        else if (s[i] === ")" && stack.pop() !== "(") {
            return false
        }
        else if (s[i] === "]" && stack.pop() !== "[") {
            return false
        }
        else if (s[i] === "}" && stack.pop() !== "{") {
            return false
        }
    }
    return stack.length === 0
}

/*
balancingParentheses() takes a string of only () {} or [] characters and returns whether each opening parentheses is appropriately closed
first declare an empty stack to store left parentheses
loop forward through the string, one character at a time
if it is left/opening parentheses push it on the stack to await to be matched
if not an opening, check the remaining right/closing options
if the right does not match the top of the stack, return false
if it does it will be removed via the stack.pop() and the for loop will continue
at the end of the string, all openings should be closed to be valid, thus the length of the stack would need to be 0
if it is not 0, there are some unclosed openings, therefore return false 
 */

// console.log(balancingParentheses("[[{()}]]{}") === true)
// console.log(balancingParentheses("({[}])")===false)
// console.log(balancingParentheses("[]}()")===false)
// console.log(balancingParentheses("")===true)

const isUnique = (arr) => {
    let map = {}
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) { return false }
        else {
            map[arr[i]] = 1
        }
    }

    return true
}

/*
isUnique() takes in an array or string and returns true if each element or character is unique, returns false if not
first declare an obj to use as a map
then loop forward through the array, one element at time
if the element exist as a key in the map, there is a repeat, therefore return false
if the element does not, save the element as a key for the map to be checked against the remainder of the array
if the loop finishes and no repeats are found, return true, every element in the array is unique
*/

// console.log(isUnique([5, 9, 10, 3, 44, 55, 9]) === false)
// console.log(isUnique([5, 9, 10, 3, 44, 55]) === true)
// console.log(isUnique([]) === true)

const oneAway = (s1, s2) => {
    let edits = 1
    let maxLength = Math.max(s1.length, s2.length)
    let diff = Math.abs(s1.length - s2.length)
    if (diff > edits) { return false }

    for (i = 0, j = 0; i < maxLength || j < maxLength; i++, j++) {
        if (s1[i] !== s2[j]) {
            edits--
            if (edits < 0) { return false }
            else if (s1[i] === s2[j + 1]) { j++ }
            else if (s1[i + 1] === s2[j]) { i++ }
        }
    }
    return true
}
/*
oneAway() takes in two strings and returns true if the strings are only one character different, and false if more than one character different
first declare the number of character differences allowed as edits
then determine the longest length, to know how much to iterate
also determined the difference in length between the two strings because
if the difference in length is greater than the max edits allowed, return false - the strings are more than one character different if they have +1 difference in length
then loop forward through both strings, with i representing s1's index and j representing s2's index
if the characters are not the same, subtract one from edit, as one difference is allowed
check whether edits has already been subtracted from (less than 0), return false if so
otherwise, check to see if the current s1 character matches the next s2 character and vice versa
if so, match up the strings again
this cannot occur more than once, otherwise the strings would be more +1 difference in length, which has already been ruled out
if the loop completes, then one or 0 differences have been found, return true.
 */

// console.log(oneAway("hi", "ihii") === false)
// console.log(oneAway("hi", "") === false)
// console.log(oneAway("hi", "ho") === true)
// console.log(oneAway("hi", "hoo") === false)
// console.log(oneAway("hi", "hi") === true)

const twoSum = (arr, target) => {
    const map = {}
    for (let i = 0; i < arr.length; i++) {
        let t = target - arr[i]
        if (map[t] >= 0) {
            return [map[t], i]
        } else {
            map[arr[i]] = i
        }
    }

    return false
}

/*
twoSum() takes in an array of numbers and a target sum and returns the INDEXES of the two numbers that sum up to the target, or false if none
first declare a map to keep track of previous elements in the array
then loop forward through the array, one element at a time
declare a variable to be the desired number to add to the current number to equal the target sum
see if the map includes this number by checking if the value or map[t] is greater than or equal to 0, 
the value of the map key for the first array element will be 0 because the value is keeping track of the indexes, 0 is a falsy value so
the conditional must specifically check greater than or equal to 0, and not just if (map[t])
if it does exist, then there was a prior element in the array that fit the required number needed to sum up to the target, therefore return the value of that
element save in the map (map[t]), and the current index (i)
if not, save the current element as a key in the map with its index as the value, to keep track of the indexes aforementioned needed
if the loop finishes without finding a twoSum, return false
 */

// console.log(twoSum([2, 12, 7, 19, 22, 8, 4, 3], 9))
// console.log(twoSum([12, 19, 22, 4, -3, 7, 8], 9))

// class LinkedList {
//     constructor() { // no parameters, default empty linked list
//         this.head = null// beginning of linked list
//         this.length = 0
//     }

//     insertAtHead(data) {
//         const newNode = new ListNode(data, this.head) //create new node, give it the value of data we want, make the current head the next node
//         this.head = newNode // new start of list is the new node
//         this.length++ // increase the length of the LinkedList
//     }
// }

// LinkedList.fromValues = function (...values) {
//     const ll = new LinkedList()
//     for (let i = values.length - 1; i >= 0; i--) {
//         ll.insertAtHead(values[i])
//     }
//     return ll
// }

// function ListNode(value = 0, nextIn = null) {
//     this.val = value
//     this.next = nextIn
// }

const mergeTwo = (listAHead, listBHead) => {
    if (!listAHead) return listBHead
    if (!listBHead) return listAHead

    if (listAHead.val < listBHead.val) {
        listAHead.next = mergeTwo(listAHead.next, listBHead)
        return listAHead
    } else {
        listBHead.next = mergeTwo(listAHead, listBHead.next)
        return listBHead
    }

}

/*
mergeTwo() takes in the head of two sorted linked lists and returns the head of the two lists merged in sorted ascending order
Because this function uses recursion, first set the recursion stop
the recursion stop is when the head of either list is null, a falsy value. Then return the rest of the other list, 
because in such case, the rest of the other list would be greater than the last value in the completed list
after setting the stop, the algo can then compare each head value
if list A's head is smaller, then we want list A's head to start the merge list and then want to compare the next value in list A to the same value in list B
to do so, we call mergeTwo on itself with list A's head's next and list B's head and make it's return equal to list A's head's next
in this call, if list A's head is still smaller than list B's, then nothing will change in list A as list A's next will remain, however
if list B's head is smaller, it will be returned for the merged list's most recent smallest node to point to 
and so on until the recursion's stop is reached by a falsy/null, completing the merge 
*/


// const ll = LinkedList.fromValues(0, 9, 16)
// const ls = LinkedList.fromValues(0, 4, 8)

// console.log(mergeTwo(ll.head, ls.head))

const maxProfit = (prices) => {
    let buy = prices[0]
    let profit = 0

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i]
        }
        profit = Math.max(prices[i] - buy, profit)
    }
    return profit
}

/*
maxProfit() takes an array of prices, where the index would be the day to buy and the value is the price, and returns the greatest profit
that can be achieved in one buy and one sell combo
start with declaring the variable buy and setting its value to the first day's price
also declare the variable profit and start at 0, as in if you bought and sold on the same day
then loop forward through the prices array, one day at a time
if there is a lower price to buy, we want to see if buying on that day instead could beat the current max profit
so set buy as that price and as the loop continues, the profit will be updated to that buy's profit if it exceeds the existing max profit
ultimately, the profit is returned, so it is fine if the buy is changed but does not represent the actual profit's buy day/price
at the end, return profit
 */

// console.log(maxProfit([10, 16, 9, 11, 4, 3]))
// console.log(maxProfit([7, 6, 4, 3]))
// console.log(maxProfit([4, 9, 2]))

const validPalindrome = (s) => {
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

/*
validPalindrome() takes in a string and returns true if it is the same forwards as backwards and false if not, it only cares about alphanumeric characters
Using destructuring, set i and j to loop so that i starts at the first letter and goes to the second and j starts at the last letter and goes to the second to last
continue the loop so long as the index moving forward is less than the index moving backwards
ignore the incrementing/decrementing in the for () as we need to manually increment and decrement to skip special characters
the regex pattern /\W|_/ looks for non-alphanumeric characters or underscores and test returns a boolean, true if the pattern is found or false if not
if there are non-alphanumeric characters or underscores, skip over them with i++ or j--
compare any alphanumeric characters
if they are not equal, return false
if they are increment i (i++) and decrement j (j--)
once the loop reaches the end without any false returns (mismatched s[i] or s[j]) then return true, it is a palindrome 
 */

const invertBinaryTree = (root) => {
    if (root) {
        let temp = root.left
        root.left = root.right
        root.right = temp
        invertBinaryTree(root.left)
        invertBinaryTree(root.right)
    }
    return root
}

/*
invertBinaryTree() takes in the root of a binary tree and returns the root of the same binary tree except all branches are inverted
since this uses recursion, first set the recursive stop to be once the argument passed in is null, i.e. the end of the tree's leaves are met
then invert the tree by using a temp to hold the left branch node
change the left branch's node to the right branch's node
then change the right's to temp, the previous left
call invertBinaryTree on itself to complete switching the rest of the roots/nodes
return the root of the inverted tree, which will technically have the same value as the original root, but its branches have been inverted via recursion
 */

const validAnagram = (s, t) => {
    if (s === t) return true
    if (s.length !== t.length) return false

    let map = {}
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++
        } else { map[s[i]] = 1 }
    }

    for (let j = 0; j < t.length; j++) {
        if (!map[t[j]]) {
            return false
        } else { map[t[j]]-- }
    }

    return true
}
/*
validAnagram() takes in two strings and returns true if they are anagrams, words that can be rearranged to make the same word, and false if not
first you can check the edge case in which the two strings are the same strings, because its an easy check and will save the rest of the process
second, check if the strings are the same length
then begin the process of checking characters by creating a map of one the string's characters
to do this, declare an empty object to be the map
loop through the first string, one character at a time
if the character exist in the map already, increment its value by 1 via map[s[i]]++
if it does not, add it to the map as a key and set its value equal to 1, do NOT make it 0 because 0 is falsy
after the first string is mapped, loop through the second string, checking if the second string's characters are in the first string's map
if there is a character in the second string that is not in the map, return false, they are not anagrams
if the character is, then decrement the character's value in the map
because we've already checked that the strings are the same length, we don't have to worry about excess or unchecked characters (any map values less than 0 or more than 0)
finally, if the second string's loop completes without returning false for any unmapped characters, return true, the strings are anagrams
 */

// console.log(validAnagram("a", "a") === true)
// console.log(validAnagram("anagram", "nagaralm") === false)
// console.log(validAnagram("anagram", "nagabrm") === false)
// console.log(validAnagram("anagram", "margaan") === true)
// console.log(validAnagram("pizza", "pizza") === true)

const binarySearch = ( nums, target ) => {
    let left = 0
    let right = nums.length - 1
    let mid = 0

    while (left <= right) {
        mid = Math.floor((right - left) / 2 + left)
        if ( nums[mid] === target ) { return mid }
        else if (nums[mid]<target){
            left = mid+1
        } else { right = mid-1}
    }

    return -1
}

/* 
binarySearch() takes in a sorted array of numbers and a target number and returns the index of the number in the array that matches the target, it uses O(logN) time
start by setting the left and right to be the indexes of the range that will be checked, starting with the full nums array, index 0 to index nums array length-1
then, while the left index (the first in the range) is less than or equal to the right index (the last in the range)
check the middle number of the array to see if it matches the target
by setting the middle index equal to the right subtracted by the left (this gets how many numbers in the new range),
divided by two (this is the middle of the range)
plus the left (this sets the range to the appropriate indexes)
if it does, return that index
if it does not then see if the middle number is less than the target
if so the target is in the greater half of the range, so reset the left to be the number right above the middle number and check that range's middle
if not then the target is in the lower half of the range so reset the right to be the number right below the middle number and check that range's middle
finally, if the left and right indexes meet, then the whole array has been checked
return -1 to represent that the target was not found in the array
*/

// console.log(binarySearch([-1,0,3,5,9,12], 9))
// console.log(binarySearch([9], 9))
// console.log(binarySearch([], 9))
// console.log(binarySearch([12, 19], 9))

const maximumSubArray = ( nums ) => {
    let currentSum = 0;
    let max = nums[0];    

    for (let i=0; i<nums.length; i++){
        currentSum = Math.max(nums[i], currentSum+=nums[i]);
        max = Math.max(max, currentSum);

    };

    return max;

}

// console.log(maximumSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

/* 
maximumSubArray() takes an array of nums and returns the maximum sum possible by adding a contiguous subArray.
First declare currentSum to start at 0 and declare max as the value of the first number in the array. 
Then loop forward through the array nums, one number at a time.
At each number, you can either restart the sum or add the current number to the sum. 
Check which is largest and set the currentSum to it.
Then check if that currentSum is greater than the current max. If it is, keep track of it by setting max to it. If not, the max will stay the same. 
At the end of the loop, return the max, which would be the largest sum. 
*/

// class Node {
//     constructor(value, left = null, right = null) {
//         this.value = value;
//         this.left = left;
//         this.right = right;
//     }
// }


const levelOrderTraversal = (root) => {
    if (root===null) return [];

    let queue = [root];
    let result =[root.value];

    addTo(queue, result, root);

    return result;
};

const addTo = (queue, result, node) => {
    if (node.left) {
        queue.push(node.left);
        result.push(node.left.value);
    };

    if (node.right) {
        queue.push(node.right);
        result.push(node.right.value);
    }

    queue.shift();

    if (queue.length !== 0 ) {
        addTo(queue,result, queue[0]);
    };
};

/*
levelOrderTraversal() takes the root of a binary tree and prints all the values of the tree's nodes in level-order/breadth-first-search in a flattened array. 
First check the edge case in which the tree is empty, aka the root is null, and return an empty array if so.
Then declare two arrays. One is the queue, to keep track of order. The other is the result, to keep track of the values to be printed in an array.
The queue should start with the root node, as is given. The result should start with that node's, the root's, value.
We then create a function that will take these two arrays, the queue and result, and add to them. 
The function is called addTo() and also takes a "root" or current node to work off.
addTo() checks whether its given/argument node has a left node. If it does, then add that node to the queue and add its value to the result. 
And does the same check and add for the right node.
The rest of addTo() highlights the importance of the queue, because we can now remove that node from the queue, having added its child's values to result,
and now, if there are any nodes left in the queue, call addTo() on the first node in the queue to recursively re-check and add the next level-order nodes. 
at the stop of addTo(), when the last node has been queue.shift() off the queue and the queue is empty,
the original levelOrderTraversal function will return the result- the array of values, listed from the order of the queue. 
 */


/*
Objects/arrays are pass by reference while primitive data types (boolean, numbers, strings, null, undefined) 
are pass by value. Pass by reference allows us to pass objects as arguments 
into a recursion without needing to return the recursion. Because it pulls from the same reference, 
the object or array will be changed outside of that function???s scope. 
But is this pass by reference or point to memory ID, what is the difference?
*/

// const alphabet = {a:1, b:2}
// const c = 3

// const test = ( object, number) => {
//     object.a++
//     number++
//     return number
// }

// test(alphabet, c)
// console.log(alphabet)
// console.log(c)
// console.log(test(alphabet, c))


class myQueue {
    constructor (limit) {
        this.stackA = []
        this.stackB = []
        this.size = 0
        this.limit = limit
    }

    queue() {
        for (let i=this.stackA.length-1; i>=0; i--){
            this.stackB.push(this.stackA[i])
        }
        return this.stackB
    }

    push(element) {
        if (this.size<this.limit){
            this.stackA.push(element)
            this.size++
        }
        return element
    }

    pop(){
        this.stackB = []
        for (let i=this.stackA.length-1; i>=0; i--){
            this.stackB.push(this.stackA[i])
        }
        let front = this.stackB.pop()
        this.stackA=[]
        for (let i=this.stackB.length-1; i>=0; i--) {
            this.stackA.push(this.stackB[i])
        }
        this.stackB=[]
        this.size--
        return front
    }

    peek(){
        return this.stackA[0] // Returns the element at the front of the queue.
    }

    empty(){
        if(this.size<1) return true
        else return false
    }

    full(){
        if (this.size===this.limit) return true
        else return false
    }
}
/*
myQueue() constructs a queue (FIFO), using to 2 stacks, with the methods push, pop, peek (FO), empty, and full. 
It only uses standard stack operations i.e. push, peek (FO), pop (LIFO), size, and empty.
*/


const isBalanced = (root) => {
    if (root === null) return true;
    return getHeight(root) !== -1;
}

function getHeight (node) {
    if (node === null ) return 0;

    let left = getHeight(node.left);
    let right = getHeight(node.right);

    if (left===-1 || right === -1 || Math.abs(left-right)>1) {
        return -1
    }

    return Math.max(left, right)+1
}
/* 
isBalanced() takes the root of a binary tree and returns whether the tree is balanced.
A binary tree is balanced if the left and right subtrees of every node differ in height by no more than 1.
First check the edge case if the root is null, the tree is balanced, and return true.
Then return whether the helper function getHeight()'s return is not equal to -1. 
getHeight() takes any node and first checks if the node is null, in which case it is a leaf node.
The height count can then start at 0 by returning null for the leaf node.
Next it sets the variable left equal to the height or getHeight() return of the given node's left node.
Same for the right.
Then it uses these variables to either carry up -1, from a previously unbalanced level, by returning -1 if 
left or right is equal to -1. Or returning -1 if the difference between the left and right branches/heights is
greater than 1. 
If none of those are true, the height is created by taking the max height of the left or right branch and adding 1 to it. 
*/

const hasCycle = (head) => {
    let map = new Map();
    let current = head;
    while (current !== null) {
        map.set(current, 1)
        if (map.has(current.next)) return true
        else current = current.next
    };
    return false;
};

/* 
hasCycle() takes the head of a linked list and determines if there is a cycle within the list- where some node in the list can be reached again
by following the next pointer.
It starts by declaring a map to keep track of previously visited nodes. 
Then declares current, to guide looping through the linked list, starting with the head node.
While current is not null/the end of the linked list, add the current node into the map with a value of 1. 
Then check if the map has the current node's next value, which would mean the current node is looping back to a node
that was already added to the map. If it is, return true. Otherwise, move onto the next node by setting current to the current node's next. 
Finally, if the loop completes and true is not returned, return false - the linked list does not cycle. 
*/

const firstBadVersion = (n) => {
    let left = 0;
    let right = n;
    let check = 0;

    while(left<=right){
        check = Math.floor( ((right-left)/2)+left );
        if(isBadVersion(check)===true && isBadVersion(check-1)===false) {
            return check;
        } else if(isBadVersion(check) && isBadVersion(check-1)) {
            right = check-1;
        } else {
            left = check+1;
        }
    } 
}

/*
firstBadVersion() takes the total number of versions and finds the first bad version that causes all following versions to be bad 
using the API bool isBadVersion(version) which returns whether the argument version is bad.
*/

const searchInsert = () => {
    let left = 0;
    let right = nums.length-1;
    let check;
    
    while (left <= right) {
        check = Math.floor( (right-left)/2 ) + left;
        if (nums[check] === target) {
            return check;
        } else if (nums[check]>target) {
            right = check-1;
        } else { 
            left = check+1;
        }
    };
    return left;
}

/* 
searchInsert() takes an array of sorted integers and a target number. It returns the index of the target number, if found in the array.
Otherwise, it returns the index where the target number would be inserted if inserted. 
*/

function mergeSort(arr) {
    if (arr.length < 2) {return arr};
    let mid = arr.length / 2;
    const left = arr.splice(0, mid);
    return (helperMerge(mergeSort(left), mergeSort(arr)));
}

function helperMerge (leftArr, rightArr){
    const newArr = [];
    let l = 0;
    let r = 0;
    while (l < leftArr.length && r < rightArr.length ){
        if (leftArr[l] < rightArr[r]){
            newArr.push(leftArr[l]);
            l++;
        } else {
            newArr.push(rightArr[r]);
            r++;
        }
    }
    return [...newArr, ...leftArr.slice(l), ...rightArr.slice(r)]
}


/*
mergeSort() takes in an array of nums and sorts its values in ascending order
 */