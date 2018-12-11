import * as React from 'react';
import * as _ from "lodash";
import styled from "styled-components";

import { BoardCells } from "../../domain/Board";
import { Row } from "./Row";
import { colors } from "../../utils/colors";

const BoardStyled = styled.div`
  display: inline-block;
  border: 1px solid ${colors.black};
`;

interface Props {
  data: BoardCells;
}

export const Board: React.SFC<Props> = ({
  data,
} : Props) => {
  return (
    <BoardStyled>
      { _.map(data, (row: any, idx: number) => (
        <Row key={idx} cells={row} />
      ))}
    </BoardStyled>
  );
}
