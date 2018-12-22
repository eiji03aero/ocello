import * as React from "react";
import { Props } from "../components/GameStatus";
import { BaseContainer } from "./BaseContainer";
export declare class GameStatusContainer extends BaseContainer<Partial<Props>, {}> {
    onSkipTurn: (e: React.SyntheticEvent<Element>) => void;
    onNewGame: (e: React.SyntheticEvent<Element>) => void;
    render(): JSX.Element;
}
//# sourceMappingURL=GameStatusContainer.d.ts.map