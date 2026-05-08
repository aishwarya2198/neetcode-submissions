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
     * @return {boolean}
     */
    hasCycle(head) {
        let fastNode = head;
        let slowNode = head;
        while(fastNode && fastNode.next){
            fastNode = fastNode.next.next;
            slowNode = slowNode.next;
            if(fastNode == slowNode){
                return true;
            }
        }
        return false;
    }
}
