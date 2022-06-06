/* 
I: array of sorted, unique nums and target num
O: index of target or target's potential insertion index
C:nums are sorted and unique
E: target is smaller than nums[0] or larger than nums[nums.length-1]
Time Complexity: O(log n)
Space Complexity: O(1)
*/

 function searchInsert (nums, target) {
    
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
};

console.log(searchInsert([1,3,5,7], 6))

//l:0
//r: 3
// check: 1
//nums[check]: 3

//l: 2
//r: 3
// check: 0+2 = 2 
//nums[check]: 5

//l: 3
//r:3
//check: 3
//nums[check]: 7

//l:3
//r:2
// end loop bc l>r
// left = 3