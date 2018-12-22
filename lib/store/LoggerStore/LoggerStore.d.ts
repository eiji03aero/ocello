import { DispatchedPayload, Store } from "almin";
import { LoggerRepository } from "../../infra/LoggerRepository";
export declare class LoggerStore extends Store {
    loggerRepository: LoggerRepository;
    constructor({ loggerRepository }: {
        loggerRepository: LoggerRepository;
    });
    receivePayload(payload: DispatchedPayload): void;
    getState(): any;
}
//# sourceMappingURL=LoggerStore.d.ts.map