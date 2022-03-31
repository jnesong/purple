function findFirstDuplicate(arr) {
    let map = {}
    for (let i=0 ; i < arr.length ; i++){
      if (map[arr[i]]) {
        return arr[i]
      } else {
        map[arr[i]] = 1
      }
    }
  
    return -1
  
  }

module.exports = findFirstDuplicate