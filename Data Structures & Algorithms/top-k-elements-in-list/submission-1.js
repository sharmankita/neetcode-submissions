class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
       let a = {} , countarr = new Array(nums.length+1);
        for(let i = 0 ; i <nums.length ; i++){
            a[nums[i]] = 1+ (a[nums[i]] || 0);
            if(countarr[a[nums[i]]]){
              countarr[a[nums[i]]].add(nums[i])
            }else{
              countarr[a[nums[i]]] = new Set([nums[i]])
            }
        }
        let res = new Set([]);
        for(let n = countarr.length-1 ; n>= 0 ; n-- ){ 
          if(countarr[n]){
            for (const value of countarr[n]) {
                if(res.size == k)
                    break;
                else
                    res.add(value)
            }
          } 
        }
        return Array.from(res)
    }
}
