"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel["Log"] = "Log";
    LogLevel["Warn"] = "Warn";
    LogLevel["Error"] = "Warn";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
class Log {
    constructor(args) {
        this.text = args.text;
        this.level = args.level;
        const now = new Date();
        this.createdAt = `${now.getHours()}:${now.getMinutes()}`;
    }
}
exports.Log = Log;
class Logger {
    static Blank() { return new this({ logs: [] }); }
    constructor(args) {
        this.logs = args.logs;
    }
    log(text) {
        const log = new Log({ text: text, level: LogLevel.Log });
        this.logs.push(log);
    }
    warn(text) {
        const log = new Log({ text: text, level: LogLevel.Warn });
        this.logs.push(log);
    }
    error(text) {
        const log = new Log({ text: text, level: LogLevel.Error });
        this.logs.push(log);
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map