class Stack {
    constructor(limit=10) {
        this.stack = [];
        this.limit = limit;
        this.size = 0
    }

    // add item to top of stack if not full
    // if full throw error
    push(item) {
        if (this.size === this.limit) {
            throw new Error(["stack is full"])
        } else {
            this.stack.push(item)
            this.size++
        }
    }

    // remove item from top of stack and return it
    pop() {
        this.size--
        return this.stack.pop()
    }

    // return item at top of stack without removing it
    peek() {
        return this.stack[this.size-1]

    }

    // return true if stack is empty, otherwise false
    isEmpty() {
        return this.size === 0

    }

    // return true if stack is full, otherwise false
    isFull() {

        return this.size === this.limit

    }

    // return number of items in stack
    count() {

        return this.size

    }

    // return -1 if item not in stack, otherwise integer representing 
    // how far it is from the top
    search(target) {
        for (let i=0; i<this.stack.length; i++){
            if(this.stack[i] === target ){
                return this.stack.length-i-1
            }
        }
        return -1

    }

    // print contents of stack: do not return the stack itself!
    print() {

        for (let i=0; i<this.stack.length; i++){
            console.log(this.stack[i])
        }
        return true

    }
}

// const ss = new Stack(3)
// console.log(ss.isEmpty())
// ss.push(4)
// console.log(ss.isFull())
// console.log(ss.isEmpty())
// ss.push(5)
// ss.push(102)
// console.log(ss.size)
// // console.log(ss.pop())
// console.log(ss.isFull())
// // console.log(ss.peek())
// console.log(ss.count())

const ss = new Stack()
ss.push(5)
ss.push(17)
ss.push(17)
ss.push(20)
console.log(ss.print())
console.log(ss.search(5))
console.log(ss.search(10))


