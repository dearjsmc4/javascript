function alphaString46(s) {
  // eslint-disable-next-line no-restricted-globals
  const result = !isNaN(s) && (s.length > 3 && s.length < 7) ? 'true' : 'false';
  return result;
}


console.log(alphaString46('1234')); // true
console.log(alphaString46('9014')); // true
console.log(alphaString46('723'));  // false
console.log(alphaString46('a234')); // false
console.log(alphaString46(''));     // false
console.log(alphaString46());       // false