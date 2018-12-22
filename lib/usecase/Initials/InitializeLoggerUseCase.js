"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almin_1 = require("almin");
const Logger_1 = require("../../domain/Logger");
const LoggerRepository_1 = require("../../infra/LoggerRepository");
class InitializeLoggerUseCase extends almin_1.UseCase {
    constructor({ loggerRepository }) {
        super();
        this.loggerRepository = loggerRepository;
    }
    static create() { return new this({ loggerRepository: LoggerRepository_1.default }); }
    execute() {
        const logger = Logger_1.Logger.Blank();
        this.loggerRepository.save(logger);
    }
}
exports.InitializeLoggerUseCase = InitializeLoggerUseCase;
//# sourceMappingURL=InitializeLoggerUseCase.js.map