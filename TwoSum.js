/* 
I: array of integers and a target
O: two indices, of values that add up to target
C: only one solution
E: negative integers, so cannot rule out any numbers larger than target
Time Complexity: O(n)
Space Complexity: O(n)
*/

// returning indices means you cannot sort it to do a binary search

function twoSum(arr, target) {

    const map = {}
    for (let i = 0; i < arr.length; i++) {
        let t = target - arr[i]
        if (map[t] >= 0) {
            return [map[t], i]
        } else {
            map[arr[i]] = i
        }
    }

}

console.log(twoSum([2, 12, 7, 19, 22, 8, 4, 3], 9))
console.log(twoSum([12, 19, 22, 4, -3, 7, 8], 9))


/*
Brute force
Time Complexity: O(n²)
Space Complexity: O(1)

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
*/

