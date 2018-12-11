export enum CellState {
  Blank = "Blank",
  Black = "Black",
  White = "White",
}

interface CellArgs {
  state: CellState;
}

export class Cell {
  state: CellState;

  constructor (args: CellArgs) {
    this.state = args.state || CellState.Blank;
  }

  static Blank () {
    return new Cell({ state: CellState.Blank });
  }

  static Black () {
    return new Cell({ state: CellState.Black });
  }

  static White () {
    return new Cell({ state: CellState.White });
  }

  updateState (state: CellState) {
    this.state = state;
  }
}
