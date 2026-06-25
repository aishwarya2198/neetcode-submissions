/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        return this.isDfs(root) === -1 ? false : true;
    }
    isDfs(root){
        if(root == null) return 0;
        let lh = this.isDfs(root.left);
        let rh = this.isDfs(root.right);
        if(lh == -1 || rh == -1 || Math.abs(lh - rh) > 1){
            return -1;
        }
        return 1 + Math.max(lh, rh);
    }
}
