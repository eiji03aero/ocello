"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const AppLocator_1 = require("../AppLocator");
class BaseContainer extends React.Component {
    useCase(useCase) {
        return AppLocator_1.default.context.useCase(useCase);
    }
}
exports.BaseContainer = BaseContainer;
//# sourceMappingURL=BaseContainer.js.map