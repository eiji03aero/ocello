import { DispatchedPayload, Store } from "almin";

import { OthelloState } from "./OthelloState";
import { GameStatus, UserTurn } from "../../domain/Othello";
import { Board } from "../../domain/Board";
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
    this.state = new OthelloState({
      board: Board.Blank(),
      gameStatus: GameStatus.PLAYING,
      userTurn: UserTurn.ONE,
    });
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
