/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  const map={}
  for(let i=0;i<s.length;i++){
    if(!map[s[i]]){
      map[s[i]]=1
    }else{
      map[s[i]]++
    }
  }
  for(let i in map){
    if(map[i]===1){
      return s.indexOf(i)
    }
  }
  return -1
};
console.log(firstUniqChar("leetcode"));