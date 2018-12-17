import * as React from "react";

import { GameStatus, Props } from "../components/GameStatus";

import { BaseContainer } from "./BaseContainer";

export class GameStatusContainer extends BaseContainer<Partial<Props>, {}> {
  render () {
    return (
      <GameStatus
        currentPlayer={this.props.currentPlayer}
        boardStatus={this.props.boardStatus}
      />
    );
  }
}
