function hopscotch(board, size) {
  var result = 0;
  //var max = 0;
  var index = 0;
 
  // 함수를 완성하세요.

  for(var i = 0; i<size; i++){
    var se = [];
  for(var j = 0; j<4; j++){
      if(Math.max.apply(null,board[i]) == borad[i][j]){
        se.push(j);
      }
    }
  }
	return result;
}

 //아래는 테스트로 출력해 보기 위한 코드입니다.
//var board = [[ 1, 2, 3, 5 ], [ 5, 6, 7, 8 ], [ 4, 3, 2, 1]];
//console.log(hopscotch(board, 3));
var board1 = 
[[4,5,7,4],[4,8,0,8],[10,8,6,0],[0,9,9,7],[4,7,0,7],[9,3,6,0],[0,3,9,6],[1,8,0,10],[1,4,1,0],[5,0,5,4]];
console.log(hopscotch(board1,10));