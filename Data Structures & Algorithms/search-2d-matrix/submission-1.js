class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;
        for(let i=0; i<m; i++){
            if(matrix[i][0] <= target && target <= matrix[i][n-1]){
                let left = 0, right = n - 1;
                while(left <= right){
                    const mid = left + Math.floor((right - left)/2);
                    if(matrix[i][mid] === target){
                        return true;
                    } else if(matrix[i][mid] > target){
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }
            }
        }
        return false;
    }
}
