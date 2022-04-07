/* 
I: array of numbers
O: sorted array of numbers, ascending
C: use bubble sort method
E: if 0 or 1 number, just return input; duplicates in array
Time Complexity: O(n²)
Space Complexity: O(n²)
*/

function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        let j = i + 1
        if (arr[j] < arr[i]) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            return bubbleSort(arr)
        }
    }

    return arr
}

console.log(bubbleSort([3, 2, 1, 4]));
console.log(bubbleSort([1, 2, 3]));
console.log(bubbleSort([]));
console.log(bubbleSort([0, 4, 5, 9, 5]));

// function bubbleSort(arr) {
//     for(let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i - 1; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }

//     return arr;
// }

