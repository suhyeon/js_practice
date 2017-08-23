/*17. 배열의 인접한 요소곱 중 가장 큰 값 구하기

정수의 배열에서 인접한 요소의 곱이 가장 큰 값을 반환하는 함수를 완성하라.
예를 들어 인수가 [3, 6, -2, -5, 7, 3]인 경우, 21을 반환한다.
*/
function adjacentElementsProduct(arr) {
  var arrtime = []; //곱셈의 배열 초기화 선언
  var time = arr.reduce(function (pre,cur){
    arrtime.push(pre*cur); //곱셈 삽입
    return cur; //reduce의 pre로 cur 반환
  });
  return Math.max.apply(null, arrtime); //곱셈의 배열에서 가장큰값 반환
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3])); // 21
/*#18. 배열에서 특정 값만을 구하기

배열 arr에서 짝수이고 3보다 큰 수만을 구하여 이를 배열로 반환하는 함수를 작성하라
*/
function getArray(arr) {
  var filter = arr.filter(function (el,i){  
    return (el>3) && (el%2==0); //3보다 크고 짝수인 요소를 배열로 반환
  });
  return filter; //최종값 반환
}

var arr = [1, 2, 3, 4, 5, 6];
console.log(getArray(arr)); // [ 4, 6 ]

/*#19. 평균구하기

배열을 인자로 전달받아 각 요소의 평균을 구하는 함수를 완성하라.
*/
function average(array){
  var sum = 0; //요소의 값 초기화 선언
  var foreach = array.forEach(function(el, i){
    sum += el; //각요소 값을 sum 병합할당
  });
  return sum/array.length; //평균값 반환
}

var testArray = [5, 3, 4];
console.log(average(testArray)); // 4
