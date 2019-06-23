(function printNow() {
  let today = new Date();
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();
  let dayName = dayNames[today.getDay()];
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();

  let ampm = hour > 11 ? 'pm' : 'am';

  let printDate = `${year}년 ${month}월 ${day}일 ${dayName} ${hour}:${minutes}:${seconds} ${ampm}`;
  console.log(printDate);
  setTimeout(printNow, 1000);
}());
