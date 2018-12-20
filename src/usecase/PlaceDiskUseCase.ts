import { UseCase } from "almin";
import { CellCoordinates } from "../domain/Board";
import othelloRepository, { OthelloRepository } from "../infra/OthelloRepository";
import loggerRepository, { LoggerRepository } from "../infra/LoggerRepository";

export class PlaceDiskUseCase extends UseCase {
  othelloRepository: OthelloRepository;
  loggerRepository: LoggerRepository;

  constructor ({
    othelloRepository,
    loggerRepository,
  } : {
    othelloRepository: OthelloRepository,
    loggerRepository: LoggerRepository,
  }) {
    super();
    this.othelloRepository = othelloRepository;
    this.loggerRepository = loggerRepository;
  }

  static create () { return new this({ othelloRepository, loggerRepository }); }

  execute (coords: CellCoordinates) {
    const othello = this.othelloRepository.lastUsed();
    const logger = this.loggerRepository.lastUsed();
    othello.placeDisk(coords);
    logger.log(`Player ${othello.lastPlayer.color} put disk on coords [${coords[0]}, ${coords[1]}]`);
  }
}
