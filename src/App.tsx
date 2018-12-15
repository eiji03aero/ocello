import * as React from 'react';
import * as _ from "lodash";
import { Context } from "almin";

import { BoardContainer } from "./containers/BoardContainer";

import { appStoreGroup } from "./store/AppStoreGroup";

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
    const { board } = this.state.othello;

    return (
      <div>
        <h1>app comes here</h1>
        <p>you will wait for a little bit man</p>
        <BoardContainer board={board} />
      </div>
    );
  }
}
