/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
    let slow=0,fast=0
    while(fast<nums.length){
      if(nums[fast]!==0){
        nums[slow++]=nums[fast]
      }
      fast++
    }
    for(let i=slow;i<nums.length;i++){
      nums[i]=0
    }
};