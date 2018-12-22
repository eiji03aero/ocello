"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const GameStatus_1 = require("../components/GameStatus");
const BaseContainer_1 = require("./BaseContainer");
const SkipTurnUseCase_1 = require("../usecase/SkipTurnUseCase");
const NewGameUseCase_1 = require("../usecase/NewGameUseCase");
class GameStatusContainer extends BaseContainer_1.BaseContainer {
    constructor() {
        super(...arguments);
        this.onSkipTurn = (e) => {
            this.useCase(SkipTurnUseCase_1.SkipTurnUseCase.create()).execute();
        };
        this.onNewGame = (e) => {
            this.useCase(NewGameUseCase_1.NewGameUseCase.create()).execute();
        };
    }
    render() {
        return (React.createElement(GameStatus_1.GameStatus, { currentPlayer: this.props.currentPlayer, boardStatus: this.props.boardStatus, gameStatus: this.props.gameStatus, onSkipTurn: this.onSkipTurn, onNewGame: this.onNewGame }));
    }
}
exports.GameStatusContainer = GameStatusContainer;
//# sourceMappingURL=GameStatusContainer.js.map