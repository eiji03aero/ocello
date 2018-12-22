"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const enzyme_to_json_1 = require("enzyme-to-json");
const Disk_1 = require("../Disk");
describe('Disk', () => {
    it('matches snapshot', () => {
        const wrapper = enzyme_1.shallow(React.createElement(Disk_1.Disk, { classNames: 'Black' }));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
});
//# sourceMappingURL=Disk.spec.js.map