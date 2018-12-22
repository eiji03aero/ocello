import { DispatchedPayload, Store } from "almin";
import { OthelloRepository } from "../../infra/OthelloRepository";
export declare class OthelloStore extends Store {
    othelloRepository: OthelloRepository;
    constructor({ othelloRepository }: {
        othelloRepository: OthelloRepository;
    });
    receivePayload(payload: DispatchedPayload): void;
    getState(): any;
}
//# sourceMappingURL=OthelloStore.d.ts.map