"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almin_1 = require("almin");
const OthelloStore_1 = require("./OthelloStore/OthelloStore");
const LoggerStore_1 = require("./LoggerStore/LoggerStore");
const OthelloRepository_1 = require("../infra/OthelloRepository");
const LoggerRepository_1 = require("../infra/LoggerRepository");
exports.createAppStoreGroup = () => {
    return new almin_1.StoreGroup({
        othello: new OthelloStore_1.OthelloStore({ othelloRepository: OthelloRepository_1.default }),
        logger: new LoggerStore_1.LoggerStore({ loggerRepository: LoggerRepository_1.default }),
    });
};
exports.appStoreGroup = exports.createAppStoreGroup();
//# sourceMappingURL=AppStoreGroup.js.map