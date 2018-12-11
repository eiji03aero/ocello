import * as React from "react";
import styled from "styled-components";

import { CellState } from "../../domain/Cell";
import { RoundDisk } from "./RoundDisk";
import { colors } from "../../utils/colors";

const CellStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${colors.green};
  border: 1px solid ${colors.black};
`;

interface Props {
  state: CellState;
}

export const Cell: React.SFC<Props> = ({
  state,
}: Props) => {
  return (
    <CellStyled>
      <RoundDisk classNames={[state]} />
    </CellStyled>
  );
};
