"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almin_1 = require("almin");
const OthelloState_1 = require("./OthelloState");
class OthelloStore extends almin_1.Store {
    constructor({ othelloRepository }) {
        super();
        this.othelloRepository = othelloRepository;
        this.state = OthelloState_1.OthelloState.create();
    }
    receivePayload(payload) {
        const othello = this.othelloRepository.lastUsed();
        const newState = this.state.merge(othello).reduce(payload);
        this.setState(newState);
    }
    getState() {
        return this.state;
    }
}
exports.OthelloStore = OthelloStore;
//# sourceMappingURL=OthelloStore.js.map