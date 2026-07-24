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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let arr = [];
        arr[0] = k;
        this.dfs(root, arr);
        return arr[1];
    }
    dfs(node, arr, k){
        if(node == null) return;
        this.dfs(node.left, arr, );
        if(arr[0] == 1){
            arr[1] = node.val;
        }
        arr[0] = arr[0]-1;
        this.dfs(node.right, arr);
    }
}
