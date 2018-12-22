import { Disk, DiskColors } from "./Disk";
export declare enum CellState {
    Blank = "Blank",
    Placed = "Placed"
}
interface CellArgs {
    state: CellState;
    disk?: Disk;
}
export declare class Cell {
    state: CellState;
    disk: Disk | null;
    constructor(args: CellArgs);
    static Blank(): Cell;
    static Black(): Cell;
    static White(): Cell;
    static fromColor(color: DiskColors): Cell;
    readonly color: "" | DiskColors;
    readonly isBlank: boolean;
    readonly isPlaced: boolean;
}
export {};
//# sourceMappingURL=Cell.d.ts.map