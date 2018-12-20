import { UseCase } from "almin";
import { Logger } from "../../domain/Logger";
import loggerRepository, { LoggerRepository } from "../../infra/LoggerRepository";

export class InitializeLoggerUseCase extends UseCase {
  loggerRepository: LoggerRepository;

  constructor ({
    loggerRepository
  } : {
    loggerRepository: LoggerRepository
  }) {
    super();
    this.loggerRepository = loggerRepository;
  }

  static create () { return new this({ loggerRepository }); }

  execute () {
    const logger = Logger.Blank();
    this.loggerRepository.save(logger);
  }
}
