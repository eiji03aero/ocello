"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const enzyme_to_json_1 = require("enzyme-to-json");
const GameStatus_1 = require("../GameStatus");
const Player_1 = require("../../domain/Player");
const Cell_1 = require("../../domain/Cell");
const Disk_1 = require("../../domain/Disk");
const Othello_1 = require("../../domain/Othello");
describe("GameStatus", () => {
    const defaultProps = {
        currentPlayer: Player_1.Player.Black(),
        boardStatus: {
            [Disk_1.DiskColors.White]: 2,
            [Disk_1.DiskColors.Black]: 2,
            [Cell_1.CellState.Blank]: 60,
        },
        gameStatus: Othello_1.GameStatus.PLAYING,
        onSkipTurn: (e) => { },
        onNewGame: (e) => { },
    };
    it("matches snapshot", () => {
        const wrapper = enzyme_1.shallow(React.createElement(GameStatus_1.GameStatus, Object.assign({}, defaultProps)));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
//# sourceMappingURL=GameStatus.spec.js.map