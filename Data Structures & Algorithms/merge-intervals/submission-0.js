class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number[][]}
     */
    merge(intervals) {
        let sortedInterval = intervals.sort((a, b) => a[0] - b[0]);
        const n = sortedInterval.length;
        let i = 1;
        let startingInterval = sortedInterval[0][0];
        let endingInterval =  sortedInterval[0][1];
        let res = [];
        while(i<n){
            if(sortedInterval[i][0] <= endingInterval){
                endingInterval = Math.max(endingInterval, sortedInterval[i][1])
            } else {
                res.push([startingInterval, endingInterval]);
                startingInterval = sortedInterval[i][0];
                endingInterval =  sortedInterval[i][1];
            }
            i++;
        }
        res.push([startingInterval, endingInterval]);
        return res;
    }
}
