import * as _ from "lodash";

import { Cell } from './Cell';
import { Player } from "./Player";

export type BoardRow = Cell[];
export type BoardCells = BoardRow[];
export type DiskCoordinates = [number, number];

export interface BoardArgs {
  data: BoardCells;
}

export class Board {
  data: BoardCells;

  constructor (args: BoardArgs) {
    this.data = args.data;
  }

  static Blank () { return new Board({ data: this.defaultData }); }
  static NewGame () { return new Board({ data: this.newGameData }); }
  static Random () { return new Board({ data: this.randomData }); }

  placeDisk (coords: DiskCoordinates, player: Player) {
    this.data = this.modifyByCoords(coords, (cell: Cell) => {
      return Cell.fromColor(player.color);
    });
  }

  /* -------------------- Private methods -------------------- */
  private modifyByCoords (
    coords: DiskCoordinates,
    callback: (cell: Cell) => Cell,
  ): BoardCells {
    return _.map(this.data, (row: BoardRow, ridx: number) => {
      return ridx === coords[0]
        ? _.map(row, (cell: Cell, cidx: number) => {
          return cidx === coords[1]
            ? callback(cell)
            : cell;
        })
        : row
    });
  }

  private static get defaultData () {
    return this.buildData((ridx: number, cidx: number) => {
      return Cell.Blank();
    });
  }

  private static get newGameData () {
    return this.buildData((ridx: number, cidx: number) => {
      return (
        (ridx === 3 && cidx === 3) ? Cell.Black() :
        (ridx === 4 && cidx === 4) ? Cell.Black() :
        (ridx === 3 && cidx === 4) ? Cell.White() :
        (ridx === 4 && cidx === 3) ? Cell.White() :
        Cell.Blank()
      );
    });
  }

  private static get randomData () {
    return this.buildData((ridx: number, cidx: number) => {
      const rand = Math.floor(Math.random() * 3);
      return (
        rand === 0 ? Cell.Blank() :
        rand === 1 ? Cell.Black() :
        Cell.White()
      );
    });
  }

  private static buildData (func: (ri: number, ci: number) => Cell): BoardCells {
    return new Array(8).fill(0).map((row, ridx) => {
      return new Array(8).fill(0).map((col, cidx) => {
        return func(ridx, cidx);
      });
    });
  }
}
