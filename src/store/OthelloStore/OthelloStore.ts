import { DispatchedPayload, Store } from "almin";

import { OthelloState } from "./OthelloState";
import { OthelloRepository } from "../../infra/OthelloRepository";

export class OthelloStore extends Store {
  othelloRepository: OthelloRepository;

  constructor ({
    othelloRepository
  } : {
    othelloRepository: OthelloRepository
  }) {
    super();
    this.othelloRepository = othelloRepository;
    this.state = OthelloState.create();
  }

  receivePayload (payload: DispatchedPayload) {
    const othello = this.othelloRepository.lastUsed();
    const newState = this.state.merge(othello).reduce(payload);
    this.setState(newState);
  }

  getState () {
    return this.state;
  }
}
