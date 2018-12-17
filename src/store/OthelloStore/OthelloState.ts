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

  merge (othello: Othello) {
    return new OthelloState({
      ...(this as OthelloStateArgs),
      ...(othello as OthelloStateArgs),
    });
  }

  reduce (payload: any) {
    switch (payload.type) {
      default:
        return this;
    }
  }
}
