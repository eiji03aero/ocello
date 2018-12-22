import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Disk } from "../Disk";

describe('Disk', () => {
  it('matches snapshot', () => {
    const wrapper = shallow(
      <Disk
        classNames={'Black'}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
