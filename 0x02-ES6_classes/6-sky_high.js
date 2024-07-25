import Building from './5-building';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = SkyHighBuilding._validateNumber(floors, 'Floors');
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

  get floors() {
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}
