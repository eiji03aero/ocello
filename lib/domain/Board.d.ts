import { Cell, CellState } from './Cell';
import { DiskColors } from "./Disk";
export declare type BoardRow = Cell[];
export declare type BoardCells = BoardRow[];
export declare type CellCoordinates = number[];
export declare type BoardStatusArg = CellState.Blank | DiskColors.Black | DiskColors.White;
export declare type BoardStatus = {
    [K in BoardStatusArg]: number;
};
export interface BoardArgs {
    cells: BoardCells;
}
export declare class Board {
    static Blank(): Board;
    static NewGame(): Board;
    static Random(): Board;
    static readonly LowerEnd = 0;
    static readonly HigherEnd = 7;
    static readonly AroundCoords: CellCoordinates[];
    cells: BoardCells;
    constructor(args: BoardArgs);
    checkIfPlaceable(coords: CellCoordinates, color: DiskColors): boolean;
    placeDisk(coords: CellCoordinates, color: DiskColors): boolean;
    calcPlaceableCells(color: DiskColors): number;
    getBoardStatus(): {
        [CellState.Blank]: number;
        [DiskColors.Black]: number;
        [DiskColors.White]: number;
    };
    private readonly allCells;
    private readonly blankBoardStatus;
    private getCellAt;
    private mapCells;
    private includesCoords;
    private isValidCoord;
    private getAvailableDirectionCoords;
    private computeCoordsToBeTurned;
    private calcCoords;
    private getCandidateCoords;
    private static readonly defaultCells;
    private static readonly newGameCells;
    private static readonly randomCells;
    private static buildCells;
}
//# sourceMappingURL=Board.d.ts.map