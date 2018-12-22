import { UseCase } from "almin";
import { CellCoordinates } from "../domain/Board";
import { OthelloRepository } from "../infra/OthelloRepository";
import { LoggerRepository } from "../infra/LoggerRepository";
export declare class PlaceDiskUseCase extends UseCase {
    othelloRepository: OthelloRepository;
    loggerRepository: LoggerRepository;
    constructor({ othelloRepository, loggerRepository, }: {
        othelloRepository: OthelloRepository;
        loggerRepository: LoggerRepository;
    });
    static create(): PlaceDiskUseCase;
    execute(coords: CellCoordinates): void;
}
//# sourceMappingURL=PlaceDiskUseCase.d.ts.map