function evenOrOdd(num) {
  if (num % 2 === 0) {
    return 'Even';
  }
  return 'Odd';
}

// 삼항연산자
// function evenOrOdd(num) {
//   const result = num % 2 ? 'Odd' : 'Even';
//   return result;
// }

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));
console.log(evenOrOdd(1000));
