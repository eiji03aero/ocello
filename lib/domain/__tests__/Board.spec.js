"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("../Board");
const Disk_1 = require("../Disk");
describe('Board', () => {
    it('should create [Blank]', () => {
        const board = Board_1.Board.Blank();
        const boardStatus = board.getBoardStatus();
        expect(boardStatus.Blank).toBe(64);
    });
    it('should create [NewGame]', () => {
        const board = Board_1.Board.NewGame();
        const boardStatus = board.getBoardStatus();
        expect(boardStatus.Black).toBe(2);
        expect(boardStatus.White).toBe(2);
    });
    it("should not allow place cell if its placed", () => {
        const board = Board_1.Board.NewGame();
        expect(board.checkIfPlaceable([3, 3], Disk_1.DiskColors.Black)).toBeFalsy();
    });
    it("should not allow place cell if it would not turn other disk", () => {
        const board = Board_1.Board.NewGame();
        expect(board.checkIfPlaceable([2, 3], Disk_1.DiskColors.Black)).toBeFalsy();
    });
    it("should allow place cell if it would turn other disk", () => {
        const board = Board_1.Board.NewGame();
        expect(board.checkIfPlaceable([2, 3], Disk_1.DiskColors.White)).toBeTruthy();
    });
    it("should place and turn disk", () => {
        const board = Board_1.Board.NewGame();
        board.placeDisk([2, 3], Disk_1.DiskColors.White);
        const boardStatus = board.getBoardStatus();
        expect(board.cells[2][3].color).toEqual(Disk_1.DiskColors.White);
        expect(board.cells[3][3].color).toEqual(Disk_1.DiskColors.White);
        expect(boardStatus.White).toEqual(4);
        expect(boardStatus.Black).toEqual(1);
    });
});
//# sourceMappingURL=Board.spec.js.map