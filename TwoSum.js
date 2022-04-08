/* 
I: array of integers and a target
O: two indices, of values that add up to target
C: only one solution
E: negative integers, so cannot rule out any numbers larger than target
Time Complexity: O(n²)
Space Complexity: O(1)
*/

// returning indices means you cannot sort it to do a binary search

function twoSum ( arr, k) {
    for (let i=0; i<arr.length; i++){
        for (let j=i+1; j<arr.length; j++){
            if (arr[i]+arr[j] === k) {
                return [i, j]
            }
        }

    }

    return false
}

console.log(twoSum([2,12,19,22,4,8,7,3], 9))
console.log(twoSum([12,19,22,4,-3,7,8], 9))