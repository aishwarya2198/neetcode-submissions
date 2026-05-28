class TimeMap {
    constructor() {
        this.keyStore = new Map();
    }

    /**
     * @param {string} key
     * @param {string} value
     * @param {number} timestamp
     * @return {void}
     */
    set(key, value, timestamp) {
        if (this.keyStore.has(key)) {
            this.keyStore.get(key).push({ [timestamp]: value });
        } else {
            this.keyStore.set(key, [{ [timestamp]: value }]);
        }
    }

    /**
     * @param {string} key
     * @param {number} timestamp
     * @return {string}
     */
    get(key, timestamp) {
        if (this.keyStore.has(key)) {
            const res = this.keyStore.get(key);
            const keyList = res.map((item) => Object.keys(item)[0]);
            const n = keyList.length;
            let left = 0;
            let right = n - 1;
            let mid;
            let ans;
            while (left <= right) {
                mid = left + Math.floor((right - left) / 2);
                if (keyList[mid] <= timestamp) {
                    ans = mid;
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
            return ans !== undefined ? res[ans][keyList[ans]] : "";
        } else {
            return "";
        }
    }
}
