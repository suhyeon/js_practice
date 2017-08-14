function myLibrary(name){
  this.name = name;
  return this.name;
}

myLibrary.prototype.getName = function(){
  return this.name;
}

var str = new myLibrary('test');

console.log(str.getName());

var now = new Date();
var greeting = 'Good' + ((now.getHours() > 17) ? ' evening.' : ' day.');
console.log(Date.prototype.__proto__  === Object.prototype);
console.log(Date.prototype.getHours.__proto__);

var x = 5;
console.log(x!='5');

console.log(Date.__proto__);
console.log(Date.prototype.getHours.__proto__);
console.log(Date.prototype);
//console.log(getHours.prototype);