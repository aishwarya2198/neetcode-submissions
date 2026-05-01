class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        let left = 0;
        let right = 0;
        const sLen = s.length;
        const tLen = t.length;
        let resLen = Number.MAX_SAFE_INTEGER;
        let res = "";
        if(sLen === tLen && s === t){
            return s;
        }
        while (right < sLen) {
            if (t.includes(s[right])) {
                left = right;
                let allCharOccured = true;
                const lastFoundPos = {}; 
                for (let ti = 0; ti < tLen; ti++) {
                    let tChar = t[ti];
                    const searchFrom = lastFoundPos[tChar] !== undefined ? lastFoundPos[tChar]+1 : left;
                    let sOccur = s.indexOf(tChar, searchFrom);
                    if (sOccur > -1 && sOccur < sLen) {
                        lastFoundPos[tChar] = sOccur;
                        right = Math.max(right, sOccur);
                    } else {
                        allCharOccured = false;
                        break;
                    }
                }
                if (
                    allCharOccured &&
                    right - left + 1 < resLen &&
                    right - left + 1 <= sLen &&
                    right - left + 1 >= tLen
                ) {
                    res = s.substring(left, right + 1);
                    resLen = right - left + 1;
                }
                right = left + 1;
            }
            else{
                right++;
            }
        }
        return res;
    }
}
