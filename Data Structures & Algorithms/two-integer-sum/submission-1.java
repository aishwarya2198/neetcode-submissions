class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hmap = new HashMap<>();
        int[] res = new int[2];
        int n = nums.length;
        for(int i=0; i<n; i++){
            if(hmap.containsKey(target - nums[i])){
                res[0] = hmap.get(target - nums[i]);
                res[1] = i;
                return res;
            } else {
                hmap.put(nums[i], hmap.getOrDefault(nums[i], i));
            }
        }
        return res;
    }
}
