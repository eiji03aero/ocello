"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almin_1 = require("almin");
const OthelloRepository_1 = require("../infra/OthelloRepository");
const LoggerRepository_1 = require("../infra/LoggerRepository");
class SkipTurnUseCase extends almin_1.UseCase {
    constructor({ othelloRepository, loggerRepository, }) {
        super();
        this.othelloRepository = othelloRepository;
        this.loggerRepository = loggerRepository;
    }
    static create() { return new this({ othelloRepository: OthelloRepository_1.default, loggerRepository: LoggerRepository_1.default }); }
    execute() {
        const othello = this.othelloRepository.lastUsed();
        const logger = this.loggerRepository.lastUsed();
        othello.skipTurn();
        this.dispatch({ type: "DISABLE_SKIP_TURN" });
        logger.log(`Player ${othello.currentPlayer.color} skipped turn`);
    }
}
exports.SkipTurnUseCase = SkipTurnUseCase;
//# sourceMappingURL=SkipTurnUseCase.js.map