class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const res = {};
        for (let str of strs) {
            let charArr = new Array(26).fill(0);
            for(let char of str){
                charArr[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const charStr = charArr.join(',');
            if(!res[charStr]){
                res[charStr] = [str];
            } else {
                res[charStr].push(str);
            }
        }
        return Object.values(res);
    }
}
