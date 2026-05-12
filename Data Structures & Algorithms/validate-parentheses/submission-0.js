class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];
        for(let c of s){
            if(c === '[' || c === '(' || c === '{'){
                stack.push(c);
            } else if(c === ']'){
                let topChar = stack.pop();
                if(topChar !== '[') return false;
            } else if(c === '}'){
                let topChar = stack.pop();
                if(topChar !== '{') return false;
            } else if(c === ')'){
                let topChar = stack.pop();
                if(topChar !== '(') return false;
            }
        }
        if(stack.length === 0) return true;
        return false
    }
}
