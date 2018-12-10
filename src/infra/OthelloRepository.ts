import * as EventEmitter from 'events';
import { Othello } from "../domain/Othello";

export class OthelloRepository extends EventEmitter {
  private database: Map<string, Othello>;

  constructor () {
    super();
    this.database = new Map();
  }

  lastUsed () {
    return this.database.get(this.lastUsedDomainName);
  }

  save (othello: Othello) {
    this.database.set(this.lastUsedDomainName, othello);
    this.emit('change', othello);
  }

  onChange (handler: () => void) {
    this.on('change', handler);
  }

  get domainName () { return `${Othello.name}`; }
  get lastUsedDomainName () { return `${Othello.name}.lastUsed`; }
}

export default new OthelloRepository();
