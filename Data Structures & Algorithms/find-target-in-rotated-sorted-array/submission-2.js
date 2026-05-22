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
            let mid = left + Math.floor((right - left)/2);
            if(nums[mid] === target) return mid;
            // Identify the sorted half, we'll only search in the sorted half
            // Sorted Left Half
            if(nums[left] <= nums[mid]){
                if(nums[left] <= target && target <= nums[mid]){
                    right = mid-1;
                } else{
                    // Not found in sorted half so we'' consider other half of the array
                    left = mid+1;
                }
            } else {
                // Sorted right half
                if(nums[mid] <= target && target <= nums[right]){
                    left = mid+1;
                } else {
                    right = mid - 1;
                }
            }
        }
        return -1;
    }
}
