/* 
I: array of integers
O: largest sum
C: must be contiguous subarray, at least one number, numbers between -10000 and 10000
array is between one character and 10000 character longs. 
E: 
Time Complexity: 
Space Complexity: 
*/

function maxSubArray(nums) {
    let max = nums[0]
    let leftestIndex = 0

    for (let i = 1; i < nums.length; i++) {
        let addRight = max+nums[i]
        let subtractLeft = max-nums[leftestIndex]
        if (addRight > max){
            max = addRight
        } 
        if (subtractLeft > max){
            max = subtractLeft
            leftestIndex++
        }
        console.log(max)
    }
    return max

}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))