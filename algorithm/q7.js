function strToInt(str) {
  // return Number(str);
  // return +str;
  // return str * 1;
  return parseInt(str);
}

console.log(strToInt('1234'));  // 1234
console.log(strToInt('-1234')); // -1234