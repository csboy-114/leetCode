/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
   let i=0,j=1;
   while(j<nums.length){
     if(nums[i]===nums[j]){
       j++
     }else{
       nums[++i]=nums[j]
       j++
     }
   }
   nums.length=i+1
   return nums.length
};