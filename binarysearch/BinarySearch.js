/* 
I: array of sorted, ascending, integers (nums) and target
O: index of target or -1
C: must be O(log n), all integers in nums are unique, length of nums is between 1 and 1000
E: target not in nums, return -1
Time Complexity: 
Space Complexity: 
*/

function binarySearch ( nums, target ) {
    let left = 0;
    let right = nums.length-1;
    let check = 0;

    while (left<=right){
        check = Math.floor(((right-left)/2)+left);
        if (nums[check] === target) return check;
        else if (nums[check] < target) {
            left = check+1;
        } else {
            right = check-1;
        }
        
    } return -1

}

console.log(binarySearch([-1,0,3,5,9,12], 9))