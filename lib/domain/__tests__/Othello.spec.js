"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Othello_1 = require("../Othello");
describe('Othello', () => {
    it("should create [NewGame]", () => {
        const othello = Othello_1.Othello.NewGame();
        expect(othello).toBeTruthy();
    });
    it("should skip turn", () => {
        const othello = Othello_1.Othello.NewGame();
        const previousPlayer = othello.currentPlayer;
        othello.skipTurn();
        expect(othello.currentPlayer).not.toBe(previousPlayer);
    });
});
//# sourceMappingURL=Othello.spec.js.map