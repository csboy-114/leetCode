/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const reduceMap={}
    for(let i=0;i<nums.length;i++){
      reduceMap[target-nums[i]]=i
    }
    for(let i=0;i<nums.length;i++){
      if(reduceMap[nums[i]+'']!==null && reduceMap[nums[i]+'']!==undefined && reduceMap[nums[i]+'']!==i){
        return [i,reduceMap[nums[i]+'']]
      }
    }
};