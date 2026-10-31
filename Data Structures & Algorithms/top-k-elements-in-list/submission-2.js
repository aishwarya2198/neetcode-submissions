class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let occurMap = {};
        let res = [];
        for (let num of nums) {
            if (occurMap[num]) {
                occurMap[num] = occurMap[num] + 1;
            } else {
                occurMap[num] = 1;
            }
        }
        let sortedKeys = Object.keys(occurMap).sort((a, b) => occurMap[b] - occurMap[a]);
        for (let i = 0; i < k; i++) {
            res.push(parseInt(sortedKeys[i]));
        }
        return res;
    }
}
