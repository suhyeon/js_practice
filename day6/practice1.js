//1. 두수를 입력받아 큰 수를 반환하는 함수
function max (a , b){
  return Math.max(a , b);
}
console.log(max(3,9));
//2. 숫자를 입력하면 한글 요일을 반환하는 함수
function day(a){
  var daystr = ['(일요일)', '(월요일)', '(화요일)', '(수요일)', '(목요일)', '(금요일)', '(토요일)'];
  return daystr[a];
}
console.log(day(0));

//3. 숫자를 배열로 전달받아 숫자들의 평균을 반환하는 함수
function Average(){
  this.sum = 0;
  this.count = 0;
}
Average.prototype.add = function(array){
  array.forEach(function(element) {
    this.sum += element;
    this.count++;
  }, this);
}
function average(arr) {
  return arr.sum/arr.count;
}
var ob = new Average();
ob.add([3,3,3]);
console.log(average(ob));

function ave(a){
  var res = 0;
  a.forEach(function(element){
    res += element;
  }, this);
  return res/a.length;
}
var ob = [3,3,3,3];
console.log(ave(ob));
//4. 숫자를 n개 전달받아 숫자들의 평균을 반환하는 함수
function naverage(){
  //var sum = 0;
  //var count = 0;
 // for (var i = 0; i < arguments.length; i++){
   // sum += arguments[i];
   // count++;
  //}
  //return sum / count;
  Array.prototype.slice.call(arguments);
}
console.log(naverage(3,6,9,12));
//5. 문자열을 배열로 받아 문자열 하나로 반환하는 함수
function stringarray(arraystr){
  return arraystr.join();
}
var array4 = ['a,b','c'];
console.log(stringarray(array4));

//6. 세수를 입력받아 큰수를 반환하는 함수 1번 함수 사용하기
function threemax(a,b,c){
  var step1 = max(a,b);
  var step2 = max(step1,c);
  return step2;
}
console.log(threemax(3,6,9));

//7. n개의 인자를 받아서 가장큰수를 반환
function nmax(){
  var nmax = 0;
  for (var i = 0; i < arguments.length; i++){
    namx = arguments[i];
  }
  return namx;
}
console.log(nmax(3,6,7,9));

//8. 문자열을 역순으로 바꿔주는 함수
function reverse(a){
  //return a.reverse();
  var result = '';
  for (var l = a.length; l--; ){
    result += a[l];
  }
  return result;
}
var a = ['a','b','c'];
console.log(reverse(a));

//9. 비밀번호 문자열 validation 최소 8글자 최대 20글자 영어 대소문자 숫자포함
function pwdvalidate(a){
  var reg1 = /^\w{8,20}$/g;
  var res = reg1.test(a);
  return res;
  //?=
}
console.log(pwdvalidate('1111111'));