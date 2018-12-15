import * as React from "react";

import { Board, Props } from "../components/sfcs/Board";

import { BaseContainer } from "./BaseContainer";
import { DiskCoordinates } from "../domain/Board";
import { PlaceDiskUseCase } from "../usecase/PlaceDiskUseCase";

export class BoardContainer extends BaseContainer<Partial<Props>, {}> {
  placeDisk = (coords: DiskCoordinates) => {
    this.useCase(PlaceDiskUseCase.create()).execute(coords);
  }

  render () {
    return (
      <Board
        board={this.props.board}
        onPlaceDisk={this.placeDisk}
      />
    );
  }
}
