class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let stack = [];
        const n = temperatures.length;
        let res = new Array(n).fill(0);
        for (let i = 0; i < n; i++) {
            while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
                res[stack[stack.length - 1]] = i - stack[stack.length - 1];
                stack.pop();
            }
            stack.push(i);
        }
        return res;
    }
}
