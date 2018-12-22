/// <reference types="node" />
import * as EventEmitter from 'events';
import { Logger } from "../domain/Logger";
export declare class LoggerRepository extends EventEmitter {
    private database;
    constructor();
    lastUsed(): Logger;
    save(logger: Logger): void;
    onChange(handler: () => void): void;
    readonly domainName: string;
    readonly lastUsedDomainName: string;
}
declare const _default: LoggerRepository;
export default _default;
//# sourceMappingURL=LoggerRepository.d.ts.map