
function reverseString (str){
    let old = str.split("")
    // console.log(old)
    let newStr = []
    for (let i= old.length-1; i >= 0; i--){
      newStr.push(old[i])
      // console.log(newStr)
    }
    return newStr.join("")
  
  }


  module.exports = reverseString