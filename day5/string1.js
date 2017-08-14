// p와 y가 없는 경우도 검색 가능
var split; //split 선언
var split2; //split2 선언
function numPY(s){
split = s.split(/p/gi); // p 대문자 상관없이  추출
split2 = s.split(/y/gi); // y 대문자 상관없이 추출
  if(split.length == split2.length){ // 개수를 비교
    return true; //true 반환
  }else {
    return false; //false 반환
  }
}

console.log(numPY('pPoooyY')); //true
console.log(numPY('Pyy')) //false
console.log(numPY('pPyYY')); //false
console.log(numPY('iii')); //true