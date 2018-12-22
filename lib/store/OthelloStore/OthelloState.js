"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Othello_1 = require("../../domain/Othello");
class OthelloState {
    constructor(args) {
        this.board = args.board;
        this.gameStatus = args.gameStatus;
        this.players = args.players;
        this.currentPlayer = args.currentPlayer;
        this.boardStatus = this.board.getBoardStatus();
    }
    static create() {
        const othello = Othello_1.Othello.NewGame();
        return new this(Object.assign({}, othello));
    }
    merge(othello) {
        return new OthelloState(Object.assign({}, this, othello));
    }
    reduce(payload) {
        switch (payload.type) {
            default:
                return this;
        }
    }
}
exports.OthelloState = OthelloState;
//# sourceMappingURL=OthelloState.js.map