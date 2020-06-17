export function Sudoku(row1, row2, row3, row4, row5, row6, row7, row8, row9) {
  // row1 through row9 are each an array of 9 entries (a row from the sudoku grid left to right)
  this.puzzle = [row1, row2, row3, row4, row5, row6, row7, row8, row9];
}

Sudoku.prototype.checkRow = function(rowNumber){
  let numberCheck = [false, false, false, false, false, false, false, false, false];
  let placeHolder = 10;
  for(let a = 0; a <= 8 && a < this.puzzle[rowNumber].length; a++){
    placeHolder = this.puzzle[rowNumber][a] - 1;
    numberCheck[placeHolder] = true;
  }
  for(let b = 0; b <= 8; b++){
    if(numberCheck[b] === false){
      return false;
    }
  }
  return true;
}