var day = new Date(); //date 객체 day 선언
function getDayName(a,b){ // 요일을 출력하는 함수
  var dayNames = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']; // 요일이름을 선언한 배열
  day.setFullYear(2016,a-1,b); // 2016년의 a,b를 월일로 설정
  var date = dayNames[day.getDay()]; // 요일에 배열요소로 지정
  console.log(date); //요일을 출력
}
getDayName(5,24); // 5월 24일