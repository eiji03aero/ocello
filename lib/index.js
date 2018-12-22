"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
const almin_1 = require("almin");
const almin_logger_1 = require("almin-logger");
const AppLocator_1 = require("./AppLocator");
const AppStoreGroup_1 = require("./store/AppStoreGroup");
const InitializeAppUseCase_1 = require("./usecase/Initials/InitializeAppUseCase");
const app_1 = require("./app");
const dispatcher = new almin_1.Dispatcher();
const appContext = new almin_1.Context({
    dispatcher,
    store: AppStoreGroup_1.appStoreGroup,
});
const logger = new almin_logger_1.AlminLogger();
logger.startLogging(appContext);
AppLocator_1.default.context = appContext;
appContext
    .useCase(InitializeAppUseCase_1.InitializeAppUseCase.create())
    .execute()
    .then(() => {
    ReactDOM.render(React.createElement(app_1.App, { appContext: appContext }), document.querySelector('#app-root'));
});
//# sourceMappingURL=index.js.map