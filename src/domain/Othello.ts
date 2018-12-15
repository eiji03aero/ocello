import { Board, CellCoordinates } from "./Board";
import { Player } from "./Player";

export enum GameStatus {
  PLAYING,
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

  constructor (args: OthelloArgs) {
    this.board = args.board;
    this.gameStatus = args.gameStatus;
    this.players = args.players;
    this.currentPlayer = args.players[0];
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

  /* -------------------- Private methods -------------------- */
  private advanceCurrentPlayer () {
    this.currentPlayer = this.currentPlayer === this.players[0]
      ? this.players[1]
      : this.players[0];
  }
}
