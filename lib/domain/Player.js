"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Disk_1 = require("./Disk");
class Player {
    constructor(args) {
        this.color = args.color;
    }
    static Black() { return new Player({ color: Disk_1.DiskColors.Black }); }
    static White() { return new Player({ color: Disk_1.DiskColors.White }); }
}
exports.Player = Player;
//# sourceMappingURL=Player.js.map