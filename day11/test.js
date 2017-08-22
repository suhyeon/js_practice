//1. 아래의 코드를 ES6 문법으로 바꾸기

// ES5
var Person = (function () {
  // Constructor
  function Person(name) {
    this._name = name;
  }

  // method
  Person.prototype.sayHi = function () {
    console.log('Hi! ' + this._name);
  };

  // return constructor
  return Person;
}());

var me = new Person('Lee');
me.sayHi(); // Hi! Lee.

//ES6
class Person {
  constructor (name){
    this._name = name;
  }

  sayHi = function (){
    console.log('Hi!' + this._name);
  };

};

const me = new Person();
me.sayHi();
