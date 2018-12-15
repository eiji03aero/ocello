import { Context } from "almin";

export class AppLocator {
  _context: null | Context<any>;

  constructor () {
    this._context = null;
  }

  get state () { return this._context.getState(); }

  get context () { return this._context; }

  set context (newContext) { this._context = newContext; }
}

export default new AppLocator();
