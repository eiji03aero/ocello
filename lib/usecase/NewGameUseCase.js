"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almin_1 = require("almin");
const Othello_1 = require("../domain/Othello");
const OthelloRepository_1 = require("../infra/OthelloRepository");
const LoggerRepository_1 = require("../infra/LoggerRepository");
class NewGameUseCase extends almin_1.UseCase {
    constructor({ othelloRepository, loggerRepository }) {
        super();
        this.othelloRepository = othelloRepository;
        this.loggerRepository = loggerRepository;
    }
    static create() { return new this({ othelloRepository: OthelloRepository_1.default, loggerRepository: LoggerRepository_1.default }); }
    execute() {
        const logger = this.loggerRepository.lastUsed();
        const newOthello = Othello_1.Othello.NewGame();
        this.othelloRepository.save(newOthello);
        logger.log("Starting a new game!");
    }
}
exports.NewGameUseCase = NewGameUseCase;
//# sourceMappingURL=NewGameUseCase.js.map