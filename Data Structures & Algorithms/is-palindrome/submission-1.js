class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let validString = "";
        let i = 0;
        s = s.toLowerCase();
        for(let c of s){
            const asciiChar = c.charCodeAt(0);
            if((asciiChar >= 65 && asciiChar <= 90) 
            || (asciiChar >= 48 && asciiChar <=57)
            || (asciiChar >= 97 && asciiChar <= 122)){
                validString += c;
            }
        }
        let len = validString.length;
        while(i < len){
            if(validString[i] !== validString[len-i-1]) return false;
            i++;
        }
        return true;
    }
}
