import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import * as _ from "lodash";

import { GameStatus } from "../GameStatus";

import { Player } from "../../domain/Player";
import { CellState } from "../../domain/Cell";
import { DiskColors } from "../../domain/Disk";
import { GameStatus as GameStatusEnum } from "../../domain/Othello";

describe("GameStatus", () => {
  const defaultProps = {
    currentPlayer: Player.Black(),
    boardStatus: {
      [DiskColors.White]: 2,
      [DiskColors.Black]: 2,
      [CellState.Blank]: 60,
    },
    gameStatus: GameStatusEnum.PLAYING,
    onSkipTurn: (e: React.SyntheticEvent) => {},
    onNewGame: (e: React.SyntheticEvent) => {},
  };

  it("matches snapshot", () => {
    const wrapper = shallow( <GameStatus { ...defaultProps } />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
