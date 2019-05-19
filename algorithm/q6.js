function hideNumbers(str) {
  const number = str.slice(-4);
  return '*'.repeat(str.length - 4) + number;
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888