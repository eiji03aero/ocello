import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Dispatcher, Context } from "almin";
import { AlminLogger } from "almin-logger";

import AppLocator from "./AppLocator";
import { appStoreGroup } from "./store/AppStoreGroup";
import { InitializeApp } from "./usecase/Initials/InitializeApp";

import { App } from "./app";

const dispatcher = new Dispatcher();
const appContext = new Context({
  dispatcher,
  store: appStoreGroup,
});
const logger = new AlminLogger();
logger.startLogging(appContext);
AppLocator.context = appContext;

appContext
  .useCase(InitializeApp.create())
  .execute()
  .then(() => {
    ReactDOM.render(
      <App appContext={appContext} />,
      document.querySelector('#app-root')
    );
  });

