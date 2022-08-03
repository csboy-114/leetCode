/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var containsDuplicate = function(nums) {
  const infoMap={}
  for(let i=0;i<nums.length;i++){
    if(infoMap[nums[i]]){
      infoMap[nums[i]]++
      return true
    }else{
      infoMap[nums[i]]=1
    }
  }
  return false
};