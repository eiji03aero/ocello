"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Board_1 = require("../components/Board");
const BaseContainer_1 = require("./BaseContainer");
class BoardContainer extends BaseContainer_1.BaseContainer {
    render() {
        return (React.createElement(Board_1.Board, { board: this.props.board }));
    }
}
exports.BoardContainer = BoardContainer;
//# sourceMappingURL=BoardContainer.js.map