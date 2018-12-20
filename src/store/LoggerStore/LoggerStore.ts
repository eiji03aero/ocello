import { DispatchedPayload, Store } from "almin";

import { LoggerState, LoggerStateArgs } from "./LoggerState";
import { Logger } from "../../domain/Logger";
import { LoggerRepository } from "../../infra/LoggerRepository";

export class LoggerStore extends Store {
  loggerRepository: LoggerRepository;

  constructor ({
    loggerRepository
  } : {
    loggerRepository: LoggerRepository
  }) {
    super();
    this.loggerRepository = loggerRepository;
    this.state = new LoggerState({ ...(Logger.Blank() as LoggerStateArgs) });
  }

  receivePayload (payload: DispatchedPayload) {
    const logger = this.loggerRepository.lastUsed();
    const newState = this.state.merge(logger).reduce(payload);
    this.setState(newState);
  }

  getState () {
    return this.state;
  }
}
