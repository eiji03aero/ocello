"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _ = require("lodash");
const styled_components_1 = require("styled-components");
const Row_1 = require("./Row");
const colors_1 = require("../utils/colors");
const BoardStyled = styled_components_1.default.div `
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors_1.colors.black};

  @media only screen and (max-width: 767px) {
    width: 95vw;
    height: 95vw;
  }

  @media only screen and (min-width: 768px) {
    width: 50vw;
    height: 50vw;
  }
`;
exports.Board = ({ board, }) => {
    return (React.createElement(BoardStyled, null, _.map(board.cells, (row, idx) => (React.createElement(Row_1.Row, { key: idx, rowIndex: idx, row: row })))));
};
//# sourceMappingURL=Board.js.map