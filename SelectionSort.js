/* 
I: array of numbers
O: array sorted least to greatest
C: repeatedly find min and put in correct location
E: negatives
Time Complexity: O(n²)
Space Complexity: O(1)
*/

function selectionSort ( arr ){
    for ( let i=0; i<arr.length; i++){
        for (j = i+1; j<arr.length; j++){
            if (arr[j]< arr[i]){
                let temp = arr[i]
                arr[i] = arr[j]
                arr[j] = temp
                // console.log(arr)
            }
        }
    }
    return arr
}


module.exports = selectionSort;