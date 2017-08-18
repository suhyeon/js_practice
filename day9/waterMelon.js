/* # 9. 수박수박수박수박수박수?

waterMelon 함수는 정수 n을 매개변수로 입력받는다.
길이가 n이고, 수박수박수...와 같은 패턴을 유지하는 문자열을 리턴하도록 함수를 완성하라.

예를들어 n이 4이면 ‘수박수박‘을 리턴하고 3이라면 ‘수박수‘를 리턴한다. */

function waterMelon(n){ 
  var sample = '수'; //수 선언할당
  var sample2 = '박'; //박 선언할당
  var result = ''; //빈 스트링 선언
  for(var i = 0; i < n; i++){ //파라미터만큼 반복
    if(i%2 === 0){ //i가 짝수면
      result += sample;  //빈 스트링에 수 할당
    }else{ // i가 홀수면
      result += sample2; //빈 스트링에 박 할당
    }
  }
  return result; //최종문 반환
}
  
  console.log('n이 3인 경우: '+ waterMelon(3)); //n이 3인 경우: 수박수
  console.log('n이 4인 경우: '+ waterMelon(4)); //n이 4인 경우: 수박수박