// const symbol = Symbol('cloneCar');

export default class Car {
  constructor(brand, motor, color) {
    this._brand = Car._validateString(brand, 'Brand');
    this._motor = Car._validateString(motor, 'Motor');
    this._color = Car._validateString(color, 'Color');
  }

  static _validateString(value, field) {
    if (typeof value !== 'string') {
      throw new TypeError(`${field} must be a string`);
    }
    return value;
  }

  cloneCar() {
    return new this.constructor(this._brand, this._motor, this._color);
  }
}
