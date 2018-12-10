import { StoreGroup } from "almin";
import { OthelloStore } from "./OthelloStore/OthelloStore";
import othelloRepository from "../infra/OthelloRepository";

export const createAppStoreGroup = () => {
  return new StoreGroup({
    othello: new OthelloStore({ othelloRepository }),
  });
}

export const appStoreGroup = createAppStoreGroup();
