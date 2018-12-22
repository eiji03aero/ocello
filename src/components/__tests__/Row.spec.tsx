import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import * as _ from "lodash";

import { Row } from "../Row";
import { Cell } from "../../domain/Cell";

describe('Row', () => {
  it('matches snapshot', () => {
    const row = _.map(_.fill(new Array(8), 0), (_: number) => Cell.Blank());
    const wrapper = shallow(
      <Row
        row={row}
        rowIndex={0}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
