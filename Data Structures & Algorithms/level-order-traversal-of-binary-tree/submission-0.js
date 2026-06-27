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
     * @return {number[][]}
     */
    levelOrder(root) {
        if(root == null) return [];
        let queue = new Queue();
        let res = [];
        queue.push(root);
        while(!queue.isEmpty()){
            let level = [];
            const n = queue.size();
            for(let i=0; i<n; i++){
                let node = queue.pop();
                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
                level.push(node.val);
            }
            res.push(level);
        }
        return res;
    }
}
