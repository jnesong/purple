//I: array of numbers
//O: array sorted least ot greatest
//C: repeatedly find min and put in correct location
//E: negatives

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

console.log(selectionSort([10, -1, 4, 9, 3, 0, -8]) === [-8, -1, 0, 3, 4, 9, 10])
console.log(selectionSort([10, -1, 4, 9, 3, 0, -8]))

console.log([10])

module.exports = selectionSort;