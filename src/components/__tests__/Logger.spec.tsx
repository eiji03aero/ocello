import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Logger } from "../Logger";

import { Logger as LoggerClass } from "../../domain/Logger";

describe('Logger', () => {
  it('matches snapshot', () => {
    const logger = LoggerClass.Blank();
    logger.log('test');
    const wrapper = shallow( <Logger logs={logger.logs} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
