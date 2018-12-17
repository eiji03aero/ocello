import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Board } from "./Board";
import { Board as BoardClass } from "../../domain/Board";

describe('Board', () => {
  it('matches snapshot', () => {
    const board = BoardClass.NewGame();
    const wrapper = shallow(
      <Board
        board={board}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
