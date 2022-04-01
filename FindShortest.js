//I: array of strings
//O: shortest string, or first appearing shortest string
//C: array will have a minimum length of one
//E: 


//Time complexity:
//Space complexity:

function findShortest(arr){
    let shortest = arr[0]
    for (let i=1; i<arr.length; i++){
        if (arr[i].length < shortest.length){
            shortest = arr[i]
        }
    }
    return shortest
}


//Time complexity: O(n)
//Space complexity: O(1)

function findShortest(arr) {
    return arr.reduce((shortest, b) =>  b.length < shortest.length ? b : shortest) 
}

console.log(findShortest(['aaa', 'a', 'bb', 'ccc']) === 'a')
console.log(findShortest(['hi', 'hello', 'hey', 'my']) === 'hi')
console.log(findShortest(['jacket', 'socks', 'hat', 'scarf', 'sweater']) === 'hat')

