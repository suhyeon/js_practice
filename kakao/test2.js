function findLargestSquare(board) {
  var max = 0;
  for (var i = 0; i < board[0].length; i++) {
    for (var j = 0; j < board.length; j++) {
      board[i][j] = board[i][j] == "O" ? 1 : 0
    }
  }
  for (var x = 1; x < board[0].length; x++) {
    for (var y = 1; y < board.length; y++) {
      if (board[x][y] != 0) {
        board[x][y] = 1 + Math.min(board[x - 1][y], board[x][y - 1], board[x - 1][y - 1])
      }
      if (max < board[x][y]) {
        max = board[x][y]
      }
    }
  }
  return Math.pow(max, 2)
}
var testBoard = [
  ['X', 'O', 'O', 'O', 'X'],
  ['X', 'O', 'O', 'O', 'O'],
  ['X', 'X', 'O', 'O', 'O'],
  ['X', 'X', 'O', 'O', 'O'],
  ['X', 'X', 'X', 'X', 'X']
];
console.log(findLargestSquare(testBoard))
