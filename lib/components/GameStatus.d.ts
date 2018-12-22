import * as React from "react";
import { Player } from "../domain/Player";
import { GameStatus as GameStatusEnum } from "../domain/Othello";
import { BoardStatus } from "../domain/Board";
export interface Props {
    currentPlayer: Player;
    boardStatus: BoardStatus;
    gameStatus: GameStatusEnum;
    onSkipTurn: (e: React.SyntheticEvent) => void;
    onNewGame: (e: React.SyntheticEvent) => void;
}
export declare const GameStatus: React.SFC<Props>;
//# sourceMappingURL=GameStatus.d.ts.map