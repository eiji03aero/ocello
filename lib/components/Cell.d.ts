import * as React from "react";
import { CellCoordinates } from "../domain/Board";
import { Cell as CellClass } from "../domain/Cell";
export interface Props {
    cell: CellClass;
    rowIndex: number;
    columnIndex: number;
    onPlaceDisk: (coords: CellCoordinates) => void;
    placeable: boolean;
}
export declare const Cell: React.SFC<Props>;
//# sourceMappingURL=Cell.d.ts.map