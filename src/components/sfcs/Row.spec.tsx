import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Row } from "./Row";
import { Cell } from "../../domain/Cell";

describe('Row', () => {
  it('matches snapshot', () => {
    const row = new Array(8).fill(0).map((_: number) => Cell.Blank());
    const wrapper = shallow(
      <Row
        row={row}
        rowIndex={0}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
