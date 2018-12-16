import * as _ from "lodash";
import { CellCoordinates, BoardCells } from "./Board";

export class CellManager {
  static LowerEnd = 0;
  static HigherEnd = 7;

  static getAround (coords: CellCoordinates): CellCoordinates[] {
    const seedCoords = [
      [-1, -1], [0, -1], [1, -1],
      [-1, 0], [1, 0],
      [-1, 1], [0, 1], [1, 1],
    ];
    const candidateCoords = _.map(seedCoords, (sc: CellCoordinates) => {
      const rc = coords[0] + sc[0];
      const cc = coords[1] + sc[1];
      return [rc, cc] as CellCoordinates;
    });
    return _.filter(candidateCoords, (cand: CellCoordinates) => {
      return (
        CellManager.LowerEnd <= cand[0] &&
        CellManager.LowerEnd <= cand[1] &&
        CellManager.HigherEnd >= cand[0] &&
        CellManager.HigherEnd >= cand[1]
      );
    });
  }

  static checkIfPlaceable (coords: CellCoordinates, data: BoardCells) {
    return true
  }
}
