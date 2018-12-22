"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoggerState {
    constructor(args) {
        this.logs = args.logs;
    }
    merge(logger) {
        return new LoggerState(Object.assign({}, this, logger));
    }
    reduce(payload) {
        switch (payload.type) {
            default:
                return this;
        }
    }
}
exports.LoggerState = LoggerState;
//# sourceMappingURL=LoggerState.js.map