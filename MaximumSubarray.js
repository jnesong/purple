/* 
I: array of integers
O: largest sum
C: must be contiguous subarray, at least one number, numbers between -10000 and 10000
array is between one character and 10000 character longs. 
E: 
Time Complexity: O(n)
Space Complexity: O(n)
*/

function maxSubArray(nums) {
  let currentSum = 0
  let max = nums[0]

  for (let i = 0; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum += nums[i])
    max = Math.max(max, currentSum)
  }
  return max

}

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))