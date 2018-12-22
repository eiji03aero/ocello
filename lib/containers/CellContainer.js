"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Cell_1 = require("../components/Cell");
const BaseContainer_1 = require("./BaseContainer");
const PlaceDiskUseCase_1 = require("../usecase/PlaceDiskUseCase");
const AppLocator_1 = require("../AppLocator");
class CellContainer extends BaseContainer_1.BaseContainer {
    constructor() {
        super(...arguments);
        this.checkIfPlaceable = () => {
            const { rowIndex, columnIndex } = this.props;
            const { board, currentPlayer } = AppLocator_1.default.state.othello;
            return board.checkIfPlaceable([rowIndex, columnIndex], currentPlayer.color);
        };
        this.placeDisk = (coords) => {
            this.useCase(PlaceDiskUseCase_1.PlaceDiskUseCase.create()).execute(coords);
        };
    }
    render() {
        return (React.createElement(Cell_1.Cell, { cell: this.props.cell, rowIndex: this.props.rowIndex, columnIndex: this.props.columnIndex, onPlaceDisk: this.placeDisk, placeable: this.checkIfPlaceable() }));
    }
}
exports.CellContainer = CellContainer;
//# sourceMappingURL=CellContainer.js.map