"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Logger_1 = require("../Logger");
describe('Logger', () => {
    it("should create [Blank]", () => {
        const logger = Logger_1.Logger.Blank();
        expect(logger.logs.length).toEqual(0);
    });
    it("should log with level [Log]", () => {
        const logger = Logger_1.Logger.Blank();
        logger.log("domo");
        expect(logger.logs[0].text).toEqual("domo");
        expect(logger.logs[0].level).toEqual(Logger_1.LogLevel.Log);
    });
    it("should log with level [Warn]", () => {
        const logger = Logger_1.Logger.Blank();
        logger.warn("warn");
        expect(logger.logs[0].text).toEqual("warn");
        expect(logger.logs[0].level).toEqual(Logger_1.LogLevel.Warn);
    });
    it("should log with level [Error]", () => {
        const logger = Logger_1.Logger.Blank();
        logger.error("error");
        expect(logger.logs[0].text).toEqual("error");
        expect(logger.logs[0].level).toEqual(Logger_1.LogLevel.Error);
    });
});
//# sourceMappingURL=Logger.spec.js.map