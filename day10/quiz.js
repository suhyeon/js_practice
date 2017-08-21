2017.08.21(월)
# Quiz

## 1. ES5와 ES6 문법을 활용하여 자신의 이름을 출력하고 코드에 대한 설명을 주석으로 서술하시오.
const first = 'suhyoen'; //수현
const last = 'Jo'; //조

console.log('My name is' + first + ' ' + last + '.'); //ES5 ; const 가 아니라 var이어야하지만, 한눈에 보이는 코드를 위해 재사용하였다.
console.log(`My name is ${first} ${last}.`); //ES6 ; 템플릿 대입문을 사용해 출력한다.
## 2. 1부터 9까지 각 수의 제곱을 구하고 `=>`의 작동원리를 주석으로 서술하시오.
const arr = [1,2,3,4,5,6,7,8,9]; // 1~9까지의 배열
const pow = arr.map(x => x * x); //각 배열을 순회하며 각 요소값을 이용해 제곱을 구하고 그 값을 pow에 담는다.
//var pow = function(x) {return x*x}; //ES5
console.log(pow);
## 3. 다음의 `ES5`문법을 `ES6`로 변경하시오.

### 3-1.
//ES5
function plus(x, y) {
  x = x || 0;
  y = y || 0;
  return x + y;
}

//ES6
function plus(x = 0, y = 0){
  return x + y;
}
### 3-2. 
//ES5
function sum() {
  var array = Array.prototype.slice.call(arguments);
  return array.reduce(function (pre, cur) {
    return pre + cur;
  });
}
console.log(sum(1, 2, 3, 4, 5));

//ES6
function sum(...args){
  console.log(arguments);
  console.log(Array.isArray(args));
  return args.reduce((pre,cur) => pre + cur);
}
console.log(sum(1,2,3,4,5));
### 3-3.
//ES5
var arr = [1, 2, 3];
console.log(arr.concat([4, 5, 6])); // [ 1, 2, 3, 4, 5, 6 ]

//ES6
var arr = [1,2,3];
console.log([...arr,4,5,6]);
### 3-4.
//ES5
var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6];

Array.prototype.push.apply(arr1, arr2);

console.log(arr1); // [ 1, 2, 3, 4, 5, 6 ]

//ES6
const arr1 = [1,2,3];
const arr2 = [4,5,6];

arr1.push(...arr2);
console.log(arr1);
### 3-5.
//ES5
var Person = (function () {
  function Person(name) {
    this._name = name;
  }

  Person.prototype.sayHi = function () {
    console.log('Hi! ' + this._name);
  };

  return Person;
}());

var me = new Person('Lee');
me.sayHi(); // Hi! Lee.

console.log(me instanceof Person); // true

//ES6
class Person{
  constructor(name){
    this._name = name;
  }

  sayHi(){
    console.log(`Hi! ${this._name}`);
  }
}

const me = new Person('Lee');
me.sayHi();

console.log(me instanceof Person);