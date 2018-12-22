"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Player_1 = require("../Player");
const Disk_1 = require("../Disk");
describe('Player', () => {
    describe('static', () => {
        it('Black', () => {
            const player = Player_1.Player.Black();
            expect(player.color).toBe(Disk_1.DiskColors.Black);
        });
        it('White', () => {
            const player = Player_1.Player.White();
            expect(player.color).toBe(Disk_1.DiskColors.White);
        });
    });
});
//# sourceMappingURL=Player.spec.js.map