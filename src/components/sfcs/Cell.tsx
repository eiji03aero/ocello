import * as React from "react";
import * as cn from "classnames";
import styled from "styled-components";

import { RoundDisk } from "./RoundDisk";

import { DiskCoordinates } from "../../domain/Board";
import { CellState } from "../../domain/Cell";
import { colors } from "../../utils/colors";

const CellStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${colors.green};
  border: 1px solid ${colors.black};

  &.can-placed {
    &:hover {
      cursor: pointer;
      opacity: .8;
    }
  }

  &.cannot-placed {
    &:hover {
      pointer-events: none;
    }
  }
`;

interface Props {
  state: CellState;
  rowIndex: number;
  columnIndex: number;
  onPlaceDisk: (coords: DiskCoordinates) => void;
}

export const Cell: React.SFC<Props> = ({
  state,
  rowIndex,
  columnIndex,
  onPlaceDisk,
}: Props) => {
  const classNames = cn({
    'can-placed': state === CellState.Blank,
    'cannot-placed': state !== CellState.Blank,
  });

  return (
    <CellStyled className={classNames}
      onClick={(e: React.MouseEvent) => onPlaceDisk([rowIndex, columnIndex])}
    >
      <RoundDisk classNames={[state]} />
    </CellStyled>
  );
};
