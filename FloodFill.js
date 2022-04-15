/* 
I: 3 integers and a matrix
O: modified image
C: 
E: 
Time Complexity: 
Space Complexity: 
*/

// function add(x) {
//     console.log(x + 1)
//     console.log(1 + x)
//     console.log(x)
// }
// console.log(add(5))

function floodFill(image, sr, sc, newColor) {


    let x = image[sr][sc]


    if (x) {
        // checking and changing pixel above
        if (image[sr - 1]!==undefined && image[sr - 1][sc] === x) {
            image[sr][sc] = newColor
            floodFill(image, sr - 1, sc, newColor)
        }

        //checking and changing pixel to the left
        if (image[sr][sc-1]!==undefined && image[sr][sc - 1] === x) {
            image[sr][sc] = newColor
            floodFill(image, sr, sc - 1, newColor)
        }

        // pixel to below

        if (image[sr+1]!==undefined && image[sr + 1][sc] === x) {
            console.log(image[sr][sc])
            console.log(image[sr+1][sc])
            image[sr][sc] = newColor
            floodFill(image, sr + 1, sc, newColor)
        }

        // pixel to the right

        if (image[sr][sc+1]!==undefined && image[sr][sc + 1] === x) {
            image[sr][sc] = newColor
            floodFill(image, sr, sc + 1, newColor)
        }

        image[sr][sc] = newColor

    }

    return image

}

console.log(floodFill([[9, 9, 9], [9, 9, 7], [9, 7, 9]], 1, 1, 8))

