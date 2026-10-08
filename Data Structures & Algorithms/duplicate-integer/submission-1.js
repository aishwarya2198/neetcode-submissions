class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hset = new Set();
        for(let num of nums){
            if(hset.has(num)) return true;
            hset.add(num);
        }
        return false;
    }
}
