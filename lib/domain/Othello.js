"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Board_1 = require("./Board");
const Player_1 = require("./Player");
var GameStatus;
(function (GameStatus) {
    GameStatus[GameStatus["PLAYING"] = 0] = "PLAYING";
    GameStatus[GameStatus["CANT_PLACE"] = 1] = "CANT_PLACE";
    GameStatus[GameStatus["IMPOSSIBLE"] = 2] = "IMPOSSIBLE";
    GameStatus[GameStatus["FINISHED"] = 3] = "FINISHED";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
class Othello {
    constructor(args) {
        this.board = args.board;
        this.gameStatus = args.gameStatus;
        this.players = args.players;
        this.currentPlayer = args.players[0];
        this.lastPlayer = args.players[1];
    }
    static NewGame() {
        return new Othello({
            board: Board_1.Board.NewGame(),
            gameStatus: GameStatus.PLAYING,
            players: [Player_1.Player.Black(), Player_1.Player.White()],
        });
    }
    static RandomGame() {
        return new Othello({
            board: Board_1.Board.Random(),
            gameStatus: GameStatus.PLAYING,
            players: [Player_1.Player.Black(), Player_1.Player.White()],
        });
    }
    placeDisk(coords) {
        this.board.placeDisk(coords, this.currentPlayer.color);
        this.advanceCurrentPlayer();
    }
    checkGameStatus() {
        const boardStatus = this.board.getBoardStatus();
        const placeableNumber = this.board.calcPlaceableCells(this.currentPlayer.color);
        if (boardStatus.Blank === 0) {
            this.gameStatus = GameStatus.FINISHED;
        }
        else if (placeableNumber === 0) {
            if (boardStatus[this.currentPlayer.color] === 0) {
                this.gameStatus = GameStatus.IMPOSSIBLE;
            }
            else {
                this.gameStatus = GameStatus.CANT_PLACE;
            }
        }
        else {
            this.gameStatus = GameStatus.PLAYING;
        }
    }
    skipTurn() {
        this.advanceCurrentPlayer();
    }
    get isPlaying() { return this.gameStatus === GameStatus.PLAYING; }
    get isImpossible() { return this.gameStatus === GameStatus.IMPOSSIBLE; }
    get isCantPlace() { return this.gameStatus === GameStatus.CANT_PLACE; }
    get isFinished() { return this.gameStatus === GameStatus.FINISHED; }
    /* -------------------- Private methods -------------------- */
    advanceCurrentPlayer() {
        this.lastPlayer = this.currentPlayer;
        this.currentPlayer = this.currentPlayer === this.players[0]
            ? this.players[1]
            : this.players[0];
    }
}
exports.Othello = Othello;
//# sourceMappingURL=Othello.js.map