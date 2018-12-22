import * as React from 'react';
import { Dispatcher, Context } from "almin";
interface Props {
}
interface State {
    initialized: boolean;
    dispatcher: Dispatcher;
    appContext: Context<any>;
}
export default class OthelloApp extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map