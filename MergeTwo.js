/* 
I: head nodes of two singly linked lists
O: head of the merged two linked lists spliced together and sorted
C: linked lists length is between 0 and 50, the value is between -100 and 100, the lists are already sorted in increasing order
E: empty linked lists
Time Complexity: 
Space Complexity: 
*/

class LinkedList {
    constructor() { // no parameters, default empty linked list
        this.head = null// beginning of linked list
        this.length = 0
    }

    insertAtHead(data) {
        const newNode = new ListNode(data, this.head) //create new node, give it the value of data we want, make the current head the next node
        this.head = newNode // new start of list is the new node
        this.length++ // increase the length of the LinkedList
    }
}

LinkedList.fromValues = function (...values) {
    const ll = new LinkedList()
    for (let i = values.length - 1; i >= 0; i--) {
        ll.insertAtHead(values[i])
    }
    return ll
}

function ListNode(value = 0, nextIn = null) {
    this.val = value
    this.next = nextIn
}


function mergeTwo(listAHead, listBHead) {
    //ends recursive loop, when end of linked list/next===null hit then
    // the rest of the longer list will be pointed to by the most recent current node comparison
    if (!listAHead) return listBHead;
    if (!listBHead) return listAHead;

    //if current value of list A's head is smaller, set it as the new head, and increment along list A
    //so the next comparison is between the next node in list A and the same node in list B

    if (listAHead.val < listBHead.val) {
        listAHead.next = mergeTwo(listAHead.next, listBHead);
        return listAHead;
    }

    //otherwise if list B's head is smaller or equal to list A's head
    // sett list B's head as the new head and increment along list B
    // so the next comparison is between the same node in list A but the next node in list B

    else {
        listBHead.next = mergeTwo(listAHead, listBHead.next);
        return listBHead;
    }

    // the return of mergeTwo is the head of the merged list, while the recursive mergeTwo sorts the rest of the merge

}


const ll = LinkedList.fromValues(0, 2, 9, 16)
const ls = LinkedList.fromValues(0, 4, 8)

console.log(mergeTwo(ll.head, ls.head))


// function mergeTwo(list1, list2) {

//     let currentA = list1
//     let currentB = list2

//     if (currentA.next && currentB.next) {
//         if (currentA.val <= currentB.val) {
//             let temp = currentA
//             currentA = currentA.next
//             temp.next = currentB
//         } else {
//             let temp = currentB
//             currentB = currentB.next
//             temp.next = currentA
//         }

//         mergeTwo(currentA, currentB)
//     }

// }

