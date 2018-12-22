import { Board, BoardStatus } from "../../domain/Board";
import { Othello, GameStatus } from "../../domain/Othello";
import { Player } from "../../domain/Player";
export interface OthelloStateArgs {
    board: Board;
    gameStatus: GameStatus;
    players: Player[];
    currentPlayer: Player;
}
export declare class OthelloState {
    board: Board;
    gameStatus: GameStatus;
    players: Player[];
    currentPlayer: Player;
    boardStatus: BoardStatus;
    constructor(args: OthelloStateArgs);
    static create(): OthelloState;
    merge(othello: Othello): OthelloState;
    reduce(payload: any): this;
}
//# sourceMappingURL=OthelloState.d.ts.map