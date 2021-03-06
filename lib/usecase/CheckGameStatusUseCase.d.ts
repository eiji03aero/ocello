import { UseCase } from "almin";
import { OthelloRepository } from "../infra/OthelloRepository";
import { LoggerRepository } from "../infra/LoggerRepository";
export declare class CheckGameStatusUseCase extends UseCase {
    othelloRepository: OthelloRepository;
    loggerRepository: LoggerRepository;
    constructor({ othelloRepository, loggerRepository, }: {
        othelloRepository: OthelloRepository;
        loggerRepository: LoggerRepository;
    });
    static create(): CheckGameStatusUseCase;
    execute(): void;
}
//# sourceMappingURL=CheckGameStatusUseCase.d.ts.map