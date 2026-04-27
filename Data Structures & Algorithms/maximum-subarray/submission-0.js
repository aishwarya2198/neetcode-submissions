class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let maxSum = nums[0];
        let sum = 0;
        for(let num of nums){
            sum += num;
            maxSum = Math.max(sum, maxSum);
            if(sum < 0){
                sum = 0;
            }
        }
        return maxSum;
    }
}
