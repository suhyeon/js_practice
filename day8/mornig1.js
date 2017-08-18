/*2) 1 ~ 10,000의 숫자 중 8이 등장하는 횟수 구하기 (Google)

1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가? 이를 구하는 함수를 완성하라.   
8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
(※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

hint)  
문자열 중 n번째에 있는 문자 : str.charAt(n) or str[n]*/

//8이 등장하는 횟수를 구하는 함수
function octet(a, b){

  var count = 0; //count 초기화
  for (var i = a; i < b ; i++){ //a부터 b까지 1씩 증가하는 반복문
    var numstring = i.toString(); //i를 스트링으로 변환선언
    for(var j = 0; j < numstring.length; j++){ //스트링길이만큼 반복
      if(numstring[j]=='8'){ //스트링에서 8을 검색
        count++; //count 1씩 증가
      }
    }
  }
  return count; //최종값 반환
}

//1~10000 범위의 함수값 출력
console.log(octet(1, 10000));