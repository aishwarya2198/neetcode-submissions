class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let ocurMap = {};
        let res = new Array(k);
        for(let n of nums){
            ocurMap[n] = ocurMap[n] ? ocurMap[n]+1 : 1;
        }
        let sorted = Object.keys(ocurMap).sort((a,b) => ocurMap[b] - ocurMap[a]);
        for(let i = 0; i < k; i++){
            res[i] = Number(sorted[i]);
        }
        return res;
    }
}
