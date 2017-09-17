function twobytwo(character, board){
  var max = 0;
    for (var i = 0; i < board[0].length; i++) {
      for (var j = 0; j < board.length; j++) {
        board[i][j] = board[i][j] == character ? 1 : 0 
      }
    }
    for (var x = 1; x < board[0].length; x++) {
      for (var y = 1; y < board.length; y++) {
        if (board[x][y] != 0) {
          board[x][y] = 1 + Math.min(board[x - 1][y], board[x][y - 1], board[x - 1][y - 1]);
          console.log(board[x][y]);
        }
        if (max < board[x][y]) {
          max = board[x][y];
        }
      }
    }
    return Math.pow(max, 2);
  }
  function solution(m, n, board) {
      var answer = 0;
      
      var rion = "R";
      var mooji = "M";
      var apeach = "A";
      var frodo = "F";
      var tube = "T";
      var jayz = "J";
      var corn = "C";
      twobytwo(rion,board);
      return answer;
  }
console.log(solution(4,5,["CCBDE", "AAADE", "AAABF", "CCBBF"]));