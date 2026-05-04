class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const rows = Array.from({length: 9}, () => new Set());
        const cols = Array.from({length: 9}, () => new Set());
        const boxes = Array.from({length: 9}, () => new Set());
        for(let i=0; i<board.length; i++){
            for(let j=0; j<board[i].length; j++){
                const boxNum = Math.floor(i/3)*3 + Math.floor(j/3);
                if(board[i][j] === ".") continue;
                if(rows[i].has(board[i][j])) return false;
                rows[i].add(board[i][j]);
                if(cols[j].has(board[i][j])) return false;
                cols[j].add(board[i][j]);
                if(boxes[boxNum].has(board[i][j])) return false;
                boxes[boxNum].add(board[i][j]);
            }
        }
        return true;
    }
}
