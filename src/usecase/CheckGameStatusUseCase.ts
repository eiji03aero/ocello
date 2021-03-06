import { UseCase } from "almin";
import othelloRepository, { OthelloRepository } from "../infra/OthelloRepository";
import loggerRepository, { LoggerRepository } from "../infra/LoggerRepository";

export class CheckGameStatusUseCase extends UseCase {
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

  execute () {
    const othello = this.othelloRepository.lastUsed();
    const logger = this.loggerRepository.lastUsed();
    othello.checkGameStatus();

    if (othello.isFinished) {
      logger.log("Game is set! Take a look at the result");
    }
    else if (othello.isImpossible) {
      logger.warn("It's impossible to place any more.");
    }
    else if (othello.isCantPlace) {
      logger.warn(`Player ${othello.currentPlayer.color} cannot put disk any where`);
    }
  }
}
