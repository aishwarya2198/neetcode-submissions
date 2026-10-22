class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let charArr = new Array(26).fill(0);
        for(let sc of s){
            charArr[sc.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        for(let tc of t){
            charArr[tc.charCodeAt(0) - 'a'.charCodeAt(0)]--;
        }
        for(let c of charArr){
            if(c !== 0) return false;
        }
        return true;
    }
}
