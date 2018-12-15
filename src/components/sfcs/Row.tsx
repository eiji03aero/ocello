import * as React from "react";
import * as _ from "lodash";
import styled from "styled-components";

import { Cell } from "./Cell"

import { Cell as CellClass } from "../../domain/Cell";
import { DiskCoordinates, BoardRow } from "../../domain/Board";

const RowStyled = styled.div`
  display: flex;
`;

interface Props {
  row: BoardRow;
  rowIndex: number;
  onPlaceDisk: (coords: DiskCoordinates) => void;
}

export const Row: React.SFC<Props> = ({
  row,
  rowIndex,
  onPlaceDisk,
}: Props) => {
  return (
    <RowStyled>
      { _.map(row, (cell: CellClass, idx) => (
        <Cell
          key={idx}
          cell={cell}
          rowIndex={rowIndex}
          columnIndex={idx}
          onPlaceDisk={onPlaceDisk}
        />
      ))}
    </RowStyled>
  );
};
