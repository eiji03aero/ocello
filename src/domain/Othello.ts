import { Board, CellCoordinates } from "./Board";
import { Player } from "./Player";

export enum GameStatus {
  PLAYING,
  CANT_PLACE,
  IMPOSSIBLE,
  FINISHED,
}

export interface OthelloArgs {
  board: Board;
  gameStatus: GameStatus;
  players: Player[];
}

export class Othello {
  board: Board;
  gameStatus: GameStatus;
  players: Player[];
  currentPlayer: Player;
  lastPlayer: Player;

  constructor (args: OthelloArgs) {
    this.board = args.board;
    this.gameStatus = args.gameStatus;
    this.players = args.players;
    this.currentPlayer = args.players[0];
    this.lastPlayer = args.players[1];
  }

  static NewGame () {
    return new Othello({
      board: Board.NewGame(),
      gameStatus: GameStatus.PLAYING,
      players: [Player.Black(), Player.White()],
    });
  }

  static RandomGame () {
    return new Othello({
      board: Board.Random(),
      gameStatus: GameStatus.PLAYING,
      players: [Player.Black(), Player.White()],
    });
  }

  placeDisk (coords: CellCoordinates) {
    this.board.placeDisk(coords, this.currentPlayer);
    this.advanceCurrentPlayer();
  }

  checkGameStatus () {
    const boardStatus = this.board.getBoardStatus();
    const placeableNumber = this.board.calcPlaceableCells(this.currentPlayer);

    if (boardStatus.Blank === 0) {
      this.gameStatus = GameStatus.FINISHED;
    }
    else if (placeableNumber === 0 ) {
      if (boardStatus[this.currentPlayer.color] === 0) {
        this.gameStatus = GameStatus.IMPOSSIBLE;
      } else {
        this.gameStatus = GameStatus.CANT_PLACE;
      }
    }
    else {
      this.gameStatus = GameStatus.PLAYING;
    }
  }

  skipTurn () {
    this.advanceCurrentPlayer();
  }

  get isPlaying () { return this.gameStatus === GameStatus.PLAYING; }
  get isImpossible () { return this.gameStatus === GameStatus.IMPOSSIBLE; }
  get isCantPlace () { return this.gameStatus === GameStatus.CANT_PLACE; }
  get isFinished () { return this.gameStatus === GameStatus.FINISHED; }

  /* -------------------- Private methods -------------------- */
  private advanceCurrentPlayer () {
    this.lastPlayer = this.currentPlayer;
    this.currentPlayer = this.currentPlayer === this.players[0]
      ? this.players[1]
      : this.players[0];
  }
}
