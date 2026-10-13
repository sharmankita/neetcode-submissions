class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    /**
 * @param {number[]} nums
 * @return {number[]}
 */
productExceptSelf(nums) {
    let len = nums.length
    let prefixArr = new Array(len) , suffixArr = new Array(len);
    prefixArr[0] = 1 ,suffixArr[len-1] = 1;
    for (let i = 1 , k = len-2  ; i < len ;i++ , k-- ){
            prefixArr[i] = prefixArr[i-1] * nums[i-1];
            suffixArr[k] = suffixArr[k+1] * nums[k+1]
    }
    console.log(suffixArr)

    for (let i = 0 ; i < len ;i++ ){
            nums[i] = prefixArr[i] * suffixArr[i];
    }
    return nums
};
}
