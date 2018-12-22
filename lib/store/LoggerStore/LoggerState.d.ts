import { Logger, Log } from "../../domain/Logger";
export interface LoggerStateArgs {
    logs: Log[];
}
export declare class LoggerState {
    logs: Log[];
    constructor(args: LoggerStateArgs);
    merge(logger: Logger): LoggerState;
    reduce(payload: any): this;
}
//# sourceMappingURL=LoggerState.d.ts.map