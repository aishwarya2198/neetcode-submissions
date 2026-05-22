class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        const n = nums.length;
        let low = 0;
        let high = n-1;
        let ans = 1001;
        while(low <= high){
            const mid = low + Math.floor((high - low)/2);
            // Identify the sorted half
            if(nums[low] <= nums[mid]){
                ans = Math.min(ans, nums[low]);
                low = mid+1;
            } else {
                ans = Math.min(ans, nums[mid]);
                high = mid-1;
            }
        }
        return ans;
    }
}
