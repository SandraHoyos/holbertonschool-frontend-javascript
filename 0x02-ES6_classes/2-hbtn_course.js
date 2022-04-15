export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name === 'string') this._name = name;
    else throw TypeError('Name must be a string');

    if (typeof length === 'number') this._length = length;
    else throw TypeError('Name must be a number');

    if (Array.isArray(students) && (students.every((element) => typeof element === 'string'))) this._students = students;
    else throw TypeError('Students must be an array of strings');
  }
  // getter

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // Setter
  set name(name) {
    if (typeof name === 'string') this._name = name;
    else throw TypeError('Name must be a string');
  }

  set length(length) {
    if (typeof length === 'number') this._length = length;
    else throw TypeError('Name must be a number');
  }

  set students(students) {
    if (Array.isArray(students) && (students.every((element) => typeof element === 'string'))) this._students = students;
    else throw TypeError('Students must be an array of strings');
  }
}
