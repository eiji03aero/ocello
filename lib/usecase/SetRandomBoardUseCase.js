"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const almin_1 = require("almin");
const Othello_1 = require("../domain/Othello");
const OthelloRepository_1 = require("../infra/OthelloRepository");
class SetRandomBoardUseCase extends almin_1.UseCase {
    constructor({ othelloRepository }) {
        super();
        this.othelloRepository = othelloRepository;
    }
    static create() { return new this({ othelloRepository: OthelloRepository_1.default }); }
    execute() {
        const randomOthello = Othello_1.Othello.RandomGame();
        this.othelloRepository.save(randomOthello);
    }
}
exports.SetRandomBoardUseCase = SetRandomBoardUseCase;
//# sourceMappingURL=SetRandomBoardUseCase.js.map