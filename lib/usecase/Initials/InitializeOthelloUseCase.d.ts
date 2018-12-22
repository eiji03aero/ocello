import { UseCase } from "almin";
import { OthelloRepository } from "../../infra/OthelloRepository";
import { LoggerRepository } from "../../infra/LoggerRepository";
export declare class InitializeOthelloUseCase extends UseCase {
    othelloRepository: OthelloRepository;
    loggerRepository: LoggerRepository;
    constructor({ othelloRepository, loggerRepository, }: {
        othelloRepository: OthelloRepository;
        loggerRepository: LoggerRepository;
    });
    static create(): InitializeOthelloUseCase;
    execute(): void;
}
//# sourceMappingURL=InitializeOthelloUseCase.d.ts.map