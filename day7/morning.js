//palindrome(팰린드롬/회문)은 왼쪽에서 오른쪽으로 읽은 다음, 오른쪽부터 왼쪽으로 다시 읽어도 똑같은 형태와 의미를 유지하는 문장이나 단어를 지칭한다. 인자로 전달한 문자열이 palindrome인지 검사하여 Boolean값을 반환하는 함수를 완성하라. 단, 반드시 1자 이상의 문자열을 인자로 전달한다.

function checkPalindrom(str) {
  /* //for문 이용
  var str1 = '';
  var str2 = '';
  for(var i = 0; i < str.length; i++){
    str1 += str.charAt(i);
  }
  for(var i = str.length; i >= 0; i--){
    str2 += str.charAt(i);
  }
  return str1 == str2;*/
  if(str.length < 2){
    return false; // 2단어이상이 되어야 의미가 있을 수 있다.
  }else{
    var split1 = str.split(''); //스트링을 배열화
    var split2 = split1.reverse(); //배열을 역순정렬
    var split3 = split2.join(''); //역순정렬한배열을 다시 스트링화
    return str === split3; // 역순과 파라미터 비교
  }
}

console.log(checkPalindrom('dad')); // true
console.log(checkPalindrom('mom')); // true
console.log(checkPalindrom('palindrom')); // false
console.log(checkPalindrom('s')); // false