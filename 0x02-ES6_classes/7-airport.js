export default class Airport {
  constructor(name, code) {
    this._name = Airport._validateString(name, 'Name');
    this._code = Airport._validateString(code, 'Code');
  }

  static _validateString(value, field) {
    if (typeof value !== 'string') {
      throw new TypeError(`${field} must be a string`);
    }
    return value;
  }

  toString() {
    return `[object ${this._code}]`;
  }
}
