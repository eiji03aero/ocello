import { DiskColors } from "./Disk";
export interface PlayerArgs {
    color: DiskColors;
}
export declare class Player {
    color: DiskColors;
    constructor(args: PlayerArgs);
    static Black(): Player;
    static White(): Player;
}
//# sourceMappingURL=Player.d.ts.map