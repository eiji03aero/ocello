import { Board, BoardStatus } from "../../domain/Board";
import { Othello, GameStatus } from "../../domain/Othello";
import { Player } from "../../domain/Player";

export interface OthelloStateArgs {
  board: Board;
  gameStatus: GameStatus;
  players: Player[];
  currentPlayer: Player;
}

export class OthelloState {
  board: Board;
  gameStatus: GameStatus;
  players: Player[];
  currentPlayer: Player;
  boardStatus: BoardStatus;

  constructor (args: OthelloStateArgs) {
    this.board = args.board;
    this.gameStatus = args.gameStatus;
    this.players = args.players;
    this.currentPlayer = args.currentPlayer;
    this.boardStatus = this.board.getBoardStatus();
  }

  static create () {
    const othello = Othello.NewGame();
    return new this({
      ...othello,
    });
  }

  merge (othello: Othello) {
    return new OthelloState({
      ...(this as OthelloStateArgs),
      ...othello,
    });
  }

  reduce (payload: any) {
    switch (payload.type) {
      default:
        return this;
    }
  }
}
