export declare enum DiskColors {
    Black = "Black",
    White = "White"
}
export interface DiskArgs {
    color: DiskColors;
}
export declare class Disk {
    color: DiskColors;
    constructor(args: DiskArgs);
    static Black(): Disk;
    static White(): Disk;
}
//# sourceMappingURL=Disk.d.ts.map