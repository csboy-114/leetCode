/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  let res = 0;
  let flag=true
  if(x<0){
    flag=false
    x=-x
  }
  debugger
  while (x >0) {
    res = res * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  if(!flag){
    res=-res
  }
  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
    return 0
  }
  return res
};

console.log(reverse(120));
