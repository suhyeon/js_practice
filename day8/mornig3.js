/* 4.) 문자열 다루기

alphaString46 함수는 문자열 s를 매개변수로 입력받는다.
s의 길이가 4 ~ 6이고, 숫자로만 구성되어 있는지 확인하는 함수를 완성하라.
예를들어 s가 ‘a234’이면 false를 리턴하고 ‘1234’라면 true를 리턴한다*/

function alphaString46(s){ // 정규표현식에 맞는지 검사하는 함수
  var check = /^[\d,]{4,6}$/g; //파라미터가 숫자로만 구성되어 있고, 4~6개로 구성되어있는지의 정규표현식
  return check.test(s); //정규표현식 결과값 반환
}

console.log(alphaString46('1234')); //true
console.log(alphaString46('a234')); //false