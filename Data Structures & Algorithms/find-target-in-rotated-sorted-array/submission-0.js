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
        let breakingPoint = 0;
        for(let i=0; i<n-1; i++){
            if(nums[i] < nums[i+1]) continue;
            else {
                breakingPoint = i+1;
                break;
            }
        }
        if(nums[0] <= target && target <= nums[breakingPoint-1]){
            right = breakingPoint-1;
        } else if(nums[breakingPoint] <= target && target <= nums[n-1]){
            left = breakingPoint;
        }
        while(left <= right){
            let mid = left + Math.floor((right - left)/2);
            if(nums[mid] === target) return mid;
            else if(nums[mid] < target) left++;
            else right--;
        }
        return -1;
    }
}
