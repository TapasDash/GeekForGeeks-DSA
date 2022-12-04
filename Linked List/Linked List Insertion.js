

//User function Template for javascript

/**
 * @param {Node} head
 * @param {number} newData
 * @returns {Node}
*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

class Solution {
    //Function to insert a node at the beginning of the linked list.
    insertAtBegining(head, newData)
    {
        //your code
        const node = new Node(newData)
        if(!head) {
            head = node
            return head
        }
        node.next = head
        head = node
        return head
    }
    //Function to insert a node at the end of the linked list.
    insertAtEnd(head, newData)
    {
        //your code here
         const node = new Node(newData)
         if(!head) {
            head = node
            return head
        }
        let temp = head
        while(temp.next !== null){
            temp = temp.next
        }
        temp.next = node
        return head
    }
}
