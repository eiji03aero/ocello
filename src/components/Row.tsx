import * as React from "react";
import * as _ from "lodash";
import styled from "styled-components";

import { CellContainer } from "../containers/CellContainer"

import { Cell as CellClass } from "../domain/Cell";
import { BoardRow } from "../domain/Board";

const RowStyled = styled.div`
  display: flex;
`;

interface Props {
  row: BoardRow;
  rowIndex: number;
}

export const Row: React.SFC<Props> = ({
  row,
  rowIndex,
}: Props) => {
  return (
    <RowStyled>
      { _.map(row, (cell: CellClass, idx) => (
        <CellContainer
          key={idx}
          cell={cell}
          rowIndex={rowIndex}
          columnIndex={idx}
        />
      ))}
    </RowStyled>
  );
};
