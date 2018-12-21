import { UseCase } from "almin";
import othelloRepository, { OthelloRepository } from "../infra/OthelloRepository";
import loggerRepository, { LoggerRepository } from "../infra/LoggerRepository";

export class SkipTurnUseCase extends UseCase {
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
    othello.skipTurn();
    this.dispatch({ type: "DISABLE_SKIP_TURN" });
    logger.log(`Player ${othello.currentPlayer.color} skipped turn`);
  }
}
