/* 
I: head nodes of two singly linked lists
O: head of the merged two linked lists spliced together and sorted
C: linked lists length is between 0 and 50, the value is between -100 and 100, the lists are already sorted in increasing order
E: empty linked lists
Time Complexity: 
Space Complexity: 
*/

function ListNode(value = 0, nextIn = null) {
    this.val = value
    this.next = nextIn
}

const pretendLinkedA = [
    { value: 1, next: 2 },
    { value: 2, next: 4 },
    { value: 4, next: 9 },
    { value: 9, next: null }
]

const pretendLinkedB = [
    { value: 1, next: 3 },
    { value: 3, next: 7 },
    { value: 7, next: 12 },
    { value: 12, next: null }
]

function mergeTwo(listA, listB) {

    if (listA.length !== 0 && listB.length !== 0) {

        let currentA = listA[0]
        let currentB = listB[0]

        if (currentA <= currentB) {
            let x = listA.shift()
            const result = new ListNode(x, mergeTwo(listA, listB))
            console.log(result)
        } else {
            let y = listB.shift()
            const result = new ListNode(y, mergeTwo(listA, listB))
            console.log(result)
        }

        if (currentA <= currentB) {
            return currentA
        } else { return currentB }

    }
   
    return null

}

console.log(mergeTwo(pretendLinkedA, pretendLinkedB))