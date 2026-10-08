class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        let res = new Array(n);
        let prefix = new Array(n);
        let suffix = new Array(n);
        prefix[0] = 1;
        suffix[n-1] = 1

        for(let i=1; i<n; i++){
            prefix[i] = prefix[i-1] * nums[i-1];
        }
        for(let j=n-2; j>=0; j--){
            suffix[j] = suffix[j+1]*nums[j+1];
        }
        for(let k=0; k<n; k++){
            res[k] = prefix[k] * suffix[k];
        }
        return res;
    }
}
