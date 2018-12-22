"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const enzyme_to_json_1 = require("enzyme-to-json");
const Board_1 = require("../Board");
const Board_2 = require("../../domain/Board");
describe('Board', () => {
    it('matches snapshot', () => {
        const board = Board_2.Board.NewGame();
        const wrapper = enzyme_1.shallow(React.createElement(Board_1.Board, { board: board }));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
//# sourceMappingURL=Board.spec.js.map