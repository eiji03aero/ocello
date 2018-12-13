import * as React from 'react';
import * as _ from "lodash";
import styled from "styled-components";

import { BoardCells, DiskCoordinates } from "../../domain/Board";
import { Row } from "./Row";
import { colors } from "../../utils/colors";

const BoardStyled = styled.div`
  display: inline-block;
  border: 1px solid ${colors.black};
`;

export interface Props {
  data: BoardCells;
  onPlaceDisk: (coords: DiskCoordinates) => void;
}

export const Board: React.SFC<Props> = ({
  data,
  onPlaceDisk
} : Props) => {
  return (
    <BoardStyled>
      { _.map(data, (row: any, idx: number) => (
        <Row
          key={idx}
          rowIndex={idx}
          cells={row}
          onPlaceDisk={onPlaceDisk}
        />
      ))}
    </BoardStyled>
  );
}
