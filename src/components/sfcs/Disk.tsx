import * as React from "react";
import * as cn from "classnames";
import styled from "styled-components";

import { colors } from "../../utils/colors";

const DiskStyled = styled.div`
  width: 85%;
  height: 85%;
  border-radius: 50%;
  background-color: transparent;

  &.Black {
    background-color: ${colors.black};
  }

  &.White {
    background-color: ${colors.white};
  }
`;

interface Props {
  classNames: any;
}

export const Disk: React.SFC<Props> = ({
  classNames,
}: Props) => {
  return (
    <DiskStyled
      className={cn(classNames)}
    />
  );
}
