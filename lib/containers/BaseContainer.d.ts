import * as React from "react";
import { UseCase, UseCaseExecutor } from "almin";
export declare class BaseContainer<T, P> extends React.Component<T, P> {
    useCase<FT extends UseCase>(useCase: FT): UseCaseExecutor<FT>;
}
//# sourceMappingURL=BaseContainer.d.ts.map