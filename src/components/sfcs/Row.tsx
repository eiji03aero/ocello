import * as React from "react";
import * as _ from "lodash";
import styled from "styled-components";

import { Cell } from "./Cell"

import { Cell as CellClass } from "../../domain/Cell";
import { DiskCoordinates } from "../../domain/Board";

const RowStyled = styled.div`
  display: flex;
`;

interface Props {
  cells: CellClass[];
  rowIndex: number;
  onPlaceDisk: (coords: DiskCoordinates) => void;
}

export const Row: React.SFC<Props> = ({
  cells,
  rowIndex,
  onPlaceDisk,
}: Props) => {
  return (
    <RowStyled>
      { _.map(cells, (cell, idx) => (
        <Cell
          key={idx}
          state={cell.state}
          rowIndex={rowIndex}
          columnIndex={idx}
          onPlaceDisk={onPlaceDisk}
        />
      ))}
    </RowStyled>
  );
};
