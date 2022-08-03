/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";
  let str = countAndSay(n - 1);
  let i = 0,
    j = 0;
  let tempStr = "";
  while (i < str.length) {
    if (str[i] === str[j]) {
      j++;
    } else {
      tempStr += `${j-i}${str[i]}`;
      i = j;
    }
  }
  return tempStr
};

