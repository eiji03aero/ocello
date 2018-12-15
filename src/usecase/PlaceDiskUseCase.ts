import { UseCase } from "almin";
import { CellCoordinates } from "../domain/Board";
import othelloRepository, { OthelloRepository } from "../infra/OthelloRepository";

export class PlaceDiskUseCase extends UseCase {
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

  execute (coords: CellCoordinates) {
    const othello = this.othelloRepository.lastUsed();
    othello.placeDisk(coords);
  }
}
