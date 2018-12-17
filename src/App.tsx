import * as React from 'react';
import * as _ from "lodash";
import styled from "styled-components";
import { Context } from "almin";

import { BoardContainer } from "./containers/BoardContainer";
import { GameStatusContainer } from "./containers/GameStatusContainer";

import { appStoreGroup } from "./store/AppStoreGroup";

const AppStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

interface Props {
  appContext: Context<typeof appStoreGroup.state>;
}

export type State = typeof appStoreGroup.state;

export class App extends React.Component<Props, State> {
  constructor (props: Props) {
    super(props);
    this.state = props.appContext.getState();
  }

  componentDidMount () {
    this.props.appContext.onChange(() => {
      this.setState(this.props.appContext.getState());
    });
  }

  render () {
    const {
      board,
      currentPlayer,
      boardStatus,
    } = this.state.othello;

    return (
      <AppStyled>
        <BoardContainer
          board={board}
        />
        <GameStatusContainer
          currentPlayer={currentPlayer}
          boardStatus={boardStatus}
        />
      </AppStyled>
    );
  }
}
