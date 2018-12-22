"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Disk_1 = require("./Disk");
var CellState;
(function (CellState) {
    CellState["Blank"] = "Blank";
    CellState["Placed"] = "Placed";
})(CellState = exports.CellState || (exports.CellState = {}));
class Cell {
    constructor(args) {
        this.state = args.state || CellState.Blank;
        this.disk = args.disk || null;
    }
    static Blank() {
        return new Cell({ state: CellState.Blank });
    }
    static Black() {
        return new Cell({ state: CellState.Placed, disk: Disk_1.Disk.Black() });
    }
    static White() {
        return new Cell({ state: CellState.Placed, disk: Disk_1.Disk.White() });
    }
    static fromColor(color) {
        return new Cell({ state: CellState.Placed, disk: new Disk_1.Disk({ color: color }) });
    }
    get color() {
        return this.state === CellState.Placed
            ? this.disk.color
            : '';
    }
    get isBlank() {
        return this.state === CellState.Blank;
    }
    get isPlaced() {
        return this.state === CellState.Placed;
    }
}
exports.Cell = Cell;
//# sourceMappingURL=Cell.js.map