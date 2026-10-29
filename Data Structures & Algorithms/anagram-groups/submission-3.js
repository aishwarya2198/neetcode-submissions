class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let occurMap = {};
        for(let str of strs){
            let occur = new Array(26).fill(0);
            for(let c of str){
                occur[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
            }
            let occurStr = occur.toString();
            if(!occurMap[occurStr]){
                occurMap[occurStr] = [];
            }
            occurMap[occurStr].push(str);
        }
        return Object.values(occurMap);
    }
}
