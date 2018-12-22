"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const enzyme_1 = require("enzyme");
const enzyme_to_json_1 = require("enzyme-to-json");
const Cell_1 = require("../Cell");
const Cell_2 = require("../../domain/Cell");
describe('Board', () => {
    const blankCell = Cell_2.Cell.Blank();
    const blackCell = Cell_2.Cell.Black();
    const mockOnPlaceDiskFactory = () => jest.fn((coords) => { });
    it('should match snapshot', () => {
        const mockOnPlaceDisk = mockOnPlaceDiskFactory();
        const wrapper = enzyme_1.shallow(React.createElement(Cell_1.Cell, { cell: blankCell, rowIndex: 0, columnIndex: 0, onPlaceDisk: mockOnPlaceDisk, placeable: true }));
        expect(enzyme_to_json_1.default(wrapper)).toMatchSnapshot();
    });
    it('should not allow onClick when placeable=false', () => {
        const mockOnPlaceDisk = mockOnPlaceDiskFactory();
        const wrapper = enzyme_1.shallow(React.createElement(Cell_1.Cell, { cell: blackCell, rowIndex: 0, columnIndex: 0, onPlaceDisk: mockOnPlaceDisk, placeable: false }));
        wrapper.first().simulate('click');
        expect(mockOnPlaceDisk).not.toBeCalled();
    });
    it('should fire onClick when placeable=true', () => {
        const mockOnPlaceDisk = mockOnPlaceDiskFactory();
        const wrapper = enzyme_1.shallow(React.createElement(Cell_1.Cell, { cell: blackCell, rowIndex: 0, columnIndex: 0, onPlaceDisk: mockOnPlaceDisk, placeable: true }));
        wrapper.first().simulate('click');
        expect(mockOnPlaceDisk).toBeCalled();
    });
});
//# sourceMappingURL=Cell.spec.js.map