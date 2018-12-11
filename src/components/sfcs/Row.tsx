import * as React from "react";
import * as _ from "lodash";
import styled from "styled-components";

import { Cell as CellClass } from "../../domain/Cell";
import { Cell } from "./Cell"

const RowStyled = styled.div`
  display: flex;
`;

interface Props {
  cells: CellClass[];
}

export const Row: React.SFC<Props> = ({
  cells,
}: Props) => {
  return (
    <RowStyled>
      { _.map(cells, (cell, idx) => (
        <Cell key={idx} state={cell.state} />
      ))}
    </RowStyled>
  );
};
