import * as React from "react";
import styled from "styled-components";

const CellStyled = styled.div`
  background-color: green;
  display: inline-block;
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
  margin-right: 10px;
`;

interface Props {
  children: React.ReactNode;
}

export const Cell: React.SFC = (props: Props) => {
  return (
    <CellStyled>
      { props.children }
    </CellStyled>
  );
};
