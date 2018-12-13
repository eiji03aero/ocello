import * as React from "react";
import { UseCase, UseCaseExecutor } from "almin";
import appLocator from "../AppLocator";

export class BaseContainer<T, P> extends React.Component<T, P> {
  useCase<FT extends UseCase>(useCase: FT):UseCaseExecutor<FT> {
    return appLocator.context.useCase(useCase);
  }
}
