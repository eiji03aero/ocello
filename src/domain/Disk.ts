export enum DiskColors {
  Black = "Black",
  White = "White",
}

export interface DiskArgs {
  color: DiskColors;
}

export class Disk {
  color: DiskColors;

  constructor (args: DiskArgs) {
    this.color = args.color;
  }

  static Black () {
    return new Disk({ color: DiskColors.Black });
  }

  static White () {
    return new Disk({ color: DiskColors.White });
  }
}
