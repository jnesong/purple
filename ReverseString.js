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

  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));

  console.log("");

  console.log("Expecting: empty");
  console.log("=>", reverseString(""));

  console.log("");

  console.log("Expecting: a");
  console.log("=>", reverseString("a"));