import * as React from "react";
import * as cn from "classnames";
import styled from "styled-components";

import { Disk } from "./Disk";

import { DiskCoordinates } from "../../domain/Board";
import { Cell as CellClass } from "../../domain/Cell";
import { colors } from "../../utils/colors";

const CellStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  background-color: ${colors.green};
  border: 1px solid ${colors.black};

  &.Blank {
    &:hover {
      cursor: pointer;
      opacity: .8;
    }
  }

  &.Placed {
    &:hover {
      pointer-events: none;
    }
  }
`;

interface Props {
  cell: CellClass;
  rowIndex: number;
  columnIndex: number;
  onPlaceDisk: (coords: DiskCoordinates) => void;
}

export const Cell: React.SFC<Props> = ({
  cell,
  rowIndex,
  columnIndex,
  onPlaceDisk,
}: Props) => {
  return (
    <CellStyled className={cn(cell.state)}
      onClick={(e: React.MouseEvent) => onPlaceDisk([rowIndex, columnIndex])}
    >
      <Disk classNames={cell.color} />
    </CellStyled>
  );
};
