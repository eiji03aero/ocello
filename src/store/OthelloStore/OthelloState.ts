import { Board } from "../../domain/Board";
import { Othello, GameStatus, UserTurn } from "../../domain/Othello";

export interface OthelloStateArgs {
  board: Board;
  gameStatus: GameStatus;
  userTurn: UserTurn;
}

export class OthelloState {
  board: Board;
  gameStatus: GameStatus;
  userTurn: UserTurn;

  constructor (args: OthelloStateArgs) {
    this.board = args.board;
    this.gameStatus = args.gameStatus;
    this.userTurn = args.userTurn;
  }

  merge (othello: Othello) {
    return new OthelloState({
      ...(this as OthelloStateArgs),
      ...(othello as OthelloStateArgs),
    });
  }

  reduce (payload: any) {
    switch (payload.type) {
      case "UPDATE_BOARD":
        return new OthelloState({
          ...(this as OthelloStateArgs),
        });

      default:
        return this;
    }
  }
}
