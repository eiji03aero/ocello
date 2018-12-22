"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const styled_components_1 = require("styled-components");
const BoardContainer_1 = require("./containers/BoardContainer");
const GameStatusContainer_1 = require("./containers/GameStatusContainer");
const Logger_1 = require("./components/Logger");
const AppStyled = styled_components_1.default.div `
  display: flex;
  flex-direction: row;

  .main {}
  .side { flex: 1; }

  .main + .side {
    margin-left: 1rem;
  }

  @media screen and (max-width: 767px) {
    flex-direction: column;
    .main + .side {
      margin-top: 1rem;
      margin-left: 0;
    }
  }
`;
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = props.appContext.getState();
    }
    componentDidMount() {
        this.props.appContext.onChange(() => {
            this.setState(this.props.appContext.getState());
        });
    }
    render() {
        const { board, currentPlayer, boardStatus, gameStatus, } = this.state.othello;
        const { logs, } = this.state.logger;
        return (React.createElement(AppStyled, null,
            React.createElement("div", { className: "main" },
                React.createElement(BoardContainer_1.BoardContainer, { board: board }),
                React.createElement(GameStatusContainer_1.GameStatusContainer, { currentPlayer: currentPlayer, boardStatus: boardStatus, gameStatus: gameStatus })),
            React.createElement("div", { className: "side" },
                React.createElement(Logger_1.Logger, { logs: logs }))));
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map