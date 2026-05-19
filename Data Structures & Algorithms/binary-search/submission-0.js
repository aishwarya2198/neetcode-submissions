class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        const n = nums.length;
        let left = 0;
        let right = n-1;
        while(left <= right){
            const mid = left + Math.floor((right - left)/2);
            if(nums[mid] === target) return mid;
            else if(nums[mid] < target) left++;
            else right--;
        }
        return -1;
    }
}
