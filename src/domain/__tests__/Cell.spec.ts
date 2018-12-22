import { Cell, CellState } from "../Cell";
import { DiskColors } from "../Disk";

describe('Cell', () => {
  describe('static', () => {
    it('Blank', () => {
      const cell = Cell.Blank();

      expect(cell.state).toBe(CellState.Blank);
      expect(cell.disk).toBeNull();
    });

    it('Black', () => {
      const cell = Cell.Black();

      expect(cell.state).toBe(CellState.Placed)
      expect(cell.disk).not.toBeNull();
    });

    it('White', () => {
      const cell = Cell.Black();

      expect(cell.state).toBe(CellState.Placed)
      expect(cell.disk).not.toBeNull();
    });

    it('fromColor', () => {
      const cell = Cell.fromColor(DiskColors.Black);

      expect(cell.state).toBe(CellState.Placed)
      expect(cell.color).toBe(DiskColors.Black);
    });
  });
});

