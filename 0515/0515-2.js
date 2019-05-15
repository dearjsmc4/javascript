function alphaString46(s) {
  // eslint-disable-next-line no-restricted-globals
  if (s.length > 3 && s.length < 7 && !isNaN(s)) {
    return true;
  }
  return false;
}

console.log(alphaString46('1234'));
console.log(alphaString46('a123'));
