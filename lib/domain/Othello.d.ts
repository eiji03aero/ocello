import { Board, CellCoordinates } from "./Board";
import { Player } from "./Player";
export declare enum GameStatus {
    PLAYING = 0,
    CANT_PLACE = 1,
    IMPOSSIBLE = 2,
    FINISHED = 3
}
export interface OthelloArgs {
    board: Board;
    gameStatus: GameStatus;
    players: Player[];
}
export declare class Othello {
    board: Board;
    gameStatus: GameStatus;
    players: Player[];
    currentPlayer: Player;
    lastPlayer: Player;
    constructor(args: OthelloArgs);
    static NewGame(): Othello;
    static RandomGame(): Othello;
    placeDisk(coords: CellCoordinates): void;
    checkGameStatus(): void;
    skipTurn(): void;
    readonly isPlaying: boolean;
    readonly isImpossible: boolean;
    readonly isCantPlace: boolean;
    readonly isFinished: boolean;
    private advanceCurrentPlayer;
}
//# sourceMappingURL=Othello.d.ts.map