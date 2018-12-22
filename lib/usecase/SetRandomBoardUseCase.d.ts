import { UseCase } from "almin";
import { OthelloRepository } from "../infra/OthelloRepository";
export declare class SetRandomBoardUseCase extends UseCase {
    othelloRepository: OthelloRepository;
    constructor({ othelloRepository }: {
        othelloRepository: OthelloRepository;
    });
    static create(): SetRandomBoardUseCase;
    execute(): void;
}
//# sourceMappingURL=SetRandomBoardUseCase.d.ts.map