(function printNow() {
  const today = new Date();
  const dayNames = ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'];

  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const day = today.getDate();
  const dayName = dayNames[today.getDay()];
  const hour = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  const ampm = hour > 11 ? 'pm' : 'am';

  const printDate = `${year}년 ${month}월 ${day}일 ${dayName} ${hour}:${minutes}:${seconds} ${ampm}`;
  console.log(printDate);
  setTimeout(printNow, 1000);
}());
