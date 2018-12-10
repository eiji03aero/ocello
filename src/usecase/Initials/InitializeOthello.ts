import { UseCase } from "almin";
import { Othello } from "../../domain/Othello";
import othelloRepository, { OthelloRepository } from "../../infra/OthelloRepository";

export class InitializeOthello extends UseCase {
  othelloRepository: OthelloRepository;

  constructor ({
    othelloRepository
  } : {
    othelloRepository: OthelloRepository
  }) {
    super();
    this.othelloRepository = othelloRepository;
  }

  static create () { return new this({ othelloRepository }); }

  execute () {
    const newOthello = Othello.NewGame();
    this.othelloRepository.save(newOthello);
  }
}
