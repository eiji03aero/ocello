"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Disk_1 = require("../Disk");
describe('Disk', () => {
    describe('static', () => {
        it('Black', () => {
            const disk = Disk_1.Disk.Black();
            expect(disk.color).toBe(Disk_1.DiskColors.Black);
        });
        it('White', () => {
            const disk = Disk_1.Disk.White();
            expect(disk.color).toBe(Disk_1.DiskColors.White);
        });
    });
});
//# sourceMappingURL=Disk.spec.js.map