export default class Currency {
  constructor(code, name) {
    this._code = Currency._validateString(code, 'Code');
    this._name = Currency._validateString(name, 'Name');
  }

  static _validateString(value, field) {
    if (typeof value !== 'string') {
      throw new TypeError(`${field} must be a string`);
    }
    return value;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    this._code = Currency._validateString(newCode, 'Code');
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = Currency._validateString(newName, 'Name');
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
