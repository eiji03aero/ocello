/// <reference types="react" />
import { Props } from "../components/Cell";
import { BaseContainer } from "./BaseContainer";
export declare class CellContainer extends BaseContainer<Partial<Props>, {}> {
    checkIfPlaceable: () => any;
    placeDisk: (coords: number[]) => void;
    render(): JSX.Element;
}
//# sourceMappingURL=CellContainer.d.ts.map