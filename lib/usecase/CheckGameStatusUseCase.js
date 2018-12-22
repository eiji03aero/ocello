"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almin_1 = require("almin");
const OthelloRepository_1 = require("../infra/OthelloRepository");
const LoggerRepository_1 = require("../infra/LoggerRepository");
class CheckGameStatusUseCase extends almin_1.UseCase {
    constructor({ othelloRepository, loggerRepository, }) {
        super();
        this.othelloRepository = othelloRepository;
        this.loggerRepository = loggerRepository;
    }
    static create() { return new this({ othelloRepository: OthelloRepository_1.default, loggerRepository: LoggerRepository_1.default }); }
    execute() {
        const othello = this.othelloRepository.lastUsed();
        const logger = this.loggerRepository.lastUsed();
        othello.checkGameStatus();
        if (othello.isFinished) {
            logger.log("Game is set! Take a look at the result");
        }
        else if (othello.isImpossible) {
            logger.warn("It's impossible to place any more.");
        }
        else if (othello.isCantPlace) {
            logger.warn(`Player ${othello.currentPlayer.color} cannot put disk any where`);
        }
    }
}
exports.CheckGameStatusUseCase = CheckGameStatusUseCase;
//# sourceMappingURL=CheckGameStatusUseCase.js.map