//1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것(들)의 쌍을 배열로 반환하는 함수를 작성하라. (단 점들의 배열은 모두 정렬되어있다고 가정한다.) 예를들어 [1, 3, 4, 8, 13, 17, 20, 23, 24]이 주어졌다면, 결과값은 [[3, 4], [23, 24]]가 될 것이다.

function findMinDistance(array){
  var arr = [];
  /*for(var i = 0; i <= array.length ; i++){
    for(var j = 0; j <= i; j++){
      var result = array[i+1] - array[i];
      arr.push(result);
    }
    arr.sort(function(a,b){return a-b;});
  }*/
  var result = array.reduce(function (previousValue, currentValue){
    var string = currentValue - previousValue;
    arr.push(string);
    return currentValue;
  });
  var some = array.filter(arr.Math.min(0));
  
}

// 1차원 점의 배열
var array = [1, 3, 4, 8, 13, 17, 20, 23, 24];
console.log(findMinDistance(array)); // [[3, 4], [23, 24]]