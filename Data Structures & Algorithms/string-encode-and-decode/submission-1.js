class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        if (strs.length === 0) return "EMPTY_ARRAY";
        let res = "";
        for (let i = 0; i < strs.length; i++) {
            const str = strs[i];
            for (let j = 0; j < str.length; j++) {
                res += `${str[j].charCodeAt(0)}/`;
            }
            res += ",";
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        if (str === "EMPTY_ARRAY") return [];
        if (str === "") return [""];
        let res = [];
        let strArr = str.split(",");
        strArr.pop();
        for (let s of strArr) {
            let chArr = s.split("/");
            let st = "";
            for (let ch of chArr) {
                if (ch !== "") {
                    st += String.fromCharCode(ch);
                }
            }
            res.push(st);
        }
        return res;
    }
}
