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
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode(0, null);
        let res = dummy;
        let carry = 0;
        while(l1 && l2){
            let sum = l1.val + l2.val + carry;
            if(sum > 9){
                carry = 1;
                sum %= 10;
            } else {
                carry = 0;
            }
            let sumNode = new ListNode(sum, null);
            dummy.next = sumNode;
            dummy = dummy.next;
            l1 = l1.next;
            l2 = l2.next;
        }
        while(l1){
            let sum = l1.val + carry;
            if(sum > 9){
                carry = 1;
                sum %= 10;
            } else {
                carry = 0;
            }
            let sumNode = new ListNode(sum, null);
            dummy.next = sumNode;
            dummy = dummy.next;
            l1 = l1.next;
        }
        while(l2){
            let sum = l2.val + carry;
            if(sum > 9){
                carry = 1;
                sum %= 10;
            } else {
                carry = 0;
            }
            let sumNode = new ListNode(sum, null);
            dummy.next = sumNode;
            dummy = dummy.next;
            l2 = l2.next;
        }
        if(carry > 0){
            let sumNode = new ListNode(carry, null);
            dummy.next = sumNode;
        }
        return res.next;
    }
}
