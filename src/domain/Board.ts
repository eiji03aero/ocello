import * as _ from "lodash";

import { Cell } from './Cell';
import { Player } from "./Player";
import { CellManager } from "./CellsManager";

export type BoardRow = Cell[];
export type BoardCells = BoardRow[];
export type CellCoordinates = [number, number];

export interface BoardArgs {
  cells: BoardCells;
}

export class Board {
  cells: BoardCells;

  constructor (args: BoardArgs) {
    this.cells = args.cells;
  }

  static Blank () { return new Board({ cells: this.defaultCells }); }
  static NewGame () { return new Board({ cells: this.newGameCells }); }
  static Random () { return new Board({ cells: this.randomCells }); }

  placeDisk (coords: CellCoordinates, player: Player) {
    if (!this.checkIfPlaceable(coords, player)) return false;

    this.cells = this.mapCells((cell: Cell, ridx: number, cidx: number) => {
      return coords[0] === ridx && coords[1] === cidx
        ? Cell.fromColor(player.color)
        : cell;
    });
  }

  checkIfPlaceable (coords: CellCoordinates, player: Player) {
    player ? 1 + 1 : 1 + 0;
    const cell = this.getCellAt(coords);
    if ( _.isNil(cell) || cell.isPlaced) return false;

    return CellManager.checkIfPlaceable(coords, this.cells);
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
