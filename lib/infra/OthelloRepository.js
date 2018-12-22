"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const EventEmitter = require("events");
const Othello_1 = require("../domain/Othello");
class OthelloRepository extends EventEmitter {
    constructor() {
        super();
        this.database = new Map();
    }
    lastUsed() {
        return this.database.get(this.lastUsedDomainName);
    }
    save(othello) {
        this.database.set(this.lastUsedDomainName, othello);
        this.emit('change', othello);
    }
    onChange(handler) {
        this.on('change', handler);
    }
    get domainName() { return `${Othello_1.Othello.name}`; }
    get lastUsedDomainName() { return `${Othello_1.Othello.name}.lastUsed`; }
}
exports.OthelloRepository = OthelloRepository;
exports.default = new OthelloRepository();
//# sourceMappingURL=OthelloRepository.js.map