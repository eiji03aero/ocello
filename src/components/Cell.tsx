import * as React from "react";
import * as cn from "classnames";
import styled from "styled-components";

import { Disk } from "./Disk";

import { CellCoordinates } from "../domain/Board";
import { Cell as CellClass } from "../domain/Cell";
import { colors } from "../utils/colors";

const CellStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${colors.green};
  border: 1px solid ${colors.black};

  &.placeable {
    &:hover {
      cursor: pointer;
      opacity: .8;
    }
  }

  &.not-placeable {
    &:hover {
      pointer-events: none;
    }
  }
`;

export interface Props {
  cell: CellClass;
  rowIndex: number;
  columnIndex: number;
  onPlaceDisk: (coords: CellCoordinates) => void;

  placeable: boolean;
}

export const Cell: React.SFC<Props> = ({
  cell,
  rowIndex,
  columnIndex,
  onPlaceDisk,

  placeable,
}: Props) => {
  const classNames = cn(placeable ? 'placeable' : 'not-placeable')
  const onClickHandler = (e: React.MouseEvent) => {
    if (placeable) {
      onPlaceDisk([rowIndex, columnIndex]);
    }
  }

  return (
    <CellStyled className={classNames}
      onClick={onClickHandler}
    >
      <Disk classNames={cell.color} />
    </CellStyled>
  );
};
