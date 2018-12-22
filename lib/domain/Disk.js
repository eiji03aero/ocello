"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DiskColors;
(function (DiskColors) {
    DiskColors["Black"] = "Black";
    DiskColors["White"] = "White";
})(DiskColors = exports.DiskColors || (exports.DiskColors = {}));
class Disk {
    constructor(args) {
        this.color = args.color;
    }
    static Black() {
        return new Disk({ color: DiskColors.Black });
    }
    static White() {
        return new Disk({ color: DiskColors.White });
    }
}
exports.Disk = Disk;
//# sourceMappingURL=Disk.js.map