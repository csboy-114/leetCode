/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function(nums, k) {
  k=k%nums.length
  const reverseArr=(arr,i,j)=>{
    let temp
    while(i<j){
      temp=arr[i]
      arr[i]=arr[j]
      arr[j]=temp
      i++
      j--
    }
  }
  reverseArr(nums,0,nums.length-1)
  reverseArr(nums,0,k-1)
  reverseArr(nums,k,nums.length-1)
};