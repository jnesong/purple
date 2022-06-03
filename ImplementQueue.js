 MyQueue = function() {
    this.stackA = [];
    this.stackB = [];
    
};

// class MyQueue {
//     constructor(limit) {
//         this.stack1 = []
//         this.stack2 = []
//         this.size = 0
//         this.limit = limit
//     }

//     queue (){
//         return this.stack2
//     }
//}

MyQueue.prototype.push = function(x) {
    return this.stackA.push(x);
};

// pushQ(element) {
//     if (this.size < this.limit) {
//         this.stack1.push(element)
//         this.size++
//     }
//     return element
// }


MyQueue.prototype.pop = function() {
    let front;
    for (let i=this.stackA.length-1; i>=0; i--) {
        this.stackB.push(this.stackA[i])
    }
    this.stackA=[];
    front = this.stackB.pop();
    for (let i=this.stackB.length-1; i>=0; i--) {
        this.stackA.push(this.stackB[i]);
    };
    this.stackB=[];
    
    return front;
};

// popQ() {
//     for (let i = this.stack1.length - 1; i >= 0; i--) {
//         this.stack2.push(this.stack1[i])
//     }
//     let x = this.stack2.pop()
//     this.stack1 = []
//     for (let i = this.stack2.length - 1; i >= 0; i--) {
//         this.stack1.push(this.stack2[i])
//     }
//     this.stack2 = []
//     this.size--
//     return x
// }

MyQueue.prototype.peek = function() {
    return this.stackA[0]
};

// peekQ() {
//     return this.stack1[0]
// }

MyQueue.prototype.empty = function() {
    if(this.stackA.length<1) return true
    else return false
};


// emptyQ() {
//     if (this.size < 1) {
//         return true
//     } else { return false }
// }

// fullQ() {
//     if (this.size === this.limit) {
//         return true
//     } else { return false }
// }