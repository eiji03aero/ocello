"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almin_1 = require("almin");
const OthelloRepository_1 = require("../infra/OthelloRepository");
const LoggerRepository_1 = require("../infra/LoggerRepository");
const CheckGameStatusUseCase_1 = require("./CheckGameStatusUseCase");
class PlaceDiskUseCase extends almin_1.UseCase {
    constructor({ othelloRepository, loggerRepository, }) {
        super();
        this.othelloRepository = othelloRepository;
        this.loggerRepository = loggerRepository;
    }
    static create() { return new this({ othelloRepository: OthelloRepository_1.default, loggerRepository: LoggerRepository_1.default }); }
    execute(coords) {
        const othello = this.othelloRepository.lastUsed();
        const logger = this.loggerRepository.lastUsed();
        othello.placeDisk(coords);
        logger.log(`Player ${othello.lastPlayer.color} put disk on coords [${coords[0]}, ${coords[1]}]`);
        this.context.useCase(CheckGameStatusUseCase_1.CheckGameStatusUseCase.create()).execute();
    }
}
exports.PlaceDiskUseCase = PlaceDiskUseCase;
//# sourceMappingURL=PlaceDiskUseCase.js.map