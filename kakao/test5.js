function bonus2(dataResult,n){
  if(dataResult == "*" || dataResult == "#"){
       if(dataResult == "*"){
           return console.log(n*2);
           
       }else{
           return n*4;
       }    
  }else{
      return n;
  }
}
function solution(dartResult) {
  var answer = 0;

 // var reg1 = /[*#]/g;
 // var bonus1 = reg1.test(dartResult);
  var index = 0;
  var first = 0;
  var second = 0;
  var third = 0;
      while(dartResult[index] == "S"){
          first += dartResult[index];
          index++;
      }
      var n = Math.pow(first,1);
      answer += bonus2(dartResult[index], n);
      
      while(dartResult[index] == "D"){
          second += dartResult[index];
          index++;
      }
      n = Math.pow(second,2);
      answer +=  bonus2(dartResult[index], n);
      while(dartResult[index] == "T"){
          third += dartResult[index];
          index++;
      }
      n = Math.pow(third,3);
      answer += bonus2(dartResult[index], n);

    return answer;
}