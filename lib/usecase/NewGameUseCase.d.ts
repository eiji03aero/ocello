import { UseCase } from "almin";
import { OthelloRepository } from "../infra/OthelloRepository";
import { LoggerRepository } from "../infra/LoggerRepository";
export declare class NewGameUseCase extends UseCase {
    othelloRepository: OthelloRepository;
    loggerRepository: LoggerRepository;
    constructor({ othelloRepository, loggerRepository }: {
        othelloRepository: OthelloRepository;
        loggerRepository: LoggerRepository;
    });
    static create(): NewGameUseCase;
    execute(): void;
}
//# sourceMappingURL=NewGameUseCase.d.ts.map