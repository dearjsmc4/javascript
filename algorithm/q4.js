// 4. 문자열 내 p와 y의 개수
// numPY함수는 대문자와 소문자가 섞여있는 문자열 s를 인수로 전달받는다. 
// s에 존재하는 'p'의 개수와 'y'의 갯수를 비교해 같으면 true, 
// 다르면 false를 리턴하도록 함수를 완성하라. 대소문자를 구별하지 않으며 
// 'p', 'y' 모두 하나도 없는 경우는 항상 true를 리턴한다.

// 예를 들어 s가 'pPoooyY'면 true를 리턴하고 'Pyy'라면 false를 리턴한다.

function numPY(s) {
  if (!s) return true;
  let p = 0;
  let y = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.toLowerCase()[i] === 'p') p += 1;
    if (s.toLowerCase()[i] === 'y') y += 1;
  }
  if (p === y) {
    return true;
  }
  return false;
  // 이렇게 해도 어차피 결과는 true false 로 나오니까
  // return p === y;
}

console.log(numPY('pPoooyY')); // true
console.log(numPY('Pyy'));     // false
console.log(numPY('ab'));      // true
console.log(numPY(''));        // true
console.log(numPY());          // true