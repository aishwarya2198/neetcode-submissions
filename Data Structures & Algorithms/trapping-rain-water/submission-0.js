class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        const n = height.length;
        let minLeftHeight = new Array(n).fill(0);
        let minRightHeight = new Array(n).fill(0);
        minLeftHeight[0] = height[0];
        minRightHeight[n-1] = height[n-1];
        let maxArea = 0;
        for(let i=1; i<n; i++){
            minLeftHeight[i] = Math.max(minLeftHeight[i-1], height[i]);
        }
        for(let j= n-2; j>=0; j--){
            minRightHeight[j] = Math.max(minRightHeight[j+1], height[j]);
        }
        for(let k=0; k<n; k++){
            const area = Math.min(minLeftHeight[k], minRightHeight[k]) - height[k];
            maxArea += area > 0 ? area : 0;
        }
        return maxArea;
    }
}
