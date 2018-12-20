import { Logger, Log } from "../../domain/Logger";

export interface LoggerStateArgs {
  logs: Log[];
}

export class LoggerState {
  logs: Log[];

  constructor (args: LoggerStateArgs) {
    this.logs = args.logs;
  }

  merge (logger: Logger) {
    return new LoggerState({
      ...(this as LoggerStateArgs),
      ...(logger as LoggerStateArgs),
    });
  }

  reduce (payload: any) {
    switch (payload.type) {
      default:
        return this;
    }
  }
}
