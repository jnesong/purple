/* 
I: array of intervals (two 0+ number arrays) and a new interval
O: array of intervals
C: intervals array contains 0 to 10000 intervals, sorted ascending, 
E: 
Time Complexity: 
Space Complexity: 
*/

function insert(intervals, newInterval) {
    let newArray = []
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][0] <= newInterval[0]) {
            newArray.push(intervals[i])
        }
        if (intervals[i][1] >= newInterval[1]) {
            if (intervals[i][0] <= newInterval[1]) {
                newArray[newArray.length - 1][1] = intervals[i][1]
            } else {
                newArray.push(intervals[i])
            }
        }
    }
    return newArray
}

console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))