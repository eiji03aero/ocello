"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const _ = require("lodash");
const styled_components_1 = require("styled-components");
const cn = require("classnames");
const colors_1 = require("../utils/colors");
const LoggerStyled = styled_components_1.default.div `
  height: 30vh;
  background-color: ${colors_1.colors.black};
  color: ${colors_1.colors.white};
  overflow-y: scroll;

  .row {
    padding: .6rem 1rem;
    border-top: 1px solid ${colors_1.colors.blueGrey};
    border-bottom: 1px solid ${colors_1.colors.blueGrey};
    &.Error {
      color: ${colors_1.colors.red};
    }
    &.Warn {
      color: ${colors_1.colors.yellow};
    }
  }

  @media only screen and (min-width: 768px) {
    max-width: 450px;
    height: 50vw;
  }
`;
exports.Logger = ({ logs, }) => {
    return (React.createElement(LoggerStyled, null, _.map(logs, (log, idx) => (React.createElement("div", { className: cn("row", [log.level]), key: idx },
        log.createdAt,
        React.createElement("span", { style: { marginLeft: 16 } }),
        log.text)))));
};
//# sourceMappingURL=Logger.js.map