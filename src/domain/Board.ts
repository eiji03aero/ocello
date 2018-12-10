import { Cell } from './Cell';

export interface BoardArgs {
  data: Cell[][];
}

export class Board {
  data: Cell[][];

  constructor (args: BoardArgs) {
    this.data = args.data;
  }

  static Blank () {
    return new Board({ data: this.defaultData });
  }

  private static get defaultData () {
    return new Array(8).fill(0).map(row => {
      return new Array(8).fill(0).map(col => {
        return Cell.Blank();
      })
    })
  }
}
