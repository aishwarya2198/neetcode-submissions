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
        let res = [0];
        this.isDfs(root, res);
        return res[0] === -1 ? false : true;
    }
    isDfs(root, res){
        if(root == null) return 0;
        let lh = this.isDfs(root.left, res);
        let rh = this.isDfs(root.right, res);
        if(lh == -1 || rh == -1 || Math.abs(lh - rh) > 1){
            res[0] = -1;
            return -1;
        }
        res[0] = 1 + Math.max(lh, rh);
        return 1 + Math.max(lh, rh);
    }
}
