export default class HolbertonClass {
  constructor(size, location) {
    this._size = HolbertonClass._validateNumber(size, 'Size');
    this._location = HolbertonClass._validateString(location, 'Location');
  }

  static _validateString(value, field) {
    if (typeof value !== 'string') {
      throw new TypeError(`${field} must be a string`);
    }
    return value;
  }

  static _validateNumber(value, field) {
    if (typeof value !== 'number') {
      throw new TypeError(`${field} must be a number`);
    }
    return value;
  }

  valueOf() {
    return this._size;
  }

  toString() {
    return this._location;
  }
}
