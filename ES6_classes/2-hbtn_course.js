export default class HolbertonCourse {
  // Constructor de la clase HolbertonCourse
  constructor(name, length, students) {
    // Verifica que 'name' sea de tipo string
    if (typeof name !== 'string') throw TypeError('name must be a string');
    // Verifica que 'length' sea de tipo number
    if (typeof length !== 'number') throw TypeError('length must be a number');
    // Verifica que 'students' sea un array y que todos sus elementos sean strings
    if (!Array.isArray(students) || !students.every((el) => typeof el === 'string')) {
      throw TypeError('students must be an array of strings');
    }
    // Inicializa las propiedades de la clase con los valores proporcionados
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Getter

  // Getter para obtener el nombre del curso
  get name() {
    return this._name;
  }

  // Getter para obtener la duración del curso
  get length() {
    return this._length;
  }

  // Getter para obtener la lista de estudiantes del curso
  get students() {
    return this._students;
  }

  // Setter
  set name(newName) {
    // Verifica que 'newName' sea de tipo string
    if (typeof newName !== 'string') throw TypeError('name must be a string');
    // Actualiza el nombre del curso
    this._name = newName;
  }

  // Setter para actualizar la duración del curso
  set length(newLength) {
    // Verifica que 'newLength' sea de tipo number
    if (typeof newLength !== 'number') throw TypeError('length must be a number');
    // Actualiza la duración del curso
    this._length = newLength;
  }

  // Setter para actualizar la lista de estudiantes del curso
  set students(newStudents) {
    // Verifica que 'newStudents' sea un array y que todos sus elementos sean strings
    if (!Array.isArray(newStudents) || !newStudents.every((el) => typeof el === 'string')) {
      throw TypeError('students must be an array of strings');
    }
    // Actualiza la lista de estudiantes del curso
    this._students = newStudents;
  }
}
