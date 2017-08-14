//이번 코드는 p와 Y가 아예 없는 경우는 에러가 발생한다. 
//p와 y가 없어서 배열에 p와 y가 들어가지 않아서 데이터타입이 undefined로 반환되기 때문
function numPY(s){
  var reg = /p/gi; // p 여부를 대소문자 구분없이 검색
  var reg2 = /y/gi; // y 여부를 대소문자 구분없이 검색
  var result = s.match(reg).length === s.match(reg2).length ? 'true' : 'false'; // 삼항 연산자를 이용해 p를 검색한 구문과 y를 검색한 구문의 개수비교
  console.log(result); //결과값 출력
}

numPY('pPoooyY'); //true
numPY('Pyy'); //false
numPY('pPyYY'); //false

var split = 0; //split 선언
var split2 = 0; //split2 선언
function numPY(s){
  for(var i = 0; i < s.length; i++){ //매개변수길이 만큼 반복 
    if(s.charAt(i) == 'p' || s.charAt(i) == 'P'){ //p, P를 검색하는 조건문
      split++; //split 1씩 증가
    }
    if(s.charAt(i) == 'y' || s.charAt(i) == 'Y'){ //y, Y를 검색하는 조건문
      split2++; // split2 1씩 증가
    }
  }
  if(split == split2){ //p와 Y를 같은지 비교
    return true; //true 반환
  }else{
    return false; //false 반환
  }
}

console.log(numPY('pPoooyY')); //true
console.log(numPY('Pyy')) //false
console.log(numPY('pPyYY')); //false