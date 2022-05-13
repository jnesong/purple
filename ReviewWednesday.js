/* 
1. reverseString() takes in a string and outputs the characters in reverse order.
2. findFirstDuplicate() takes in an array and outputs the first repeated element
3. fibonacci() takes in a number and returns that number element in the fibonacci sequence, a sequence where each element is the sum of the two elements before it
4.selectionSort() is an inefficient sorting algo that uses two nested for loops, so O(n^2) time complexity to compare 
5.findShortestString() takes in an array of strings and returns the string with the shortest length
6. recursiveSearch() takes in an array and a target element and calls itself to return true if the target is an element in the array and false if not
7. balancingParentheses() takes a string of only () {} or [] characters and returns whether it each opening is appropriately closed
8. isUnique() takes in an array or string and returns true if each element or character is unique, returns false if nots
9. oneAway() takes in two strings and returns true if the strings are only one character different, and false if more than one character different
10. twoSum() takes in an array of numbers and a target sum and returns the INDEXES of the two numbers that sum up to the target, or false if none
11. mergeTwo() takes in the head of two sorted linked lists and returns the head of the two lists merged in sorted ascending order
12. maxProfit() takes an array of prices, where the index would be the day to buy and the value is the price, and returns the greatest profit that can be achieved in one buy and one sell combo
13. validPalindrome() takes in a string and returns true if it is the same forwards as backwards and false if not, it only cares about alphanumeric characters
14. validAnagram() takes in two strings and returns true if they are anagrams, words that can be rearranged to make the same word, and false if not
15. invertBinaryTree() takes in the root of a binary tree and returns the root of the same binary tree except all branches are inverted
16. binarySearch() takes in an array of numbers and a target number and returns the index of the number in the array that matches the target, it uses O(logN) time
17. maximumSubArray() takes an array of nums and returns the maximum sum possible by adding a contiguous subArray.




note to self: don't forget semicolons please
*/

// 8. isUnique() takes in an array or string and returns true if each element or character is unique, returns false if not
//I: an array
//O: true or false

const isUnique = (arr) => {
    let map = {};
    for (let i = 0; i < arr.length; i++) {
        if (map[arr[i]]) {
            return false;
        } else {
            map[arr[i]] = 1;
        }
    }
    return true;
};

// 9. oneAway() takes in two strings and returns true if the strings are only one character or less different, and false if more than one character different
//I: two strings
//O: true or false

const oneAway = (s1, s2) => {
}

// console.log(oneAway("hi", "ihii") === false)
// console.log(oneAway("hi", "") === false)
// console.log(oneAway("hi", "ho") === true)
// console.log(oneAway("hi", "hoo") === false)
// console.log(oneAway("hi", "hi") === true)

// 10. twoSum() takes in an array of numbers and a target sum and returns the INDEXES of the two numbers that sum up to the target, or false if none