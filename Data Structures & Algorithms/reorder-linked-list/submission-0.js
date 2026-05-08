/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let temp = head;
        let firstHalf = head;
        let secondHalf = head;
        let temp1 = head;
        let len = 0;
        let i = 0;
        let res = firstHalf;
        while(temp){
            len++;
            temp = temp.next;
        }
        while(i++ < len/2 - 1){
            temp1 = temp1.next;
        }
        secondHalf = temp1.next;
        temp1.next = null;
        secondHalf = this.reverse(secondHalf);
        while(firstHalf && secondHalf){
            let firstHalfNextNode = firstHalf.next;
            let secondHalfNextNode = secondHalf.next;
            firstHalf.next = secondHalf;
            secondHalf.next = firstHalfNextNode;
            firstHalf = firstHalfNextNode;
            secondHalf = secondHalfNextNode;
        }
        return res;
    }
    reverse(node){
        let prev = null;
        let curr = node;
        while(curr){
            let nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        return prev;
    }
}
