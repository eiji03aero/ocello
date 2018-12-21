import { Board, BoardStatus } from "../../domain/Board";
import { Othello, GameStatus } from "../../domain/Othello";
import { Player } from "../../domain/Player";

export interface OthelloStateArgs {
  board: Board;
  gameStatus: GameStatus;
  players: Player[];
  currentPlayer: Player;
  canSkip: boolean;
}

export class OthelloState {
  board: Board;
  gameStatus: GameStatus;
  players: Player[];
  currentPlayer: Player;
  boardStatus: BoardStatus;
  canSkip: boolean;

  constructor (args: OthelloStateArgs) {
    this.board = args.board;
    this.gameStatus = args.gameStatus;
    this.players = args.players;
    this.currentPlayer = args.currentPlayer;
    this.boardStatus = this.board.getBoardStatus();
    this.canSkip = args.canSkip;
  }

  static create () {
    const othello = Othello.NewGame();
    return new this({
      ...othello,
      canSkip: false,
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
      case "ENABLE_SKIP_TURN":
        return new OthelloState({
          ...(this as OthelloStateArgs),
          canSkip: true,
        });

      case "DISABLE_SKIP_TURN":
        return new OthelloState({
          ...(this as OthelloStateArgs),
          canSkip: false,
        });

      default:
        return this;
    }
  }
}
