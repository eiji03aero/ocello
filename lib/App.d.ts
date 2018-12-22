import * as React from 'react';
import { Context } from "almin";
import { appStoreGroup } from "./store/AppStoreGroup";
interface Props {
    appContext: Context<typeof appStoreGroup.state>;
}
export declare type State = typeof appStoreGroup.state;
export declare class App extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=App.d.ts.map