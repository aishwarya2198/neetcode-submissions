class Solution {
    public boolean isAnagram(String s, String t) {
        char[] sc = new char[26];
        char[] tc = new char[26];

        char[] sa = s.toCharArray();
        char[] ta = t.toCharArray();

        for(char scc : sa){
            sc[scc - 'a']++;
        }
        for(char tcc : ta){
            tc[tcc - 'a']++;
        }

        for(int i=0; i<26; i++){
            if(sc[i] != tc[i]){
                return false;
            }
        }
        return true;
    }
}
