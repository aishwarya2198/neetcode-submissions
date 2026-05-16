class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        const len = tokens.length;
        let stack = [];
        for(let i=0; i<len; i++){
            let token = tokens[i];
            if(token === '+'){
                let ele2 = stack.pop();
                let ele1 = stack.pop();
                stack.push(ele1+ele2);
            } else if(token === '-'){
                let ele2 = stack.pop();
                let ele1 = stack.pop();
                stack.push(ele1-ele2);
            } else if(token === '*'){
                let ele2 = stack.pop();
                let ele1 = stack.pop();
                stack.push(ele1*ele2);
                
            } else if(token === '/'){
                let ele2 = stack.pop();
                let ele1 = stack.pop();
                stack.push(Math.trunc(ele1/ele2));
            } else {
                stack.push(parseInt(token));
            }
        }
        return stack.pop();
    }
}
