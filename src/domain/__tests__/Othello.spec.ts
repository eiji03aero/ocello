import { Othello } from "../Othello";

describe('Othello', () => {
  it("should create [NewGame]", () => {
    const othello = Othello.NewGame();
    expect(othello).toBeTruthy();
  });

  it("should skip turn", () => {
    const othello = Othello.NewGame();
    const previousPlayer = othello.currentPlayer;
    othello.skipTurn();
    expect(othello.currentPlayer).not.toBe(previousPlayer);
  });
});
