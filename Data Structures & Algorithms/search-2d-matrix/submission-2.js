class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;
        let colI = 0, colJ = m - 1;
        while(colI <= colJ){
            const colMid = colI + Math.floor((colJ - colI)/2);
            if(matrix[colMid][0] <= target && target <= matrix[colMid][n-1]){
                let left = 0, right = n - 1;
                while(left <= right){
                    const mid = left + Math.floor((right - left)/2);
                    if(matrix[colMid][mid] === target){
                        return true;
                    } else if(matrix[colMid][mid] > target){
                        right = mid - 1;
                    } else {
                        left = mid + 1;
                    }
                }
                return false;
            } else if(matrix[colMid][0] > target){
                colJ = colMid - 1;
            } else {
                colI = colMid + 1;
            }
        }
        return false;
    }
}
