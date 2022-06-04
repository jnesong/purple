/* 
I: head of linked list
O: boolean
C: max ten thousand nodes
E: repeating values, tail cycles to head
Time Complexity: O(n)
Space Complexity: O(n)
*/

const hasCycle = (head) => {
    let map = new Map();
    let current = head;
    while (current !== null) {
        map.set(current, 1)
        if (map.has(current.next)) return true
        else current = current.next
    };
    return false;
};