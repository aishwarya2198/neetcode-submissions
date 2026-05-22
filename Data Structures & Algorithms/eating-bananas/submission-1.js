class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let low = 1;
        let high = 0;
        let res = 0;
        let lastClosestHour = 0;
        for (let pile of piles) {
            high = Math.max(pile, high);
        }
        while (low <= high) {
            const mid = low + Math.floor((high - low) / 2);
            let hours = 0;
            for (let pile of piles) {
                hours += Math.ceil(pile / mid);
            }
            if (hours > h) low = mid + 1;
            else {
                high = mid - 1;
                lastClosestHour = hours;
                if (hours >= lastClosestHour) {
                    res = mid;
                }
            }
        }
        return res;
    }
}
