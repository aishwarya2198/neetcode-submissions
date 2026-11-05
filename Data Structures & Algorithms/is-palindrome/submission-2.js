class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let str = s.split(" ").join("");
        const n = str.length;
        let i = 0,
            j = n - 1;
        while (i <= j) {
            if (
                (str[i] >= "A" && str[i] <= "Z") ||
                (str[i] >= "a" && str[i] <= "z") ||
                (str[j] >= "A" && str[j] <= "Z") ||
                (str[j] >= "a" && str[j] <= "z")
            ) {
                if (str[i].toLowerCase() === str[j].toLowerCase()) {
                    i++;
                    j--;
                } else if ((str[i] >= "0" && str[i] <= "9") || (str[j] >= "0" && str[j] <= "9")) {
                    return false;
                } else if (
                    !((str[i] >= "A" && str[i] <= "Z") || (str[i] >= "a" && str[i] <= "z"))
                ) {
                    i++;
                } else if (
                    !((str[j] >= "A" && str[j] <= "Z") || (str[j] >= "a" && str[j] <= "z"))
                ) {
                    j--;
                } else {
                    return false;
                }
            } else if ((str[i] >= "0" && str[i] <= "9") || (str[j] >= "0" && str[j] <= "9")) {
                if (str[i] === str[j]) {
                    i++;
                    j--;
                } else if (!(str[i] >= "0" && str[i] <= "9")) {
                    i++;
                } else if (!(str[j] >= "0" && str[j] <= "9")) {
                    j--;
                } else {
                    return false;
                }
            } else if (
                !(
                    (str[i] >= "A" && str[i] <= "Z") ||
                    (str[i] >= "a" && str[i] <= "z") ||
                    (str[i] >= "0" && str[i] <= "9")
                )
            ) {
                i++;
            } else if (
                !(
                    (str[j] >= "A" && str[j] <= "Z") ||
                    (str[j] >= "a" && str[j] <= "z") ||
                    (str[j] >= "0" && str[j] <= "9")
                )
            ) {
                j--;
            } else {
                return false;
            }
        }
        return true;
    }
}
