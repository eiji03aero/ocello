import * as React from "react";
import * as _ from "lodash";
import styled from "styled-components";

import { Log } from "../domain/Logger";
import { colors } from "../utils/colors";

const LoggerStyled = styled.div`
  height: 100%;
  background-color: ${colors.black};
  color: ${colors.white};
  overflow-y: scroll;

  .row {
    padding: .6rem 1rem;
    border-top: 1px solid ${colors.blueGrey};
    border-bottom: 1px solid ${colors.blueGrey};
  }

  @media only screen and (min-width: 768px) {
    max-width: 450px;
  }
`;

interface Props {
  logs: Log[];
}

export const Logger: React.SFC<Props> = ({
  logs,
}: Props) => {
  return (
    <LoggerStyled>
      { _.map(logs, (log: Log, idx: number) => (
        <div className="row" key={idx}>
          { log.createdAt }
          <span style={{ marginLeft: 16 }}></span>
          { log.text }
        </div>
      ))}
    </LoggerStyled>
  );
}
