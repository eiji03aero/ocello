import * as React from 'react';
import { Dispatcher, Context } from "almin";

import AppLocator from "./AppLocator";
import { appStoreGroup } from "./store/AppStoreGroup";
import { InitializeAppUseCase } from "./usecase/Initials/InitializeAppUseCase";

import { App } from "./app";

interface Props { }
interface State {
  initialized: boolean;
  dispatcher: Dispatcher;
  appContext: Context<any>;
}

export default class OthelloApp extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    const dispatcher = new Dispatcher();
    const appContext = new Context({
      dispatcher,
      store: appStoreGroup,
    });
    this.state = {
      initialized: false,
      dispatcher: dispatcher,
      appContext: appContext,
    };
    AppLocator.context = appContext;
  }

  componentDidMount () {
    this.state.appContext
      .useCase(InitializeAppUseCase.create())
      .execute()
      .then(() => {
        this.setState({ initialized: true });
      });
  }

  render () {
    if (!this.state.initialized) return <p>hang on ...</p>;

    return (
      <App appContext={this.state.appContext} />
    );
  }
}
