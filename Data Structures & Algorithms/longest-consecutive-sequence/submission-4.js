class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let hset = new Set(nums);
        let res = 0;
        for(let num of nums){
            // can be a start of sequence
            if(!hset.has(num - 1)){
                let cnt = 1;
                let seq = num+1;
                while(hset.has(seq)){
                    cnt++;
                    seq++;
                }
                res = Math.max(res, cnt);
            }
        }
        return res;
    }
}
