import * as React from "react";
import * as cn from "classnames";
import styled from "styled-components";

import { colors } from "../../utils/colors";

const RoundDiskStyled = styled.div`
  width: 85%;
  height: 85%;
  border-radius: 50%;

  &.Blank {
    background-color: transparent;
  }

  &.Black {
    background-color: ${colors.black};
  }

  &.White {
    background-color: ${colors.white};
  }
`;

interface Props {
  classNames: string[];
}

export const RoundDisk: React.SFC<Props> = ({
  classNames,
}: Props) => {
  return (
    <RoundDiskStyled
      className={cn(classNames)}
    />
  );
}
