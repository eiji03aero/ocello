"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _ = require("lodash");
const styled_components_1 = require("styled-components");
const CellContainer_1 = require("../containers/CellContainer");
const RowStyled = styled_components_1.default.div `
  display: flex;
  flex: 1;
`;
exports.Row = ({ row, rowIndex, }) => {
    return (React.createElement(RowStyled, null, _.map(row, (cell, idx) => (React.createElement(CellContainer_1.CellContainer, { key: idx, cell: cell, rowIndex: rowIndex, columnIndex: idx })))));
};
//# sourceMappingURL=Row.js.map