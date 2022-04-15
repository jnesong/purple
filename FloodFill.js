/* 
I: 3 integers and a matrix
O: modified image
C: 
E: if new color is the same as current color, at sides of matrix
Time Complexity: O(n)
Space Complexity: O(n)
*/

// function add(x) {
//     console.log(x + 1)
//     console.log(1 + x)
//     console.log(x)
// }
// console.log(add(5))

function floodFill(image, sr, sc, newColor) {

    let x = image[sr][sc]

    //edge case 

    if (newColor === x){
        return image
    }


    if (x!==undefined) {
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

        // pixel below

        if (image[sr+1]!==undefined && image[sr + 1][sc] === x) {
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

// console.log(floodFill([[9, 9, 9], [9, 9, 7], [9, 7, 9]], 1, 1, 8))
console.log(floodFill([[0,0,0],[0,1,1]], 1, 1, 1))

// function floodFill (image, sr, sc, newColor) {
//     const dfs = (x, y, base) => {
//         if( x < 0 || y < 0 || x >= image.length || y >= image[0].length || image[x][y] != base || image[x][y] === newColor  ) return ; // boundary conditions
//         image[x][y] = newColor;
//         dfs(x-1, y, base);
//         dfs(x, y-1, base);
//         dfs(x+1, y, base);
//         dfs(x, y+1, base);
//     }
    
//     dfs(sr, sc, image[sr][sc]);
    
//     return image;
// }
