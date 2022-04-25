/*

I: n cities, array of roads
O: integer, maximal network rank 
C:
E:
Time:
Space:

 */

function maxNetRank (n, roads) {
    let map ={}
    for (let r=0; r<roads.length; r++){
        map[roads[r]] = roads[r]
        if(map[roads[r][0]]) {
            map[roads[r][0]]++
        } else { 
            map[roads[r][0]]=1
        }
        if(map[roads[r][1]]) {
            map[roads[r][1]]++
        } else { 
            map[roads[r][1]]=1
        }
    }

    console.log(map)
        
        let max = map[0]
        let maxIndex = 0
        let secondMax = map[1]
        let secondMaxIndex= 1
        for (let i=0;i<n;i++){

            if (map[i]>max){
                secondMax = max
                secondMaxIndex = maxIndex
                max = map[i]
                maxIndex = i
            }
            
        }
    

        if (map[[maxIndex, secondMaxIndex]] || map[[secondMaxIndex, maxIndex]]){
            return max+secondMax-1
        } else { return max+secondMax}   

    
};

console.log(maxNetRank(5, [[0,1],[0,3],[1,2],[1,3],[2,3],[2,4]]))