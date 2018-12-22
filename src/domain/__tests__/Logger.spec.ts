import { Logger, LogLevel } from "../Logger";

describe('Logger', () => {
  it("should create [Blank]", () => {
    const logger = Logger.Blank();
    expect(logger.logs.length).toEqual(0);
  });

  it("should log with level [Log]", () => {
    const logger = Logger.Blank();
    logger.log("domo");
    expect(logger.logs[0].text).toEqual("domo");
    expect(logger.logs[0].level).toEqual(LogLevel.Log);
  });

  it("should log with level [Warn]", () => {
    const logger = Logger.Blank();
    logger.warn("warn");
    expect(logger.logs[0].text).toEqual("warn");
    expect(logger.logs[0].level).toEqual(LogLevel.Warn);
  });

  it("should log with level [Error]", () => {
    const logger = Logger.Blank();
    logger.error("error");
    expect(logger.logs[0].text).toEqual("error");
    expect(logger.logs[0].level).toEqual(LogLevel.Error);
  });
});
