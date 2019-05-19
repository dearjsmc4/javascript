function waterMelon(n) {
  const str = '수박';
  let result = str.repeat(n / 2);
  if (n % 2 === 1) result += str[0];
  return result;
}

console.log('n이 3인 경우: '+ waterMelon(3));
console.log('n이 4인 경우: '+ waterMelon(4));
