class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxCapacity = 0;
        let containerSize = heights.length;
        let left = 0;
        let right = containerSize - 1;
        let capacity;
        while(left < right){
            capacity = Math.min(heights[left], heights[right]) * (right - left);
            maxCapacity = Math.max(maxCapacity, capacity);
            if(heights[left] <= heights[right]) left++;
            else right--;
        }
        return maxCapacity;
    }
}
