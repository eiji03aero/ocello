import * as React from 'react';
import * as _ from "lodash";
import { Context } from "almin";
import { appStoreGroup } from "./store/AppStoreGroup";
import { Board } from "./components/sfcs/Board";
import { SetRandomBoard } from "./usecase/SetRandomBoard";

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

    setTimeout(() => {
      this.props.appContext.useCase(SetRandomBoard.create()).execute();
    }, 2000);
  }

  render () {
    const { data } = this.state.othello.board;

    return (
      <div>
        <h1>app comes here</h1>
        <p>you will wait for a little bit man</p>
        <Board data={data} />
      </div>
    );
  }
}
