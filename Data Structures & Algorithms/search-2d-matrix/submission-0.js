class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const m = matrix.length;
        const n = matrix[0].length;
        let lRow = 0;
        let hRow = m-1;
        while(lRow <= hRow){
            const mid = lRow + Math.floor((hRow - lRow)/2);
            // Target lies in this row
            if(matrix[mid][0] <= target && target <= matrix[mid][n-1]){
                let lCol = 0;
                let hCol = n-1;
                while(lCol <= hCol){
                    const midCol = lCol + Math.floor((hCol - lCol)/2);
                    if(matrix[mid][midCol] === target) return true;
                    else if(matrix[mid][midCol] > target) hCol = midCol - 1;
                    else lCol = midCol + 1;
                }
                // Not found in this row
                return false;
            } else if(target >= matrix[mid][n-1]){
                // Target is greater than last element of the row so explore below rows
                lRow = mid+1;
            } else {
                // Target is lower than last element of the row so explore above rows
                hRow = mid-1;
            }
        }
        return false;
    }
}
