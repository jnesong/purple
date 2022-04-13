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


function mergeTwo(listAHead, listBHead) {

    let currentA = listAHead
    let currentB = listBHead

    if (currentA.next && currentB.next) {
        if (currentA <= currentB) {
            let temp = currentA
            currentA = currentA.next
            temp.next = currentB
        } else {
            let temp = currentB
            currentB = currentB.next
            temp.next = currentA
        }

        mergeTwo(currentA, currentB)
    }

}

function mergeTwo(list1, list2) {

    let currentA = list1
    let currentB = list2

    if (currentA.next && currentB.next) {
        if (currentA.val <= currentB.val) {
            let temp = currentA
            currentA = currentA.next
            temp.next = currentB
        } else {
            let temp = currentB
            currentB = currentB.next
            temp.next = currentA
        }

        mergeTwo(currentA, currentB)
    }

}

