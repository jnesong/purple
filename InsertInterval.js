/* 
I: array of intervals (two 0+ number arrays) and a new interval
O: array of intervals
C: intervals array contains 0 to 10000 intervals, sorted ascending, 
E: empty intervals, new interval not within range
Time Complexity: O(n)
Space Complexity: O(n)
*/

function insert(intervals, newInterval) {
    if (intervals.length === 0) { return [newInterval] }

    if (newInterval[0]>intervals[intervals.length-1][1]){
        intervals.push(newInterval)
        return intervals
    }

    if (newInterval[1]<intervals[0][0]){
        intervals.unshift(newInterval)
        return intervals
    }

    let newArray = []
    let min = newInterval[0]
    let max = newInterval[1]
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1]<newInterval[0]){
            newArray.push(intervals[i])
        }
        else if (intervals[i][0]>newInterval[1]){
            newArray.push([min,max])
            min = intervals[i][0]
            max = intervals[i][1]
        }
        else {
            min = Math.min(intervals[i][0], min)
            max = Math.max(intervals[i][1], max)
        }
    }
        newArray.push([min,max])
    return newArray
}


module.exports = insert

// console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
// console.log(insert([[1, 3], [6, 9]], [2, 5]))
// console.log(insert([[2, 4], [5, 7],[8,10],[11,13]], [3, 6]))
// console.log(insert([[1, 5]], [2, 3]))
// console.log(insert([], [2,5]))
// console.log(insert([[1, 5]], [5, 7]))
// console.log(insert([[1, 5]], [6, 8]))
// console.log(insert([[1, 5]], [0, 3]))
