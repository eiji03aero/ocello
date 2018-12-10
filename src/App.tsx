import * as React from 'react';
import { Context } from "almin";
import { appStoreGroup } from "./store/AppStoreGroup";
import { Cell } from "./components/sfcs/Cell";

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
    return (
      <div>
        <h1>app comes here</h1>
        <p>you will wait for a little bit man</p>
        { this.state.othello.board.data.map((row: any) => (
          <div>
            { row.map((cell: any) => (
              <Cell>domo</Cell>
            ))}
          </div>
        ))}
      </div>
    );
  }
}
