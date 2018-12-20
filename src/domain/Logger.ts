export enum LogLevel {
  Log = "Log",
  Warn = "Warn",
  Error = "Warn",
}

export class Log {
  text: string;
  level: LogLevel;
  createdAt: string;

  constructor (args: { text: string, level: LogLevel }) {
    this.text = args.text;
    this.level = args.level;
    const now = new Date();
    this.createdAt = `${now.getHours()}:${now.getMinutes()}`;
  }
}

export interface LoggerArgs {
  logs: Log[];
}

export class Logger {
  logs: Log[];

  static Blank () { return new this({ logs: [] as Log[] }); }

  constructor (args: LoggerArgs) {
    this.logs = args.logs ;
  }

  log (text: string) {
    const log = new Log({ text: text, level: LogLevel.Log });
    this.logs.push(log);
  }

  warn (text: string) {
    const log = new Log({ text: text, level: LogLevel.Warn });
    this.logs.push(log);
  }

  error (text: string) {
    const log = new Log({ text: text, level: LogLevel.Error });
    this.logs.push(log);
  }
}
