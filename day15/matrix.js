function matrix(list) {
	var answer = 0;
	var x, y ,z, line = 0;
  var index =[];
  //a와 b 갯수
  for(var i = 0; i<list.length-1;i++){
   var a = list[i];
   var b = list[i+1];
   a[0]*b[0]*b[1]
  }
  for(var i = 0; i<index.length; i++){
    var c = index[i];
    x = c[0];
    y = c[1];
    z = c[2];
    var result = x * y * z;
    answer += result;
  }
  //두 행렬의 곱한 행렬을 반환
  function rearray(n1, n2, n3){
    var arr = new Array(n1,n3);
    return arr;
  }
  //두 행렬을 곱한 횟수
  function result(arr1, arr2){
    var result = arr1[0]*arr2[0]*arr2[1];
    return result;
  }
	return answer;
}

// 실행을 위한 테스트코드입니다.
var list = [ [ 5, 3 ], [ 3, 2 ], [ 2, 6 ] ];
//if (matrix(list) == 90) {
	//console
		//	.log("[[5,3],[3,2],[2,6]]인 경우에 정상동작합니다. 제출을 눌러서 다른 경우에도 정답인지 확인해 보세요.");
//} else {
	//console.log("[[5,3],[3,2],[2,6]]인 경우에 정상동작하지 않습니다.");
//}
console.log(matrix(list));