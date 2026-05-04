class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const numSet = new Set();
        let res = 0;
        for(let num of nums){
            numSet.add(num);
        }
        for(let num of nums){
            let len = 1;
            let n = num;
            while(numSet.has(++n)){
                len++;
            }
            res = Math.max(res, len);
        }
        return res;
    }
}
