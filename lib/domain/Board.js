"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const Cell_1 = require("./Cell");
const Disk_1 = require("./Disk");
class Board {
    constructor(args) {
        this.cells = args.cells;
    }
    static Blank() { return new Board({ cells: this.defaultCells }); }
    static NewGame() { return new Board({ cells: this.newGameCells }); }
    static Random() { return new Board({ cells: this.randomCells }); }
    checkIfPlaceable(coords, color) {
        const cell = this.getCellAt(coords);
        if (_.isNil(cell) || cell.isPlaced)
            return false;
        const disksToBeTurned = this.computeCoordsToBeTurned(coords, color);
        return disksToBeTurned.length > 0;
    }
    placeDisk(coords, color) {
        if (!this.checkIfPlaceable(coords, color))
            return false;
        const coordsToBeTurned = this.computeCoordsToBeTurned(coords, color);
        const allCoordsToBeTurned = _.concat(coordsToBeTurned, [coords]);
        this.cells = this.mapCells((cell, ridx, cidx) => {
            return this.includesCoords(allCoordsToBeTurned, [ridx, cidx])
                ? Cell_1.Cell.fromColor(color)
                : cell;
        });
    }
    calcPlaceableCells(color) {
        let cellsToPlace = 0;
        this.mapCells((cell, ridx, cidx) => {
            if (this.checkIfPlaceable([ridx, cidx], color)) {
                cellsToPlace += 1;
            }
            return cell;
        });
        return cellsToPlace;
    }
    getBoardStatus() {
        return _.reduce(this.allCells, (bs, cell) => {
            if (cell.color === Disk_1.DiskColors.Black) {
                bs[Disk_1.DiskColors.Black] += 1;
            }
            else if (cell.color === Disk_1.DiskColors.White) {
                bs[Disk_1.DiskColors.White] += 1;
            }
            else {
                bs[Cell_1.CellState.Blank] += 1;
            }
            return bs;
        }, this.blankBoardStatus);
    }
    /* -------------------- Private methods -------------------- */
    get allCells() {
        return _.flatten(this.cells);
    }
    get blankBoardStatus() {
        return {
            [Cell_1.CellState.Blank]: 0,
            [Disk_1.DiskColors.Black]: 0,
            [Disk_1.DiskColors.White]: 0,
        };
    }
    getCellAt(coords) {
        return this.cells[coords[0]][coords[1]];
    }
    mapCells(callback) {
        return _.map(this.cells, (row, ridx) => {
            return _.map(row, (cell, cidx) => {
                return callback(cell, ridx, cidx);
            });
        });
    }
    includesCoords(coordsArray, coords) {
        return _.some(coordsArray, (cds) => coords[0] === cds[0] && coords[1] === cds[1]);
    }
    isValidCoord(coords) {
        return (coords[0] >= Board.LowerEnd &&
            coords[1] >= Board.LowerEnd &&
            coords[0] <= Board.HigherEnd &&
            coords[1] <= Board.HigherEnd);
    }
    getAvailableDirectionCoords(coords) {
        return _.filter(Board.AroundCoords, (ac) => {
            const tryCoordinates = [coords[0] + ac[0], coords[1] + ac[1]];
            return this.isValidCoord(tryCoordinates);
        });
    }
    computeCoordsToBeTurned(currentCoords, color) {
        const availableDirectionCoords = this.getAvailableDirectionCoords(currentCoords);
        return _.reduce(availableDirectionCoords, (accum, cds) => {
            const candidateCoords = this.getCandidateCoords(currentCoords, cds);
            if (candidateCoords.length < 2)
                return accum;
            if (this.getCellAt(candidateCoords[0]).color === color)
                return accum;
            const coordsToCommit = [candidateCoords[0]];
            _.forEach(candidateCoords.slice(1), (cds) => {
                const cell = this.getCellAt(cds);
                if (cell.color === color) {
                    _.forEach(coordsToCommit, (ctc) => accum.push(ctc));
                    return false;
                }
                else if (cell.color !== color) {
                    coordsToCommit.push(cds);
                }
                else {
                    return false;
                }
            });
            return accum;
        }, []);
    }
    calcCoords(cds, cds2) {
        return [cds[0] + cds2[0], cds[1] + cds2[1]];
    }
    getCandidateCoords(currentCoords, directionCoords) {
        const candidateCoords = [];
        let tryCoords = currentCoords.slice();
        let currentCell = this.getCellAt(tryCoords);
        tryCoords = this.calcCoords(tryCoords, directionCoords);
        while (this.isValidCoord(tryCoords)) {
            currentCell = this.getCellAt(tryCoords);
            if (currentCell.isPlaced) {
                candidateCoords.push(tryCoords);
                tryCoords = this.calcCoords(tryCoords, directionCoords);
            }
            else {
                break;
            }
        }
        return candidateCoords;
    }
    static get defaultCells() {
        return this.buildCells((ridx, cidx) => {
            return Cell_1.Cell.Blank();
        });
    }
    static get newGameCells() {
        return this.buildCells((ridx, cidx) => {
            return ((ridx === 3 && cidx === 3) ? Cell_1.Cell.Black() :
                (ridx === 4 && cidx === 4) ? Cell_1.Cell.Black() :
                    (ridx === 3 && cidx === 4) ? Cell_1.Cell.White() :
                        (ridx === 4 && cidx === 3) ? Cell_1.Cell.White() :
                            Cell_1.Cell.Blank());
        });
    }
    static get randomCells() {
        return this.buildCells((ridx, cidx) => {
            const rand = Math.floor(Math.random() * 3);
            return (rand === 0 ? Cell_1.Cell.Blank() :
                rand === 1 ? Cell_1.Cell.Black() :
                    Cell_1.Cell.White());
        });
    }
    static buildCells(func) {
        return _.map(_.fill(new Array(8), 0), (row, ridx) => {
            return _.map(_.fill(new Array(8), 0), (col, cidx) => {
                return func(ridx, cidx);
            });
        });
    }
}
Board.LowerEnd = 0;
Board.HigherEnd = 7;
Board.AroundCoords = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1], [0, 1],
    [1, -1], [1, 0], [1, 1],
];
exports.Board = Board;
//# sourceMappingURL=Board.js.map