"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AppLocator {
    constructor() {
        this._context = null;
    }
    get state() { return this._context.getState(); }
    get context() { return this._context; }
    set context(newContext) { this._context = newContext; }
}
exports.AppLocator = AppLocator;
exports.default = new AppLocator();
//# sourceMappingURL=AppLocator.js.map