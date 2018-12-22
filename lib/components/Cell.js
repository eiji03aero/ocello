"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const cn = require("classnames");
const styled_components_1 = require("styled-components");
const Disk_1 = require("./Disk");
const colors_1 = require("../utils/colors");
const CellStyled = styled_components_1.default.div `
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${colors_1.colors.green};
  border: 1px solid ${colors_1.colors.black};

  &.placeable {
    &:hover {
      cursor: pointer;
      opacity: .8;
    }
  }

  &.not-placeable {
    &:hover {
      pointer-events: none;
    }
  }
`;
exports.Cell = ({ cell, rowIndex, columnIndex, onPlaceDisk, placeable, }) => {
    const classNames = cn(placeable ? 'placeable' : 'not-placeable');
    const onClickHandler = (e) => {
        if (placeable) {
            onPlaceDisk([rowIndex, columnIndex]);
        }
    };
    return (React.createElement(CellStyled, { className: classNames, onClick: onClickHandler },
        React.createElement(Disk_1.Disk, { classNames: cell.color })));
};
//# sourceMappingURL=Cell.js.map