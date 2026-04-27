class Solution {
    public int[] productExceptSelf(int[] nums) {
        int n = nums.length;
        int[] res = new int[n];
        Arrays.fill(res, 1);
        int[] prefixProd = new int[n];
        Arrays.fill(prefixProd, 1); 
        int[] suffixProd = new int[n];
        Arrays.fill(suffixProd, 1); 
        for(int i=n-2; i>=0; i--){
            suffixProd[i] = suffixProd[i+1] * nums[i+1];
            // System.out.println("suffixProd " + i + " " + suffixProd[i]);
        }
        for(int j=1; j<n; j++){
            prefixProd[j] = prefixProd[j-1] * nums[j-1];
            // System.out.println("prefixProd " + j + " " + prefixProd[j]);
        }
        for(int k=n-1; k>=0; k--){
            res[k] = prefixProd[k] * suffixProd[k];            
        }
        return res;
    }
}  
