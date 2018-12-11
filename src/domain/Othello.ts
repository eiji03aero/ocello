import { Board } from "./Board";

export enum GameStatus {
  PLAYING,
  FINISHED,
}

export enum UserTurn {
  ONE,
  TWO,
}

export interface OthelloArgs {
  board: Board;
  gameStatus: GameStatus;
  userTurn: UserTurn;
}

export class Othello {
  board: Board;
  gameStatus: GameStatus;
  userTurn: UserTurn;

  constructor (args: OthelloArgs) {
    this.board = args.board;
    this.gameStatus = args.gameStatus;
    this.userTurn = args.userTurn;
  }

  static NewGame () {
    return new Othello({
      board: Board.Blank(),
      gameStatus: GameStatus.PLAYING,
      userTurn: UserTurn.ONE,
    });
  }

  static RandomGame () {
    return new Othello({
      board: Board.Random(),
      gameStatus: GameStatus.PLAYING,
      userTurn: UserTurn.ONE,
    });
  }
}
