import { UseCase } from "almin";
import { InitializeOthello } from "./InitializeOthello";

export class InitializeApp extends UseCase {
  static create () { return new this(); }

  execute () {
    this.context.useCase(InitializeOthello.create()).execute();
  }
}
