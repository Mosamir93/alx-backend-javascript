export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = HolbertonCourse._validateString(name, 'Name');
    this._length = HolbertonCourse._validateNumber(length, 'Length');
    this._students = HolbertonCourse._validateArrayOfStrings(students, 'Students');
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

  static _validateArrayOfStrings(value, field) {
    if (!Array.isArray(value) || !value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${field} must be an array of strings`);
    }
    return value;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = HolbertonCourse._validateString(newName, 'Name');
  }

  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = HolbertonCourse._validateNumber(newLength, 'Length');
  }

  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = HolbertonCourse._validateArrayOfStrings(newStudents, 'Students');
  }
}
