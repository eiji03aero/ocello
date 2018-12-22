"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const cn = require("classnames");
const styled_components_1 = require("styled-components");
const colors_1 = require("../utils/colors");
const DiskStyled = styled_components_1.default.div `
  width: 85%;
  height: 85%;
  border-radius: 50%;
  background-color: transparent;

  &.Black {
    background-color: ${colors_1.colors.black};
  }

  &.White {
    background-color: ${colors_1.colors.white};
  }
`;
exports.Disk = ({ classNames, }) => {
    return (React.createElement(DiskStyled, { className: cn(classNames) }));
};
//# sourceMappingURL=Disk.js.map