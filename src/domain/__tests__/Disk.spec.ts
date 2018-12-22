import { Disk, DiskColors } from "../Disk";

describe('Disk', () => {
  describe('static', () => {
    it('Black', () => {
      const disk = Disk.Black();

      expect(disk.color).toBe(DiskColors.Black);
    });

    it('White', () => {
      const disk = Disk.White();

      expect(disk.color).toBe(DiskColors.White);
    });
  });
});
