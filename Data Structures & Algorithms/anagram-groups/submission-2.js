class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let res = {};
        for(let str of strs){
            let chOccur = new Array(26).fill(0);
            for(let ch of str){
                chOccur[ch.charCodeAt(0) - 'a'.charCodeAt(0)]++;
            }
            const chStr = chOccur.join(',');
            if(res[chStr]) {
                res[chStr].push(str);
            } else {
                res[chStr] = [str];
            }
        }
        return Object.values(res);
    }
    isAnagram(str1, str2){
        let chOccur = [];
        if(str1.length != str2.length) return false;
        for(let i=0; i<str1.length; i++){
            chOccur[str1.charCodeAt(i) - 'a'.charCodeAt(0)] = (chOccur[str1.charCodeAt(i) - 'a'.charCodeAt(0)] || 0) + 1;
            chOccur[str2.charCodeAt(i) - 'a'.charCodeAt(0)] = (chOccur[str2.charCodeAt(i) - 'a'.charCodeAt(0)] || 0) - 1;
        }
        return chOccur.every(j => j==0);
    }
}
