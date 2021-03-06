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
18. levelOrderTraversal() takes the root of a binary tree and prints all the values of the tree's nodes in level-order/breadth-first-search in a flattened array. 
19. myQueue() constructs a queue (FIFO), using to 2 stacks, with the methods push, pop, peek (FO), empty, and full. 
20. isBalanced() takes the root of a binary tree and returns whether the tree is balanced. A binary tree is balanced if the left and right subtrees of every node differ in height by no more than 1.
21. hasCycle() takes the head of a linked list and determines if there is a cycle within the list- where some node in the list can be reached again by following the next pointer.
22. firstBadVersion() takes the total number of versions and finds the first bad version that causes all following versions to be bad using the API bool isBadVersion(version) which returns whether the argument version is bad.
23. searchInsert() takes an array of sorted integers and a target number. It returns the index of the target number, if found in the array. Otherwise, it returns the index where the target number would be inserted if inserted.
24. mergeSort() takes in an array of nums and sorts its values in ascending order


note to self: don't forget semicolons please
*/

// oneAway() takes in two strings and returns true if the strings are only one character different, and false if more than one character different

const oneAway = (stringA, stringB) => {
    let edit = 1
    let maxLength = Math.max(stringA.length, stringB.length)
    let diff = Math.abs(stringA.length-stringB.length)
    if (diff>edit) {return false}
    
    for (i=0, j=0; i<maxLength, j<maxLength; i++, j++){
        if (stringA[i]!==stringB[j]){
            edit--
            if (edit<0) {return false}
            else if (stringA[i]===stringB[j+1]) {j++}
            else if (stringA[i+1]===stringB[j]) {i++}
        }
    }

    return true
}
//forgot to check distance in string length
//skip in the string whose next letter matches the other string's current letter to match them up

// twoSum() takes in an array of numbers and a target sum and returns the INDEXES of the two numbers that sum up to the target, or false if none

const twoSum = ( nums, target ) => {
    const map = {}
    for (i=0; i<nums.length; i++) {
        let t = target-nums[i]
        if (map[t]>=0) {return [i, map[t]]}
        else {
            map[nums[i]] = i 
        }
    }

    return "no two sum"

}
//forgot greater than or equal to 0 to account of falsey 0 index 

//mergeSort() takes in an array of nums and sorts its values in ascending order

// 13. validPalindrome() takes in a string and returns true if it is the same forwards as backwards and false if not, it only cares about alphanumeric characters

// 14. validAnagram() takes in two strings and returns true if they are anagrams, words that can be rearranged to make the same word, and false if not
