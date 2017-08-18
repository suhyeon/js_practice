/*3) 짝수와 홀수

evenOrOdd 함수는 정수 num을 매개변수로 받는다. num은 1이상의 정수이며, 
num이 음수인 경우는 없다.
 num이 짝수일 경우 ‘Even’을 반환하고 홀수인 경우 ‘Odd’를 반환하도록 
 evenOrOdd에 코드를 작성하라.

단, if문을 사용한 답과 3항 연산자를 사용하는 답 두가지를 제시하여야 한다.*/

function evenOrOddif(num){ //if문을 사용해 짝수와 홀수를 가려내는 함수
  if (Number.isInteger(num) == true){ //파라미터가 정수인지 검사
    if(num % 2 == 0){ //파라미터가 짝수인지 검사
      return 'Even'; //짝수면 even 리턴
    }else {
      return 'Odd'; //짝수가 아니라면 odd 리턴
    }
  }else{ //파라미터가 정수가 아니라면 false 리턴
    return false;
  }
}
console.log(evenOrOddif(5));
console.log(evenOrOddif(10));

function evenOrOddthree(num){ //삼항 연산자를 사용한 짝수와 홀수를 가려내는 함수
  if(Number.isInteger(num)==true){ //파라미터가 정수인지 검사
    return num % 2 == 0 ? 'Even' : 'Odd'; //파라미터가 짝수,홀수인지 검사하는 삼항연산자
  }else { 
    return false; //파라미터가 정수가 아니라면 false 리턴
  }
}

console.log(evenOrOddthree(5));
console.log(evenOrOddthree(10));