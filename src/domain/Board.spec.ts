import { Board } from "./Board";

describe('Board', () => {
  describe('static', () => {
    it('Blank', () => {
      const blankBoard = Board.Blank();
      let blankCount = 0;
      cellsIterator(blankBoard.cells, (cell: any) => {
        if (cell.isBlank) {
          blankCount += 1;
        }
      });

      expect(blankCount).toBe(64);
    });

    it('NewGame', () => {
      const newGameBoard = Board.NewGame();
      let blackCount = 0;
      let whiteCount = 0;
      cellsIterator(newGameBoard.cells, (cell: any) => {
        if (cell.color === "Black") blackCount += 1;
        if (cell.color === "White") whiteCount += 1;
      });

      expect(blackCount).toBe(2);
      expect(whiteCount).toBe(2);
    });
  });
});

const cellsIterator = (cells: any, callback: any) => {
  for (let row of cells) {
    for (let cell of row) {
      callback(cell);
    }
  }
};
