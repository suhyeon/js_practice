//1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.

function findMinDistance(array){
  var arr = []; //배열요소의 앞뒤 차이를 저장할 배열 초기화 
  //정렬되어있다고 가정했기 때문에 이 방법 채택
  var arr2 = []; //결과값이 될 배열 초기화

  array.reduce(function (previousValue, currentValue){
    var string = currentValue - previousValue; //배열 요소의 앞뒤차이를 string에 저장
    arr.push(string); //string값을 배열에 push
    return currentValue; //reduce 인자에 currentValue 리턴
  });

  var line = Math.min.apply(null,arr); //arr의 요소값중 최소값을 line에 할당

  for(var i = 0 ; i <= arr.length; i++){
    if(arr[i]===line){ //최소값과 같은 값의 요소라면
      var newarr = new Array(array[i],array[i+1]); //같은 인덱스의 파라미터배열의 앞뒤를 새로운 배열로 선언
      arr2.push(newarr); //선언된 배열을 arr2에 삽입
    }
  }
  return arr2; //최종값을 반환
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]