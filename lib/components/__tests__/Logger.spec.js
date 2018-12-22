"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const enzyme_to_json_1 = require("enzyme-to-json");
const Logger_1 = require("../Logger");
const Logger_2 = require("../../domain/Logger");
describe('Logger', () => {
    it('matches snapshot', () => {
        const logger = Logger_2.Logger.Blank();
        logger.log('test');
        const wrapper = enzyme_1.shallow(React.createElement(Logger_1.Logger, { logs: logger.logs }));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
//# sourceMappingURL=Logger.spec.js.map