import * as React from "react";

import { Cell, Props } from "../components/Cell";

import { BaseContainer } from "./BaseContainer";
import { CellCoordinates } from "../domain/Board";
import { PlaceDiskUseCase } from "../usecase/PlaceDiskUseCase";
import appLocator from "../AppLocator";

export class CellContainer extends BaseContainer<Partial<Props>, {}> {
  checkIfPlaceable = () => {
    const { rowIndex, columnIndex } = this.props;
    const { board, currentPlayer } = appLocator.state.othello;
    return board.checkIfPlaceable([rowIndex, columnIndex] as CellCoordinates, currentPlayer.color)
  }

  placeDisk = (coords: CellCoordinates) => {
    this.useCase(PlaceDiskUseCase.create()).execute(coords);
  }

  render () {
    return (
      <Cell
        cell={this.props.cell}
        rowIndex={this.props.rowIndex}
        columnIndex={this.props.columnIndex}
        onPlaceDisk={this.placeDisk}
        placeable={this.checkIfPlaceable()}
      />
    );
  }
}
