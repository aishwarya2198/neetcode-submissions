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
        while(l1 || l2 || carry){
            const v1 = l1 ? l1.val : 0;
            const v2 = l2 ? l2.val : 0;
            let sum = v1 + v2 + carry;
            if(sum > 9){
                carry = 1;
                sum %= 10;
            } else {
                carry = 0;
            }
            dummy.next = new ListNode(sum, null);
            dummy = dummy.next;
            l1 = l1? l1.next : null;
            l2 = l2 ? l2.next : null;
        }
        return res.next;
    }
}
