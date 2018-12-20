import { UseCase } from "almin";
import { InitializeOthelloUseCase } from "./InitializeOthelloUseCase";
import { InitializeLoggerUseCase } from "./InitializeLoggerUseCase";

export class InitializeAppUseCase extends UseCase {
  static create () { return new this(); }

  execute () {
    this.context.useCase(InitializeLoggerUseCase.create()).execute();
    this.context.useCase(InitializeOthelloUseCase.create()).execute();
  }
}
