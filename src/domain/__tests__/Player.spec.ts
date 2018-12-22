import { Player } from "../Player";
import { DiskColors } from "../Disk";

describe('Player', () => {
  describe('static', () => {
    it('Black', () => {
      const player = Player.Black();

      expect(player.color).toBe(DiskColors.Black);
    });

    it('White', () => {
      const player = Player.White();

      expect(player.color).toBe(DiskColors.White);
    });
  });
});
