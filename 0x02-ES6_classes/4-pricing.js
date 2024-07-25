import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = Pricing._validateNumber(amount, 'Amount');
    this._currency = Pricing._validateCurrency(currency, 'Currency');
  }

  static _validateNumber(value, field) {
    if (typeof value !== 'number') {
      throw new TypeError(`${field} must be a number`);
    }
    return value;
  }

  static _validateCurrency(value, field) {
    if (!(value instanceof Currency)) {
      throw new TypeError(`${field} must be an instance of Currency`);
    }
    return value;
  }

  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = Pricing._validateNumber(newAmount, 'Amount');
  }

  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = Pricing._validateCurrency(newCurrency, 'Currency');
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
