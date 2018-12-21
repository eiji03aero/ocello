import * as React from "react";
import styled from "styled-components";

import { Player } from "../domain/Player";
import { BoardStatus } from "../domain/Board";
import { colors } from "../utils/colors";

const GameStatusStyled = styled.div`
  display: inline-block;
  padding: 8px 0 4px;

  .box {
    padding-left: 4px;
    border-left: 4px solid ${colors.green};
  }

  .box + .box {
    margin-left: 16px;
  }
`;

export interface Props {
  currentPlayer: Player;
  boardStatus: BoardStatus;
  canSkip: boolean;
  onSkipTurn: (e: React.SyntheticEvent) => void;
}

export const GameStatus: React.SFC<Props> = ({
  currentPlayer,
  boardStatus,
  canSkip,
  onSkipTurn,
}: Props) => {
  return (
    <GameStatusStyled>
      <span className="box">
        Current player: { currentPlayer.color }
      </span>
      <span className="box">
        Black: {boardStatus.Black}
      </span>
      <span className="box">
        White: {boardStatus.White}
      </span>
      <span className="box">
        Blank: {boardStatus.Blank}
      </span>
      { canSkip && (
        <button onClick={onSkipTurn}>
          Skip turn
        </button>
      )}
    </GameStatusStyled>
  );
};
