export enum CellState {
  BLANK,
  BLACK,
  WHITE,
}

interface CellArgs {
  state?: CellState;
}

export class Cell {
  state: CellState;

  constructor (args: CellArgs) {
    this.state = args.state || CellState.BLANK;
  }

  static Blank () {
    return new Cell({ state: CellState.BLANK });
  }

  static Black () {
    return new Cell({ state: CellState.BLACK });
  }

  static White () {
    return new Cell({ state: CellState.WHITE });
  }

  updateState (state: CellState) {
    this.state = state;
  }
}
