import * as React from 'react';
import * as _ from "lodash";
import styled from "styled-components";

import { Row } from "./Row";

import { Board as BoardClass, BoardRow } from "../../domain/Board";
import { colors } from "../../utils/colors";

const BoardStyled = styled.div`
  display: inline-block;
  border: 1px solid ${colors.black};
`;

export interface Props {
  board: BoardClass;
}

export const Board: React.SFC<Props> = ({
  board,
} : Props) => {
  return (
    <BoardStyled>
      { _.map(board.cells, (row: BoardRow, idx: number) => (
        <Row
          key={idx}
          rowIndex={idx}
          row={row}
        />
      ))}
    </BoardStyled>
  );
}
