function prependZero(num, len) {
  while (num.toString().length < len) {
    num = "0" + num;
  }
  return num;
}
//[출처] [js] 숫자 앞에 지정한 자리수만큼 0으로 채우기|작성자 내공부족
//for문으로 #과 공백으로 이루어진 지도한행
function turnfor(arr, arr2, n) {
  var string = '';
  for (var j = 0; j < n; j++) {
    if (arr[j] == 1 && arr2[j] == 1) {
      string += '#';
    } else if (arr[j] == 0 && arr2[j] == 1 || arr[j] == 1 && arr2[j] == 0) {
      string += '#';
    } else {
      string += ' ';
    }
  }
  return string;
}

function solution(n, arr1, arr2) {
  var answer1 = '';
  var answer = [];
//2진수로 변환
  for (var i = 0; i < arr1.length; i++) {
    var test = arr1[i].toString(2);
    var test2 = arr2[i].toString(2);
    if (test.length === n && test2.length === n) {
      answer.push(turnfor(test, test2, n));
    } else if (test.length < n || test2.length < n) {
      var zero1 = prependZero(test, n);
      var zero2 = prependZero(test2, n);
      answer.push(turnfor(zero1, zero2, n));
    }
  }
  return answer;
}