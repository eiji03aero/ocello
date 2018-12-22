"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const enzyme_to_json_1 = require("enzyme-to-json");
const _ = require("lodash");
const Row_1 = require("../Row");
const Cell_1 = require("../../domain/Cell");
describe('Row', () => {
    it('matches snapshot', () => {
        const row = _.map(_.fill(new Array(8), 0), (_) => Cell_1.Cell.Blank());
        const wrapper = enzyme_1.shallow(React.createElement(Row_1.Row, { row: row, rowIndex: 0 }));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
//# sourceMappingURL=Row.spec.js.map