export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = typeof name === 'string' ? this._name = name : () => { throw TypeError('Name must be a string'); };
    this._length = typeof length === 'number' ? this._length = length : () => { throw TypeError('Length must be a number'); };
    this._students = (Array.isArray(students) && students.every((element) => typeof element === 'string')) ? this._students = students : () => { throw TypeError('Students must be an array of strings'); };
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
    this._name = typeof name === 'string' ? this._name = name : () => { throw TypeError('Name must be a string'); };
  }

  set length(length) {
    this._length = typeof length === 'number' ? this._length = length : () => { throw TypeError('Length must be a number'); };
  }

  set students(students) {
    this._students = (Array.isArray(students) && students.every((element) => typeof element === 'string')) ? this._students = students : () => { throw TypeError('Students must be an array of strings'); };
  }
}
