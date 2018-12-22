/// <reference types="node" />
import * as EventEmitter from 'events';
import { Othello } from "../domain/Othello";
export declare class OthelloRepository extends EventEmitter {
    private database;
    constructor();
    lastUsed(): Othello;
    save(othello: Othello): void;
    onChange(handler: () => void): void;
    readonly domainName: string;
    readonly lastUsedDomainName: string;
}
declare const _default: OthelloRepository;
export default _default;
//# sourceMappingURL=OthelloRepository.d.ts.map