export default class Building {
  constructor(sqft) {
    this._sqft = Building._validateNumber(sqft, 'Sqft');
    if (this.constructor !== Building && !this.evacuationWarningMessage) {
      Building.evacuationWarningMessage();
    }
  }

  static _validateNumber(value, field) {
    if (typeof value !== 'number') {
      throw new TypeError(`${field} must be a number`);
    }
    return value;
  }

  get sqft() {
    return this._sqft;
  }

  static evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
