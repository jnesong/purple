/* 
I: array of intervals (two 0+ number arrays) and a new interval
O: array of intervals
C: intervals array contains 0 to 10000 intervals, sorted ascending, 
E: 
Time Complexity: 
Space Complexity: 
*/

// function insert(intervals, newInterval) {
//     if (intervals.length === 0) { return [newInterval] }
//     let newArray = []
//     for (let i = 0; i < intervals.length; i++) {
//         if (intervals[i][1] < newInterval[0]) {
//             newArray.push(intervals[i])
//             if (!intervals[i + 1] || intervals[i + 1][0] > newInterval[1]) {
//                 newArray.push(newInterval)
//             }

//         } else if (intervals[i][0] < newInterval[0]) {
//             newArray.push(intervals[i])
//             newArray[newArray.length - 1][0] = Math.min(intervals[i][0], newInterval[0])
//         }
//         else if (intervals[i][0] <= newInterval[1]) {
//             newArray.push(intervals[i])
//             newArray[newArray.length - 1][0] = Math.min(intervals[i][0], newInterval[0])
//             if (intervals[i][1] > newInterval[1]) {
//                 return newArray
//             }
//         }
//         else if (intervals[i][0] <= newInterval[1]) {
//             let x = Math.max(intervals[i][1], newInterval[1])
//             console.log(x)
//             console.log(newArray[newArray.length - 1])
//         }
//     }
//     return newArray
// }

function insert(intervals, newInterval) {
    if (intervals.length === 0) { return [newInterval] }
    let newArray = []
    let min = newInterval[0]
    let max = newInterval[1]
    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i][1]<newInterval[0]){
            newArray.push(intervals[i])
        }
        else if (intervals[i][0]>newInterval[1]){
            newArray.push([min,max])
            newArray.push(intervals[i])
        }
        else {
            min = Math.min(intervals[i][0], min)
            max = Math.max(intervals[i][1], max)
        }
    }
    return newArray

}


module.exports = insert

console.log(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8]))
console.log("[[1,2], [3,10], [12,16]]")
// console.log(insert([[1, 3], [6, 9]], [2, 5]))
// console.log(insert([], [2, 5]))
// console.log(insert([[1, 5]], [2, 3]))
// console.log(insert([[1, 5]], [5, 7]))
// console.log(insert([[1, 5]], [6, 8]))
// console.log(insert([[1, 5]], [0, 3]))