/*# 7. 핸드폰번호 가리기

핸드폰 요금 고지서에 표시할 전화번호는 개인정보 보호를 위해 맨 뒷자리 4자리를 제외한 나머지를 ‘*’으로 바꿔야 한다.
전화번호를 나타내는 문자열 str을 입력받는 hideNumbers 함수를 완성하라
예를들어 s가 ‘01033334444’면 ‘*******4444’를 리턴하고, ‘027778888’인 경우는 ‘*****8888’을 리턴한다. */

function hideNumbers(str){
  var result = []; //최종값 빈객체 선언
  var one = str.substring(str.length-4); // 마지막 4자리를 복사
 
  for(var i = 0; i < str.length - 4; i++){ //전체의 4자리만 뺀나머지를 반복
    result.push('*'); //빈객체에 개수만큼 * push
  }
  result.push(one); //남겨놨던 4자리를 병합
  var test = result.reduce(function(pre, cur){ // 객체요소를 다 더한다.
    return pre+cur; //reduce함수에 더한 값 전달
  });
  return test; //다 더한 값 반환
}

console.log(hideNumbers('01033334444')); // *******4444
console.log(hideNumbers('027778888'));   // *****8888
