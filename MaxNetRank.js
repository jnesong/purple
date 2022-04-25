/*

I: n cities, array of roads
O: integer, maximal network rank 
C:
E:
Time:
Space:

 */

function maxNetRank(n, roads) {
    let map = {}
    for (let r = 0; r < roads.length; r++) {
        map[roads[r]] = roads[r]
        if (map[roads[r][0]]) {
            map[roads[r][0]]++
        } else {
            map[roads[r][0]] = 1
        }
        if (map[roads[r][1]]) {
            map[roads[r][1]]++
        } else {
            map[roads[r][1]] = 1
        }
    }

    console.log(map)

    let max = map[0]
    let maxIndex = 0
    let secondMax = map[1]
    let secondMaxIndex = 1
    for (let i = 1; i < n; i++) {

        if (map[i] >= max) {
            secondMax = map[maxIndex]
            secondMaxIndex = maxIndex
            max = map[i]
            maxIndex = i
            console.log("look", map[[maxIndex,secondMaxIndex]], map[[1,3]])
            if ((!map[[maxIndex, secondMaxIndex]] || !map[secondMaxIndex, maxIndex])) {
                max++
            }
        }

        if (map[i]>=secondMax && i!==maxIndex){
            secondMax = map[i]
            secondMaxIndex = i
        }

    }

    console.log(max, maxIndex)
    console.log(secondMax, secondMaxIndex)
    return max + secondMax - 1
};

// console.log(maxNetRank(5, [[0, 1], [0, 3], [1, 2], [1, 3], [2, 3], [2, 4]]))
console.log(maxNetRank(4, [[0,1],[0,3],[1,2],[1,3]]))
// console.log(maxNetRank(8, [[0, 1], [1, 2], [2, 3], [2, 4], [5, 6], [5, 7]]))