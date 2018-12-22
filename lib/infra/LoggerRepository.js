"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter = require("events");
const Logger_1 = require("../domain/Logger");
class LoggerRepository extends EventEmitter {
    constructor() {
        super();
        this.database = new Map();
    }
    lastUsed() {
        return this.database.get(this.lastUsedDomainName);
    }
    save(logger) {
        this.database.set(this.lastUsedDomainName, logger);
        this.emit('change', logger);
    }
    onChange(handler) {
        this.on('change', handler);
    }
    get domainName() { return `${Logger_1.Logger.name}`; }
    get lastUsedDomainName() { return `${Logger_1.Logger.name}.lastUsed`; }
}
exports.LoggerRepository = LoggerRepository;
exports.default = new LoggerRepository();
//# sourceMappingURL=LoggerRepository.js.map