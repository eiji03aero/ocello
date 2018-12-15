import * as React from "react";

import { Board, Props } from "../components/sfcs/Board";

import { BaseContainer } from "./BaseContainer";

export class BoardContainer extends BaseContainer<Partial<Props>, {}> {
  render () {
    return (
      <Board
        board={this.props.board}
      />
    );
  }
}
