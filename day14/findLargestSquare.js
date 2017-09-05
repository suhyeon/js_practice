function findLargestSquare(board)
{
	var answer = 0;
  var max = 0;
  var max2 = 0;
  var arr =[];
  var arr2 = [];
  var arr3 = [];
	for(var i = 0; i < board.length ; i++){
   for(var j = 0; j < board[i].length; j++){
    if(board[i][j] =='O'){
      arr.push(i);
      arr2.push(j);
    }
   }
  }
  for(var i = 0; i<arr.length;){
    if(arr[i] == arr[i+1]){
      max+=1;
      //arr3.push(arr2[i].toString());
      if(arr[i+1] == arr[i+2]){
        max+=1;
      }else{
        arr3.push(max);
        max = 0;
      }
    }
    i++;
  }
  return arr3;
}

//아래 코드는 테스트를 위한 출력 코드 입니다.
var testBoard = [['X','O','O','O','X'],['X','O','O','O','O'],['X','X','O','O','O'],['X','X','O','O','O'],['X','X','X','X','X']];
console.log(findLargestSquare(testBoard));