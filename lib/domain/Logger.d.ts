export declare enum LogLevel {
    Log = "Log",
    Warn = "Warn",
    Error = "Warn"
}
export declare class Log {
    text: string;
    level: LogLevel;
    createdAt: string;
    constructor(args: {
        text: string;
        level: LogLevel;
    });
}
export interface LoggerArgs {
    logs: Log[];
}
export declare class Logger {
    logs: Log[];
    static Blank(): Logger;
    constructor(args: LoggerArgs);
    log(text: string): void;
    warn(text: string): void;
    error(text: string): void;
}
//# sourceMappingURL=Logger.d.ts.map