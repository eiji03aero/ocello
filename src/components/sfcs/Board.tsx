import * as React from 'react';
import * as _ from "lodash";
import styled from "styled-components";

import { Board as BoardClass, BoardRow, DiskCoordinates } from "../../domain/Board";
import { Row } from "./Row";
import { colors } from "../../utils/colors";

const BoardStyled = styled.div`
  display: inline-block;
  border: 1px solid ${colors.black};
`;

export interface Props {
  board: BoardClass;
  onPlaceDisk: (coords: DiskCoordinates) => void;
}

export const Board: React.SFC<Props> = ({
  board,
  onPlaceDisk
} : Props) => {
  return (
    <BoardStyled>
      { _.map(board.data, (row: BoardRow, idx: number) => (
        <Row
          key={idx}
          rowIndex={idx}
          row={row}
          onPlaceDisk={onPlaceDisk}
        />
      ))}
    </BoardStyled>
  );
}
