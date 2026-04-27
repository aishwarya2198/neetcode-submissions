class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let mxprofit = 0;
        let min = prices[0];
        for (let i = 1; i < prices.length; i++) {
            min = Math.min(min, prices[i]);
            mxprofit = Math.max(mxprofit, prices[i] - min);
        }
        return mxprofit;
    }
}
