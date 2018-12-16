import * as _ from "lodash";

import { Cell } from './Cell';
import { Player } from "./Player";

export type BoardRow = Cell[];
export type BoardCells = BoardRow[];
export type CellCoordinates = number[];

export interface BoardArgs {
  cells: BoardCells;
}

export class Board {
  static Blank () { return new Board({ cells: this.defaultCells }); }
  static NewGame () { return new Board({ cells: this.newGameCells }); }
  static Random () { return new Board({ cells: this.randomCells }); }

  readonly LowerEnd = 0;
  readonly HigherEnd = 7;
  readonly AroundCoords: CellCoordinates[] = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1],
  ];
  cells: BoardCells;

  constructor (args: BoardArgs) {
    this.cells = args.cells;
  }

  placeDisk (coords: CellCoordinates, player: Player) {
    if (!this.checkIfPlaceable(coords, player)) return false;

    const coordsToBeTurned = this.computeCoordsToBeTurned(coords, player);
    const allCoordsToBeTurned = _.concat(coordsToBeTurned, [ coords ]);

    this.cells = this.mapCells((cell: Cell, ridx: number, cidx: number) => {
      return this.includesCoords(allCoordsToBeTurned, [ridx, cidx])
        ? Cell.fromColor(player.color)
        : cell;
    });
  }

  checkIfPlaceable (coords: CellCoordinates, player: Player) {
    const cell = this.getCellAt(coords);
    if ( _.isNil(cell) || cell.isPlaced) return false;

    const disksToBeTurned = this.computeCoordsToBeTurned(coords, player);

    return disksToBeTurned.length > 0;
  }

  /* -------------------- Private methods -------------------- */
  private getCellAt (coords: CellCoordinates): Cell {
    return this.cells[coords[0]][coords[1]];
  }

  private mapCells (
    callback: (cell: Cell, ridx: number, cidx: number) => Cell,
  ): BoardCells {
    return _.map(this.cells, (row: BoardRow, ridx: number) => {
      return _.map(row, (cell: Cell, cidx: number) => {
        return callback(cell, ridx, cidx);
      });
    });
  }

  private includesCoords (coordsArray: CellCoordinates[], coords: CellCoordinates) {
    return _.some(coordsArray, (cds: CellCoordinates) =>
      coords[0] === cds[0] && coords[1] === cds[1]
    );
  }

  private isValidCoord (coords: CellCoordinates): boolean {
    return (
      coords[0] >= this.LowerEnd &&
      coords[1] >= this.LowerEnd &&
      coords[0] <= this.HigherEnd &&
      coords[1] <= this.HigherEnd
    );
  }

  private getAvailableDirectionCoords (coords: CellCoordinates) {
    return _.filter(this.AroundCoords, (ac: CellCoordinates) => {
      const tryCoordinates = [coords[0] + ac[0], coords[1] + ac[1]];
      return this.isValidCoord(tryCoordinates);
    });
  }

  private computeCoordsToBeTurned (
    currentCoords: CellCoordinates,
    player: Player
  ): CellCoordinates[] {
    const availableDirectionCoords = this.getAvailableDirectionCoords(currentCoords);

    return _.reduce(availableDirectionCoords, (accum: CellCoordinates[], cds: CellCoordinates) => {
      const candidateCoords = this.getCandidateCoords(currentCoords, cds);

      if (candidateCoords.length < 2) return accum;
      if (this.getCellAt(candidateCoords[0]).color === player.color) return accum;

      const coordsToCommit: CellCoordinates[] = [candidateCoords[0]];

      _.forEach(candidateCoords.slice(1), (cds: CellCoordinates) => {
        const cell = this.getCellAt(cds);
        if (cell.color === player.color) {
          console.error(currentCoords, candidateCoords, coordsToCommit, cell.color, player.color);
          _.forEach(coordsToCommit, (ctc: CellCoordinates) => accum.push(ctc));
          return false;
        }
        else if (cell.color !== player.color) {
          coordsToCommit.push(cds);
        }
        else {
          return false;
        }
      });

      return accum;
    }, [] as CellCoordinates[]);
  }

  private calcCoords (cds: CellCoordinates, cds2: CellCoordinates): CellCoordinates {
    return [cds[0] + cds2[0], cds[1] + cds2[1]];
  }

  private getCandidateCoords (currentCoords: CellCoordinates, directionCoords: CellCoordinates) {
    const candidateCoords: CellCoordinates[] = [];
    let tryCoords: CellCoordinates = currentCoords.slice();
    let currentCell = this.getCellAt(tryCoords);
    tryCoords = this.calcCoords(tryCoords, directionCoords);

    while (this.isValidCoord(tryCoords)) {
      currentCell = this.getCellAt(tryCoords);

      if (currentCell.isPlaced) {
        candidateCoords.push(tryCoords);
        tryCoords = this.calcCoords(tryCoords, directionCoords);
      } else {
        break;
      }
    }

    return candidateCoords;
  }

  private static get defaultCells () {
    return this.buildCells((ridx: number, cidx: number) => {
      return Cell.Blank();
    });
  }

  private static get newGameCells () {
    return this.buildCells((ridx: number, cidx: number) => {
      return (
        (ridx === 3 && cidx === 3) ? Cell.Black() :
        (ridx === 4 && cidx === 4) ? Cell.Black() :
        (ridx === 3 && cidx === 4) ? Cell.White() :
        (ridx === 4 && cidx === 3) ? Cell.White() :
        Cell.Blank()
      );
    });
  }

  private static get randomCells () {
    return this.buildCells((ridx: number, cidx: number) => {
      const rand = Math.floor(Math.random() * 3);
      return (
        rand === 0 ? Cell.Blank() :
        rand === 1 ? Cell.Black() :
        Cell.White()
      );
    });
  }

  private static buildCells (func: (ri: number, ci: number) => Cell): BoardCells {
    return new Array(8).fill(0).map((row, ridx) => {
      return new Array(8).fill(0).map((col, cidx) => {
        return func(ridx, cidx);
      });
    });
  }
}
