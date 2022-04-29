/*
 The main function is recursive: it divides the list and merges the sorted pieces. 
 It calls a helper function, which might be recursive or iterative. 
 The helper function merges the pieces of the list into a sorted list, and returns it.

Time complexity: It's O(n * log(n)), not O(log(n)).
As you've accurately surmised, the entire input must be iterated through, 
and this must occur O(log(n)) times (the input can only be halved O(log(n)) times). 
n items iterated log(n) times gives O(n log(n)).
It's been proven that no comparison sort can operate faster than this. 
Only sorts that rely on a special property of the input such as radix sort can beat this complexity. 
The constant factors of merge sort are typically not that great though
so algorithms with worse complexity can often take less time.
*/

function helperMerge (leftArr, rightArr){
    const newArr = [];
    let l = 0;
    let r = 0;
    while (l < leftArr.length && r < rightArr.length ){
        if (leftArr[l] < rightArr[r]){
            newArr.push(leftArr[l]);
            l++;
        } else {
            newArr.push(rightArr[r]);
            r++;
        }
    }
    return [...newArr, ...leftArr.slice(l), ...rightArr.slice(r)]
}


function mergeSort(arr) {
    if (arr.length < 2) {return arr};
    let mid = arr.length / 2;
    const left = arr.splice(0, mid);
    return (helperMerge(mergeSort(left), mergeSort(arr)));
}


console.log(mergeSort([2, 4, 6, 9, 1, 3, 2, 8]))
console.log(mergeSort([2]))
console.log(mergeSort([0]))
console.log(mergeSort([4, -12, 9, -3, 1, 0, 22, 47]))
console.log(mergeSort([4, 5, 7]))





