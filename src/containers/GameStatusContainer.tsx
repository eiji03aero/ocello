import * as React from "react";

import { GameStatus, Props } from "../components/GameStatus";

import { BaseContainer } from "./BaseContainer";
import { SkipTurnUseCase } from "../usecase/SkipTurnUseCase";
import { NewGameUseCase } from "../usecase/NewGameUseCase";

export class GameStatusContainer extends BaseContainer<Partial<Props>, {}> {
  onSkipTurn = (e: React.SyntheticEvent) => {
    this.useCase(SkipTurnUseCase.create()).execute();
  }

  onNewGame = (e: React.SyntheticEvent) => {
    this.useCase(NewGameUseCase.create()).execute();
  }

  render () {
    return (
      <GameStatus
        currentPlayer={this.props.currentPlayer}
        boardStatus={this.props.boardStatus}
        gameStatus={this.props.gameStatus}
        onSkipTurn={this.onSkipTurn}
        onNewGame={this.onNewGame}
      />
    );
  }
}
