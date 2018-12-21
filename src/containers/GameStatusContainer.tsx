import * as React from "react";

import { GameStatus, Props } from "../components/GameStatus";

import { BaseContainer } from "./BaseContainer";
import { SkipTurnUseCase } from "../usecase/SkipTurnUseCase";

export class GameStatusContainer extends BaseContainer<Partial<Props>, {}> {
  onSkipTurn = (e: React.SyntheticEvent) => {
    this.useCase(SkipTurnUseCase.create()).execute();
  }

  render () {
    return (
      <GameStatus
        currentPlayer={this.props.currentPlayer}
        boardStatus={this.props.boardStatus}
        canSkip={this.props.canSkip}
      onSkipTurn={this.onSkipTurn}
      />
    );
  }
}
