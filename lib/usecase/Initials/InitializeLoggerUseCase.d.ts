import { UseCase } from "almin";
import { LoggerRepository } from "../../infra/LoggerRepository";
export declare class InitializeLoggerUseCase extends UseCase {
    loggerRepository: LoggerRepository;
    constructor({ loggerRepository }: {
        loggerRepository: LoggerRepository;
    });
    static create(): InitializeLoggerUseCase;
    execute(): void;
}
//# sourceMappingURL=InitializeLoggerUseCase.d.ts.map