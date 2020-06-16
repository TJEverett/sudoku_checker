export function Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9) {
  // row1 through row9 are each an array of 9 entries (a row from the sudoku grid left to right)
  this.puzzle = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
}

Sudoku.prototype.checkRow = function(rowNumber){
  return false;
}