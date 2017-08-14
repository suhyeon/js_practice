function sum(){
  var res = 0;

  for(var i = 0; i < arguments.length; i++){
    res += arguments[i];
  }
  return res;
}

console.log(sum());
console.log(sum(4,3));
console.log(sum(5,7,3));