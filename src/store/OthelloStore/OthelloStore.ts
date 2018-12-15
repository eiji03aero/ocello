import { DispatchedPayload, Store } from "almin";

import { OthelloState, OthelloStateArgs } from "./OthelloState";
import { Othello } from "../../domain/Othello";
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
    this.state = new OthelloState({ ...(Othello.NewGame() as OthelloStateArgs) });
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
