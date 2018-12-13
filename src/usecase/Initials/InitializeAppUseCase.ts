import { UseCase } from "almin";
import { InitializeOthelloUseCase } from "./InitializeOthelloUseCase";

export class InitializeAppUseCase extends UseCase {
  static create () { return new this(); }

  execute () {
    this.context.useCase(InitializeOthelloUseCase.create()).execute();
  }
}
