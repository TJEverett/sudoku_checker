import { Sudoku } from './../src/sudoku.js';

describe('Sudoku', () => {
  let reusableCorrectSudoku;
  let reusableIncorrectSudoku;

  beforeEach(() => {
    reusableCorrectSudoku = new Sudoku([3, 4, 9, 5, 7, 6, 2, 1, 8], [5, 7, 2, 3, 1, 8, 9, 6, 4], [6, 8, 1, 9, 4, 2, 7, 5, 3], [7, 1, 6, 2, 9, 4, 3, 8, 5], [4, 3, 8, 1, 5, 7, 6, 9, 2], [2, 9, 5, 8, 6, 3, 4, 7, 1], [9, 2, 3, 6, 8, 1, 5, 4, 7], [1, 6, 4, 7, 3, 5, 8, 2, 9], [8, 5, 7, 4, 2, 9, 1, 3, 6]);
    reusableIncorrectSudoku = new Sudoku([1, 4, 9, 5, 7, 6, 2, 1, 8], [5, 7, 2, 1, 1, 8, 9, 6, 4], [6, 8, 1, 9, 4, 2, 7, 5, 1], [7, 1, 6, 2, 9, 4, 1, 8, 5], [4, 1, 8, 1, 5, 7, 6, 9, 2], [2, 9, 5, 8, 6, 1, 4, 7, 1], [9, 2, 1, 6, 8, 1, 5, 4, 7], [1, 6, 4, 7, 1, 5, 8, 2, 9], [8, 5, 7, 4, 2, 9, 1, 1, 6]);
  });

  test('should correctly start each of the 9 rows', () => {
    expect(reusableCorrectSudoku.puzzle[0][0]).toEqual(3);
    expect(reusableCorrectSudoku.puzzle[1][0]).toEqual(5);
    expect(reusableCorrectSudoku.puzzle[2][0]).toEqual(6);
    expect(reusableCorrectSudoku.puzzle[3][0]).toEqual(7);
    expect(reusableCorrectSudoku.puzzle[4][0]).toEqual(4);
    expect(reusableCorrectSudoku.puzzle[5][0]).toEqual(2);
    expect(reusableCorrectSudoku.puzzle[6][0]).toEqual(9);
    expect(reusableCorrectSudoku.puzzle[7][0]).toEqual(1);
    expect(reusableCorrectSudoku.puzzle[8][0]).toEqual(8);
  });

  test('should correctly return false if the numbers 1-9 are not all present in a given row', () => {
    expect(reusableIncorrectSudoku.checkRow(0)).toEqual(false);
  });

  test('should correctly return true is the numbers 1-9 are all present in a given row', () => {
    expect(reusableCorrectSudoku.checkRow(0)).toEqual(true);
  });

  test('should correctly return false if the numbers 1-9 are not all present in a given column', () => {
    expect(reusableIncorrectSudoku.checkColumn(0)).toEqual(false);
  });

  test('should correctly return true is the numbers 1-9 are all present in a given column', () => {
    expect(reusableCorrectSudoku.checkColumn(0)).toEqual(true);
  });
});