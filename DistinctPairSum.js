/* 
I: array of numbers, unsorted, target k
O: all consecutive pairs that add up to k
C: pairs must be distinct, aka no pairs contain the same two numbers e.g. [3,7] is the same as [7,3]
E: returns empty array if no pairs add up to k
Time Complexity:
Space Complexity:
*/

// loop through, if values next to each other equal k then sort and add to map keys, so only unique
// return map keys

function distinctPairSum( arr, k) {
    const map = {};
    for (let i=0; i<arr.length; i++) {
        let j = i+1;
        if (arr[i]+arr[j] === k) {
            let distinctPair = [arr[i], arr[j]].sort();
            map[[distinctPair]] = 1;
        };
    };

    return Object.keys(map);
}

console.log(distinctPairSum([0, 1, 1, 2, 0, 1, 1], 2))
console.log(distinctPairSum([3, 4, 2, 1, 5, 2, 8, 2], 10));
