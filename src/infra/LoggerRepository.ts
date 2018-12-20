import * as EventEmitter from 'events';
import { Logger } from "../domain/Logger";

export class LoggerRepository extends EventEmitter {
  private database: Map<string, Logger>;

  constructor () {
    super();
    this.database = new Map();
  }

  lastUsed () {
    return this.database.get(this.lastUsedDomainName);
  }

  save (logger: Logger) {
    this.database.set(this.lastUsedDomainName, logger);
    this.emit('change', logger);
  }

  onChange (handler: () => void) {
    this.on('change', handler);
  }

  get domainName () { return `${Logger.name}`; }
  get lastUsedDomainName () { return `${Logger.name}.lastUsed`; }
}

export default new LoggerRepository();
