"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almin_1 = require("almin");
const LoggerState_1 = require("./LoggerState");
const Logger_1 = require("../../domain/Logger");
class LoggerStore extends almin_1.Store {
    constructor({ loggerRepository }) {
        super();
        this.loggerRepository = loggerRepository;
        this.state = new LoggerState_1.LoggerState(Object.assign({}, Logger_1.Logger.Blank()));
    }
    receivePayload(payload) {
        const logger = this.loggerRepository.lastUsed();
        const newState = this.state.merge(logger).reduce(payload);
        this.setState(newState);
    }
    getState() {
        return this.state;
    }
}
exports.LoggerStore = LoggerStore;
//# sourceMappingURL=LoggerStore.js.map