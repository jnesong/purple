class Node {
    constructor(value, left=null, right=null) {
      this.value = value
      this.left = left
      this.right = right
    }
  }
  
  // list = [1, 4, 7]
  function oneToSeven() {
    let a = new Node (1)
    let b = new Node (7)
    let root = new Node (4, a, b)
    return root
  }
  
  // list = [10, 40, 45, 46, 50]
  function tenToFifty() {
    let a = new Node (10, null, null)
    let b = new Node (50, null, null)
    let c = new Node (40, a, null)
    let d = new Node (46, null, b)
    let root = new Node (45, c, d)
    return root
    
  }
  
  // list = [-20, -19, -17, -15, 0, 1, 2, 10]
  function negativeToPositive() {
    let a = new Node (-20, null, null)
    let b = new Node (-17, null, null)
    let c = new Node (-19, a, b)
    let d = new Node (-15, c, null)
    let f = new Node (1, null, null)
    let g = new Node (10, null, null)
    let e = new Node (2, f, g)
    let root = new Node (0, d, e)
    return root
  
  }
  
  // list = [3, 5, 6, 9, 10, 20]
  function threeToTwenty() {
    let a = new Node(3, null, null)
    let b = new Node(6, null, null)
    let c = new Node(5, a, b)
    let f = new Node(20, null, null)
    let e = new Node(10, null, f)
    let root = new Node(9, c, e)
    return root
  
  }

  console.log(negativeToPositive())
  console.log(threeToTwenty())