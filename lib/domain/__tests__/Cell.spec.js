"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Cell_1 = require("../Cell");
const Disk_1 = require("../Disk");
describe('Cell', () => {
    describe('static', () => {
        it('Blank', () => {
            const cell = Cell_1.Cell.Blank();
            expect(cell.state).toBe(Cell_1.CellState.Blank);
            expect(cell.disk).toBeNull();
        });
        it('Black', () => {
            const cell = Cell_1.Cell.Black();
            expect(cell.state).toBe(Cell_1.CellState.Placed);
            expect(cell.disk).not.toBeNull();
        });
        it('White', () => {
            const cell = Cell_1.Cell.Black();
            expect(cell.state).toBe(Cell_1.CellState.Placed);
            expect(cell.disk).not.toBeNull();
        });
        it('fromColor', () => {
            const cell = Cell_1.Cell.fromColor(Disk_1.DiskColors.Black);
            expect(cell.state).toBe(Cell_1.CellState.Placed);
            expect(cell.color).toBe(Disk_1.DiskColors.Black);
        });
    });
});
//# sourceMappingURL=Cell.spec.js.map