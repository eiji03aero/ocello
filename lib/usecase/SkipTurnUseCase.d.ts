import { UseCase } from "almin";
import { OthelloRepository } from "../infra/OthelloRepository";
import { LoggerRepository } from "../infra/LoggerRepository";
export declare class SkipTurnUseCase extends UseCase {
    othelloRepository: OthelloRepository;
    loggerRepository: LoggerRepository;
    constructor({ othelloRepository, loggerRepository, }: {
        othelloRepository: OthelloRepository;
        loggerRepository: LoggerRepository;
    });
    static create(): SkipTurnUseCase;
    execute(): void;
}
//# sourceMappingURL=SkipTurnUseCase.d.ts.map