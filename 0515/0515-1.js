function getCount8() {
  let count = 0;
  for (let num = 1; num <= 10000; num++) {
    const str = num.toString();
    for (let c = 0; c < str.length; c++) {
      if (str[c] === '8') {
        count += 1;
      }
    }
  }
  return count;
}

// 강사님의 방법
// function getCount8() {
//   let str = '';
//   let sum = 0;
//   for (let num = 1; num <= 10000; num++) {
//     str += num;
//   }
//   for (let count = 0; count <= str.length; count++) {
//     if (str[count] === '8') {
//       sum += 1;
//     }
//   }
//   return sum;
// }

console.log(getCount8());
