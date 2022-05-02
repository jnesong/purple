function binarySearch(arr, target) {
    let left = 0
    let right = arr.length - 1
    let mid = 0

    while (left <= right) {
        mid = Math.floor(((right - left) / 2) + left)
        if (arr[mid] === target) { return mid }
        else if (arr[mid] < target) { left = mid + 1 }
        else { right = mid - 1 }
    }

    return -1

}


console.log(binarySearch([10, 12, 14, 19, 33, 44, 52], 33))