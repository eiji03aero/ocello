import { DiskColors } from "./Disk";

export interface PlayerArgs {
  color: DiskColors;
}

export class Player {
  color: DiskColors;

  constructor (args: PlayerArgs) {
    this.color = args.color;
  }

  static Black () { return new Player({ color: DiskColors.Black }); }
  static White () { return new Player({ color: DiskColors.White }); }
}
