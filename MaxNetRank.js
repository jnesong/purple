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
        
        let max = map[0]
        let maxIndex = 0
        let secondMost = map[1]
        let secondMaxIndex= 1
        
        for (let i=0;i<n;i++){
            if (map[i]>max){
                secondMost = max
                secondMaxIndex = maxIndex
                max = map[i]
                maxIndex = i
            }
        }
        
        if (map[[maxIndex,secondMostIndex] || map[[secondMostIndex, maxIndex]]){
                return max+secondMost-1
            }
        else { return max+secondMost}   

    
};