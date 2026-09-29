class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let maxPile = -1;
        for(let pile of piles){
            maxPile = Math.max(maxPile, pile);
        }
        let minK = 1, maxK = maxPile;
        let res = maxPile;
        while(minK <= maxK){
            const mid = minK + Math.floor((maxK - minK)/2);
            let hoursNeeded = 0;
            for(let pile of piles){
                hoursNeeded += Math.ceil(pile / mid);
            }
            if(hoursNeeded > h) minK = mid + 1;
            else {
                res = Math.min(res, mid);
                maxK = mid - 1;
            }
        }
        return res;
    }
}
