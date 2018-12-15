import { Disk, DiskColors } from "./Disk";

export enum CellState {
  Blank = "Blank",
  Placed = "Placed",
}

interface CellArgs {
  state: CellState;
  disk?: Disk;
}

export class Cell {
  state: CellState;
  disk: Disk | null;

  constructor (args: CellArgs) {
    this.state = args.state || CellState.Blank;
    this.disk = args.disk || null;
  }

  static Blank () {
    return new Cell({ state: CellState.Blank });
  }

  static Black () {
    return new Cell({ state: CellState.Placed, disk: Disk.Black() });
  }

  static White () {
    return new Cell({ state: CellState.Placed, disk: Disk.White() });
  }

  static fromColor (color: DiskColors) {
    return new Cell({ state: CellState.Placed, disk: new Disk({ color: color })});
  }

  get color () {
    return this.state === CellState.Placed
      ? this.disk.color
      : '';
  }

  get isBlank () {
    return this.state === CellState.Blank;
  }

  get isPlaced () {
    return this.state === CellState.Placed;
  }
}
