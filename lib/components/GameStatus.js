"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const Othello_1 = require("../domain/Othello");
const colors_1 = require("../utils/colors");
const GameStatusStyled = styled_components_1.default.div `
  display: inline-block;
  padding: 8px 0 4px;

  .box {
    padding-left: 4px;
    border-left: 4px solid ${colors_1.colors.green};
  }

  .box + .box {
    margin-left: 16px;
  }
`;
exports.GameStatus = ({ currentPlayer, boardStatus, gameStatus, onSkipTurn, onNewGame, }) => {
    return (React.createElement(GameStatusStyled, null,
        React.createElement("span", { className: "box" },
            "Current player: ",
            currentPlayer.color),
        React.createElement("span", { className: "box" },
            "Black: ",
            boardStatus.Black),
        React.createElement("span", { className: "box" },
            "White: ",
            boardStatus.White),
        React.createElement("span", { className: "box" },
            "Blank: ",
            boardStatus.Blank),
        React.createElement("button", { onClick: onNewGame }, "New game"),
        React.createElement("button", { onClick: onSkipTurn, disabled: !(gameStatus === Othello_1.GameStatus.CANT_PLACE) }, "Skip turn")));
};
//# sourceMappingURL=GameStatus.js.map