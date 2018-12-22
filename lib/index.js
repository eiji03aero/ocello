"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const almin_1 = require("almin");
const AppLocator_1 = require("./AppLocator");
const AppStoreGroup_1 = require("./store/AppStoreGroup");
const InitializeAppUseCase_1 = require("./usecase/Initials/InitializeAppUseCase");
const App_1 = require("./App");
class OthelloApp extends React.Component {
    constructor(props) {
        super(props);
        const dispatcher = new almin_1.Dispatcher();
        const appContext = new almin_1.Context({
            dispatcher,
            store: AppStoreGroup_1.appStoreGroup,
        });
        this.state = {
            initialized: false,
            dispatcher: dispatcher,
            appContext: appContext,
        };
        AppLocator_1.default.context = appContext;
    }
    componentDidMount() {
        this.state.appContext
            .useCase(InitializeAppUseCase_1.InitializeAppUseCase.create())
            .execute()
            .then(() => {
            this.setState({ initialized: true });
        });
    }
    render() {
        if (!this.state.initialized)
            return React.createElement("p", null, "hang on ...");
        return (React.createElement(App_1.App, { appContext: this.state.appContext }));
    }
}
exports.default = OthelloApp;
//# sourceMappingURL=index.js.map