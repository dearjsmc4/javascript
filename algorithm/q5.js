// 이상한 문자만들기
// toWeirdCase함수는 문자열을 인수로 전달받는다. 
// 문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 
// 홀수번째 인덱스 문자는 소문자로 바꾼 문자열을 리턴하도록 함수를 완성하라.

// 예를 들어 s가 'hello world'라면 첫번째 단어는 'HeLlO',
// 두번째 단어는 'WoRlD'로 바꿔 'HeLlO WoRlD'를 리턴한다.

// 주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.

function toWeirdCase(s) {
  const words = s.split(' ');
  for (let i = 0; i < words.length; i++) {
    const str = words[i];
    let result = '';
    for (let a = 0; a < str.length; a++) {
      result += a % 2 === 0 ? str[a].toUpperCase() : str[a].toLowerCase();
    }
    words[i] = result;
  }
  return words.join(' ');
}

console.log(toWeirdCase('hello world'));    // 'HeLlO WoRlD'
console.log(toWeirdCase('my name is lee')); // 'My NaMe Is LeE'





// const words = s.split(' ');
// // 이중 for 문 안 쓰기
// function toUpperLower(str) {
//   let result = '';
//   for (let i = 0; i < str.length; i++) {
//     result += i % 2 ? str[i].toLowerCase() : str[i].toUpperCase();
//   }
//   return result;
// }
// for (let i = 0; i < words.length; i++) {
//   words[i] = toUpperLower(words[i]);
// }
// // 붙일 때 스페이스 넣어서 붙여라
// return words.join(' ');