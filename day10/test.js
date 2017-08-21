//12. 약수의 합

//어떤 수를 입력받아 그 수의 약수를 모두 더한 수를 구하는 sumDivisor 함수를 완성하라. 
//예를 들어 12가 입력된다면 12의 약수는 [1, 2, 3, 4, 6, 12]가 되고,
// 총 합은 28이 되므로 28을 반환한다.

//약수(約數, divisor)는 어떤 수를 나누었을 때 나머지가 0인 수를 말하며, 
//배수 관계와 서로 반대되는 개념이다

function sumDivisor(num) {
  var sum = 0; //약수의 합 초기화 선언
  for(var i = 0; i <= num; i++){
    if(num%i == 0){ //i가 num의 약수라면
      sum += i; //sum에 i를 더해 할당한다.
    }
  }
  return sum; //약수의 합 반환
}

console.log(sumDivisor(12)); // 28