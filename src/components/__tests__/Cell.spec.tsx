import * as React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

import { Cell } from "../Cell";
import { Cell as CellClass } from "../../domain/Cell";
import { CellCoordinates } from "../../domain/Board";

describe('Board', () => {
  const blankCell = CellClass.Blank();
  const blackCell = CellClass.Black();
  const mockOnPlaceDiskFactory = () => jest.fn((coords: CellCoordinates) => {});

  it('should match snapshot', () => {
    const mockOnPlaceDisk = mockOnPlaceDiskFactory();
    const wrapper = shallow(
      <Cell
        cell={blankCell}
        rowIndex={0}
        columnIndex={0}
        onPlaceDisk={mockOnPlaceDisk}
        placeable={true}
      />
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should not allow onClick when placeable=false', () => {
    const mockOnPlaceDisk = mockOnPlaceDiskFactory();
    const wrapper = shallow(
      <Cell
        cell={blackCell}
        rowIndex={0}
        columnIndex={0}
        onPlaceDisk={mockOnPlaceDisk}
        placeable={false}
      />
    );

    wrapper.first().simulate('click');

    expect(mockOnPlaceDisk).not.toBeCalled();
  });

  it('should fire onClick when placeable=true', () => {
    const mockOnPlaceDisk = mockOnPlaceDiskFactory();
    const wrapper = shallow(
      <Cell
        cell={blackCell}
        rowIndex={0}
        columnIndex={0}
        onPlaceDisk={mockOnPlaceDisk}
        placeable={true}
      />
    );

    wrapper.first().simulate('click');

    expect(mockOnPlaceDisk).toBeCalled();
  });
});
