import { StoreGroup } from "almin";
import { OthelloStore } from "./OthelloStore/OthelloStore";
import { LoggerStore } from "./LoggerStore/LoggerStore";
import othelloRepository from "../infra/OthelloRepository";
import loggerRepository from "../infra/LoggerRepository";

export const createAppStoreGroup = () => {
  return new StoreGroup({
    othello: new OthelloStore({ othelloRepository }),
    logger: new LoggerStore({ loggerRepository }),
  });
};

export const appStoreGroup = createAppStoreGroup();
