"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almin_1 = require("almin");
const InitializeOthelloUseCase_1 = require("./InitializeOthelloUseCase");
const InitializeLoggerUseCase_1 = require("./InitializeLoggerUseCase");
class InitializeAppUseCase extends almin_1.UseCase {
    static create() { return new this(); }
    execute() {
        this.context.useCase(InitializeLoggerUseCase_1.InitializeLoggerUseCase.create()).execute();
        this.context.useCase(InitializeOthelloUseCase_1.InitializeOthelloUseCase.create()).execute();
    }
}
exports.InitializeAppUseCase = InitializeAppUseCase;
//# sourceMappingURL=InitializeAppUseCase.js.map