/*# 6. 이상한 문자만들기

toWeirdCase함수는 문자열 s를 매개변수로 입력받는다.
문자열 s에 각 단어의 짝수번째 인덱스 문자는 대문자로, 홀수번째 인덱스 문자는 소문자로
바꾼 문자열을 리턴하도록 함수를 완성하라.
예를 들어 s가 ‘try hello world’라면 첫 번째 단어는 ‘TrY’, 두 번째 단어는 ‘HeLlO’, 세 번째 단어는 ‘WoRlD’로 바꿔 ‘TrY HeLlO WoRlD’를 리턴한다.

주의) 문자열 전체의 짝/홀수 인덱스가 아니라 단어(공백을 기준)별로 짝/홀수 인덱스를 판단한다.*/

function toWeirdCase(s) {
  var res = s.split(' '); //파라미터를 res에 공백을 기준으로 나눠할당
  var t = []; // 빈객체 선언
  for(var i = 0; i < res.length; i++){ //res요소 개수만큼 반복
    var test = res[i]; //res i번째 요소를 test에 할당
    for(var j = 0; j < test.length; j++){ //test요소 개수만큼 반복
      if(j%2 == 0){  //짝수번째면
        t.push(test[j].toString().toUpperCase()); //대문자 병합
      }else{ //홀수면 
        t.push(test[j].toString().toLowerCase()); //소문자 병합
      }
    }
    t.push(' '); //t에 공백 추가
  }
  var result = t.reduce(function(pre, cur){ //각 요소를 다 더한다
    return pre+cur; // 더한 값 reduce에 반환
  });
  return result; //다더한 값 반환
}

console.log(toWeirdCase('try hello world')); // 'TrY HeLlO WoRlD'