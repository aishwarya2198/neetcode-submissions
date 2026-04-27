class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0];
        let maxProfit = 0;
        for (let price of prices) {
            if (price < buy) {
                buy = price;
            } else {
                maxProfit = Math.max(maxProfit, price - buy);
            }
        }
        return maxProfit;
    }
}
