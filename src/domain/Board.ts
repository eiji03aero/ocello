import { Cell } from './Cell';

export type BoardCells = Cell[][];

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
  static Random () { return new Board({ data: this.randomData }); }

  private static get defaultData () {
    return new Array(8).fill(0).map(row => {
      return new Array(8).fill(0).map(col => {
        return Cell.Blank();
      });
    });
  }

  private static get randomData () {
    return new Array(8).fill(0).map(row => {
      return new Array(8).fill(0).map(col => {
        const rand = Math.floor(Math.random() * 3);
        return (
          rand === 0 ? Cell.Blank() :
          rand === 1 ? Cell.Black() :
          Cell.White()
        );
      });
    });
  }
}
